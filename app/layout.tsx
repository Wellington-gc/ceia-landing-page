// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '../styles/globals.css';
import '@mantine/carousel/styles.css';

import { ReactNode } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
