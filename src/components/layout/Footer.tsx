import Link from "next/link";

const columns = [
  { title: "Product", links: ["Features", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Contact"] },
  { title: "Resources", links: ["Journal", "Help center", "Security"] },
];

export function Footer() {
  return <footer className="border-t border-line bg-sage/35">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.5fr_2fr] lg:px-10">
      <div><Link href="/" className="font-display text-xl font-bold tracking-[-0.04em] text-ink">lumen<span className="text-coral">.</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-muted">A calmer way to turn good ideas into meaningful work.</p><div className="mt-7 flex gap-2"><a href="#linkedin" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-line text-xs font-bold text-ink hover:bg-white">in</a><a href="#x" aria-label="X" className="grid h-9 w-9 place-items-center rounded-full border border-line text-sm font-bold text-ink hover:bg-white">x</a><a href="#instagram" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-line text-xs font-bold text-ink hover:bg-white">ig</a></div></div>
      <div className="grid grid-cols-3 gap-5">{columns.map((column) => <div key={column.title}><h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">{column.title}</h2><ul className="mt-5 space-y-3">{column.links.map((link) => <li key={link}><a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted hover:text-ink">{link}</a></li>)}</ul></div>)}</div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-line px-6 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Lumen Studio. All rights reserved.</span><span>Made for focused teams.</span></div>
  </footer>;
}