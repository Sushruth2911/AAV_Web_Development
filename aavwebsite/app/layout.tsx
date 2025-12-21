// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AAV",
  description: "Autonomous systems @ NTU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-white text-zinc-900 dark:bg-[#0b0c0e] dark:text-white`}
      >
        {/* offset for sticky navbar height */}
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
