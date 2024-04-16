import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CEIA - Centro de Excelência em IA - UFG",
  description: "O Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG) desenvolve soluções inovadoras...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
