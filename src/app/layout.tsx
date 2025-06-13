import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "heyit'sjustjae - official website",
  description: "heyit'sjustjae - official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-[100dvh] ${doto.variable} antialiased`} >
        <main className="flex flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
