import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isac CV",
  description: "My resumé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-ctp-base text-ctp-text`}>
        {children}
      </body>
    </html>
  );
}
