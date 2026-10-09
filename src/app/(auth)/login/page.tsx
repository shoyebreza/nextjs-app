import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = { title: "Sign in" };

export default function LoginPage() {
  return <div className="w-full max-w-md"><div className="text-center"><p className="eyebrow">Welcome back</p><h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] text-ink">Good to see you.</h1><p className="mt-3 text-sm text-muted">Sign in to pick up where you left off.</p></div><LoginForm /><p className="mt-8 text-center text-sm text-muted">New to Lumen? <Link href="/register" className="font-semibold text-ink underline underline-offset-4">Create an account</Link></p></div>;
}