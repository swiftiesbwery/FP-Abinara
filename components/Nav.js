"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./data";

export default function Nav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-bold tracking-tight text-lg">
          Abinara<span className="text-brand">-1</span>
        </Link>
        <nav className="flex gap-5 sm:gap-8 text-sm overflow-x-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={path === l.href ? "page" : undefined}
              className={`py-1 border-b-2 transition-colors whitespace-nowrap ${
                path === l.href ? "border-brand text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
