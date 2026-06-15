import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Aconecto Portfolio",
  creator: "Jongchan Ko",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const langRedirect = `(function(){try{if(location.pathname==="/"){var l=(navigator.language||navigator.userLanguage||"").toLowerCase();if(l&&l.indexOf("ko")!==0){location.replace("/en/");}}}catch(e){}})();`;

const themeBootstrap = `(function(){try{var t=localStorage.getItem("aconecto-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}})();`;

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: locale redirect must run before paint to route international visitors */}
        <script dangerouslySetInnerHTML={{ __html: langRedirect }} />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme bootstrap must run before paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
