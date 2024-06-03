import type { Metadata } from "next";
import "./globals.css";
import SessionProviderWrapper from "@/lib/SessionProvider";
import { getServerSession } from "next-auth";
import manrope from "@/utils/fonts/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProviderWrapper session={session}>
        <body className={`${manrope} h-screen w-screen`}>{children}</body>
      </SessionProviderWrapper>
    </html>
  );
}
