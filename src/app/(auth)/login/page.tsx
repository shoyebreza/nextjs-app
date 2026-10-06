import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Sign in" };

export default function LoginPage() {
  return <div className="w-full max-w-md"><div className="text-center"><p className="eyebrow">Welcome back</p><h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] text-ink">Good to see you.</h1><p className="mt-3 text-sm text-muted">Sign in to pick up where you left off.</p></div><form className="mt-9 space-y-4"><label className="field-label">Email<input className="input mt-2" type="email" placeholder="you@company.com" /></label><label className="field-label">Password<input className="input mt-2" type="password" placeholder="••••••••" /></label><div className="flex justify-end"><a href="#forgot" className="text-xs font-semibold text-teal">Forgot password?</a></div><Button type="submit" className="w-full">Sign in</Button></form><p className="mt-8 text-center text-sm text-muted">New to Lumen? <Link href="/register" className="font-semibold text-ink underline underline-offset-4">Create an account</Link></p></div>;
}