"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dashboardNavItems } from "@/config/navigation";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return <aside className={`${collapsed ? "w-[5.25rem]" : "w-64"} hidden shrink-0 border-r border-line bg-white transition-[width] duration-200 lg:block`}>
    <div className="flex h-full min-h-screen flex-col p-4">
      <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"} px-2 py-3`}><Link href="/" className="font-display text-xl font-bold tracking-[-0.04em] text-ink">{collapsed ? "l" : <>lumen<span className="text-coral">.</span></>}</Link>{!collapsed && <button aria-label="Collapse sidebar" type="button" onClick={() => setCollapsed(true)} className="text-xl text-muted hover:text-ink">‹</button>}</div>
      {collapsed && <button aria-label="Expand sidebar" type="button" onClick={() => setCollapsed(false)} className="mx-auto my-5 text-xl text-muted hover:text-ink">›</button>}
      <p className={`${collapsed ? "sr-only" : ""} mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted`}>Workspace</p>
      <nav className="space-y-1">{dashboardNavItems.map((item) => { const active = pathname === item.href; return <Link key={item.href} href={item.href} title={collapsed ? item.label : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${collapsed ? "justify-center" : ""} ${active ? "bg-sage text-ink" : "text-muted hover:bg-paper hover:text-ink"}`}><span className="text-base">{item.icon}</span>{!collapsed && item.label}</Link>; })}</nav>
      <div className={`${collapsed ? "p-1" : "p-3"} mt-auto rounded-2xl bg-paper`}><div className="flex items-center gap-2"><div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-coral text-xs font-bold text-white">SK</div>{!collapsed && <div className="min-w-0"><p className="truncate text-xs font-bold text-ink">Sam Kim</p><p className="truncate text-[11px] text-muted">Pro workspace</p></div>}</div></div>
    </div>
  </aside>;
}