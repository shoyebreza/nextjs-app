"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dashboardNavItems } from "@/config/navigation";

type DashboardHeaderProps = { eyebrow?: string };

export function DashboardHeader({ eyebrow = "Workspace" }: DashboardHeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();
  const currentPage = dashboardNavItems.find((item) => item.href === pathname) ?? dashboardNavItems[0];

  return <header className="relative flex min-h-[5.25rem] items-center justify-between border-b border-line bg-white px-6 lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{eyebrow} / {currentPage.label}</p><h1 className="mt-1 font-display text-xl font-bold tracking-[-0.03em] text-ink">{currentPage.label}</h1></div><div className="flex items-center gap-3"><button aria-label="Notifications" type="button" className="grid h-10 w-10 place-items-center rounded-full border border-line text-sm text-muted hover:bg-paper">!</button><div className="relative"><button type="button" onClick={() => setProfileOpen(!profileOpen)} aria-expanded={profileOpen} className="flex items-center gap-2 rounded-full border border-line py-1.5 pl-1.5 pr-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-coral text-[10px] font-bold text-white">SK</span><span className="hidden text-sm font-semibold text-ink sm:block">Sam Kim</span><span className="text-xs text-muted">⌄</span></button>{profileOpen && <div className="absolute right-0 top-12 z-10 w-40 rounded-xl border border-line bg-white p-2 shadow-xl"><Link href="/settings" className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paper">Account settings</Link><button type="button" onClick={() => signOut({ callbackUrl: "/" })} className="block w-full rounded-lg px-3 py-2 text-left text-sm text-ink hover:bg-paper">Sign out</button></div>}</div></div><nav aria-label="Dashboard navigation" className="fixed bottom-4 left-4 right-4 z-30 flex justify-around rounded-2xl border border-line bg-white/95 p-2 shadow-xl backdrop-blur lg:hidden">{dashboardNavItems.map((item) => <Link key={item.href} href={item.href} className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold ${pathname === item.href ? "bg-sage text-ink" : "text-muted"}`}><span className="text-base">{item.icon}</span>{item.label}</Link>)}</nav></header>;
}