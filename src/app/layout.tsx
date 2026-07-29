import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Aconecto Portfolio",
  creator: "Jongchan Ko",
  icons: {
    icon: [
      { url: "/assets/brand/aconecto-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/aconecto-icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/assets/brand/aconecto-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/assets/brand/aconecto-icon-192.png", sizes: "192x192" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const langRedirect = `(function(){try{if(location.pathname==="/"){var l=(navigator.language||navigator.userLanguage||"").toLowerCase();if(l&&l.indexOf("ko")!==0){location.replace("/en/");}}}catch(e){}})();`;

const themeBootstrap = `(function(){try{var t=localStorage.getItem("aconecto-theme")||"light";document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" data-theme="light" suppressHydrationWarning>
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
