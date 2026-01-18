"use client";

import "./globals.css";

import { SessionProvider } from "next-auth/react";
import LogoutButton from "@/app/components/logoutButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <LogoutButton />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
