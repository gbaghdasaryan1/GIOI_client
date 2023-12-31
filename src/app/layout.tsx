import { Topbar } from "@/Components/Topbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/Footer";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Topbar />
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
