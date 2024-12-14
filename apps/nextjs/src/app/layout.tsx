import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "~/app/globals.css";

import ConvexClientProvider from "~/convex/client";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Test",
  description: "Test",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewportFit: "cover",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full bg-background">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable}h-full overscroll-none bg-background font-sans text-foreground antialiased`}
      >
        <ConvexClientProvider>{props.children}</ConvexClientProvider>
      </body>
    </html>
  );
}
