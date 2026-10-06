import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Create an account" };

export default function RegisterPage() {
  return <div className="w-full max-w-md"><div className="text-center"><p className="eyebrow">Start with clarity</p><h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] text-ink">Make space for momentum.</h1><p className="mt-3 text-sm text-muted">Create your free workspace in under two minutes.</p></div><form className="mt-9 space-y-4"><label className="field-label">Your name<input className="input mt-2" type="text" placeholder="Sam Kim" /></label><label className="field-label">Work email<input className="input mt-2" type="email" placeholder="you@company.com" /></label><label className="field-label">Create a password<input className="input mt-2" type="password" placeholder="At least 8 characters" /></label><Button type="submit" className="mt-2 w-full">Create workspace</Button></form><p className="mt-8 text-center text-xs leading-5 text-muted">By continuing, you agree to our terms and privacy policy.</p><p className="mt-3 text-center text-sm text-muted">Already have an account? <Link href="/login" className="font-semibold text-ink underline underline-offset-4">Sign in</Link></p></div>;
}