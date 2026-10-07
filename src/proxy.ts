import { NextResponse, type NextRequest } from "next/server";
import {
  getClientKey,
  isFlooding,
  isSuspiciousBot,
  pruneRequestStore,
} from "@/lib/security/request-guard";

const protectedPaths = ["/dashboard", "/settings", "/login", "/register"];

function isProtectedPath(pathname: string) {
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const clientKey = getClientKey(request.headers.get("x-forwarded-for"), userAgent);
  const responseHeaders = new Headers({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "X-Request-Id": crypto.randomUUID(),
  });

  pruneRequestStore();

  if (isProtectedPath(request.nextUrl.pathname) && isSuspiciousBot(userAgent)) {
    return NextResponse.json({ error: "Automated access is not allowed on this route." }, { status: 403, headers: responseHeaders });
  }

  const requestLimit = isProtectedPath(request.nextUrl.pathname) ? 20 : 60;
  if (isFlooding(clientKey, Date.now(), requestLimit)) {
    responseHeaders.set("Retry-After", "60");
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429, headers: responseHeaders });
  }

  const response = NextResponse.next();
  responseHeaders.forEach((value, key) => response.headers.set(key, value));
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};