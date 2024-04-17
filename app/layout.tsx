import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CEIA - Centro de Excelência em IA - UFG",
  description: "O Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG) desenvolve soluções inovadoras...",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
