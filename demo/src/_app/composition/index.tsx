import type { ReactNode } from "react";

import "../styles/globals.css";

type RootProvidersProps = {
  children: ReactNode;
};

export function RootProviders({ children }: RootProvidersProps) {
  return children;
}
