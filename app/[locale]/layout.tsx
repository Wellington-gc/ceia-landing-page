import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
    title: "CEIA - Centro de Excelência em IA - UFG",
    description: "O Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG) desenvolve soluções inovadoras...",
};

const theme = createTheme({
    fontFamily: 'Roboto',
    colors: {
        'primary-dark-blue': [
            "#edf2fd",
            "#d7e2f5",
            "#aac1ee",
            "#7b9fe7",
            "#5582e2",
            "#3f70df",
            "#3367e0",
            "#2756c6",
            "#1f4db1",
            "#11429d"
        ],
        'secondary-dark-blue': [
            "#ebf6ff",
            "#d5eafa",
            "#a7d3f6",
            "#76bbf4",
            "#52a7f3",
            "#3f9af3",
            "#3695f4",
            "#2a81d9",
            "#1f73c2",
            "#0263ac"
        ],
        'primary-light-blue': [
            "#e3f5ff",
            "#cce5ff",
            "#99c9ff",
            "#64abff",
            "#3792fd",
            "#1a82fd",
            "#007afe",
            "#0068e3",
            "#005ccd",
            "#0050b5"
        ],
        'secondary-light-blue': [
            "#defbff",
            "#c9f2ff",
            "#99e3ff",
            "#64d1fd",
            "#39c3fb",
            "#1cbbfb",
            "#00b6fc",
            "#00a0e1",
            "#008fcb",
            "#007bb3"
        ]
    }
});

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <ColorSchemeScript />
            </head>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <MantineProvider theme={theme}>
                        {children}
                    </MantineProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}