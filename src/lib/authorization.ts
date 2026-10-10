import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { Role } from "@/lib/roles";
import { hasRole } from "@/lib/roles";

export async function requireRole(requiredRole: Role) {
  const session = await auth();

  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent("/settings")}`);
  }

  if (!session.user.role || !hasRole(session.user.role, requiredRole)) {
    redirect("/dashboard");
  }

  return session;
}
