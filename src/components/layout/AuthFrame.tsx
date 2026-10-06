import Link from "next/link";

export function AuthFrame({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex min-h-screen flex-col bg-paper"><header className="px-6 py-7 lg:px-10"><Link href="/" className="font-display text-xl font-bold tracking-[-0.04em] text-ink">lumen<span className="text-coral">.</span></Link></header><main className="flex flex-1 items-center justify-center px-6 py-12">{children}</main><footer className="flex justify-center gap-5 px-6 py-7 text-xs text-muted"><a href="#terms" className="hover:text-ink">Terms</a><a href="#privacy" className="hover:text-ink">Privacy</a><span>© 2026 Lumen</span></footer></div>;
}