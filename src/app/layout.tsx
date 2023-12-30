import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "面接対策オンライン",
  description:
    "面接対策オンラインは、リアルな通話画面でオンライン面接の練習ができるアプリです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Dark Mode
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background text-foreground p-4 h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
