import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CEIA - Centro de Excelência em IA - UFG",
    description: "O Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG) desenvolve soluções inovadoras...",
};


export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>{children}</body>
        </html>
    );
}