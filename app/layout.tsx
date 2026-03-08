// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indosawit.Net | Pusat Asupan Kabar Terkini",
  description: "Aggregator berita modern besutan Rahmat (rAi-engine) menggunakan API NexRay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#0B0F19] antialiased`}>
        {children}
      </body>
    </html>
  );
}
