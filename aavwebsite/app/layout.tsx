// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/ui/navbar"; // make sure this path matches your file

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-[#0b0c0e] dark:text-white`}
      >
        {/* <Navbar /> */}
        {/* offset for sticky navbar height (~64px). Adjust if your navbar is taller/shorter */}
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
