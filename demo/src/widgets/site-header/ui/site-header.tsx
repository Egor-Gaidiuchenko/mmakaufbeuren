import Link from "next/link";

import { routes } from "@/shared/config";
import { Container } from "@/shared/ui";

import { Logo } from "./Logo";
import { SiteNav } from "./site-nav";

export function SiteHeader() {
  return (
    <header className="relative bg-ink text-white">
      <Container>
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-[138px] lg:justify-start lg:gap-[84px] lg:px-10">
          <Link href={routes.home} aria-label="MMA Kaufbeuren" className="shrink-0">
            <span className="sm:hidden">
              <Logo height={40} />
            </span>
            <span className="hidden sm:block lg:hidden">
              <Logo height={56} />
            </span>
            <span className="hidden lg:block">
              <Logo height={88} />
            </span>
          </Link>
          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
