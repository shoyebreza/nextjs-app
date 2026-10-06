"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Product", href: "/#product" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-display text-xl font-bold tracking-[-0.04em] text-ink">lumen<span className="text-coral">.</span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-ink">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login" className="text-sm font-semibold text-ink">Sign in</Link>
          <Button href="/register">Start free</Button>
        </div>
        <button type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden">
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && <nav className="border-t border-line px-6 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="flex flex-col gap-4">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-ink">{link.label}</Link>)}</div>
        <div className="mt-5 flex items-center gap-4"><Link href="/login" className="text-sm font-semibold text-ink">Sign in</Link><Button href="/register" className="flex-1">Start free</Button></div>
      </nav>}
    </header>
  );
}