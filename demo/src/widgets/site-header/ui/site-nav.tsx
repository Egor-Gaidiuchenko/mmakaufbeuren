"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { routes } from "@/shared/config";
import { SignalLink } from "@/shared/ui";

const navigation = [
  { href: routes.schedule, label: "Trainingsplan", match: [routes.schedule] },
  { href: routes.prices, label: "Preise", match: [routes.prices] },
  { href: routes.journal, label: "Journal", match: [routes.journal, routes.article] },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  return (
    <>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-[84px]">
        <nav aria-label="Hauptnavigation" className="flex items-center gap-[84px]">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href} current={matchesPath(pathname, item.match)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <SignalLink href={routes.trial}>Probetraining</SignalLink>
      </div>
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setMenuPath(open ? null : pathname)}
      >
        <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className="h-px bg-white" />
          <span className="h-px bg-white" />
          <span className="h-px bg-white" />
        </span>
      </button>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation"
          className="absolute inset-x-0 top-full z-20 flex flex-col gap-5 bg-ink px-6 py-6 lg:hidden"
        >
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href} current={matchesPath(pathname, item.match)}>
              {item.label}
            </NavLink>
          ))}
          <SignalLink href={routes.trial}>Probetraining</SignalLink>
        </nav>
      ) : null}
    </>
  );
}

function NavLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: string;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={
        current
          ? "text-base text-signal"
          : "text-base text-white transition-colors hover:text-signal focus-visible:text-signal"
      }
    >
      {children}
    </Link>
  );
}

function matchesPath(pathname: string, prefixes: readonly string[]): boolean {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}
