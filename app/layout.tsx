import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout(props: Readonly<RootLayoutProps>) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon-32x32.png"
        />
      </head>

      <body className={outfit.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
