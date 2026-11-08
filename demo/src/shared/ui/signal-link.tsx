import Link from "next/link";

import { ArrowUpRight } from "./arrow-up-right";

type SignalLinkProps = {
  href: string;
  children: string;
};

export function SignalLink({ href, children }: SignalLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center gap-2 bg-signal px-3 text-sm font-medium text-white"
    >
      {children}
      <ArrowUpRight />
    </Link>
  );
}
