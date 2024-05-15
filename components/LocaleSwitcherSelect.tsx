'use client';

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { locales } from "@/config/config";
import { usePathname, useRouter } from "@/config/navigation";
import { Card, ComboboxItem, Container, Image, Select, SelectProps, Stack, Text } from "@mantine/core";

export default function LocaleSwitcherSelect() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();

    const icons: Record<string, React.ReactNode> = {
        'pt-BR': <Image src="/pt-BR.png" alt="Flag-br" w={38} h={24} />,
        'en-US': <Image src="/en-US.png" alt="Flag-us" w={38} h={24} />,
        'es-ES': <Image src="/es-ES.png" alt="Flag-es" w={38} h={24} />,
    };

    const renderSelectOption: SelectProps['renderOption'] = ({ option }) => (
        <Stack>
            {icons[option.value]}
            {option.label}
        </Stack>
    );

    function onSelectChange(option: ComboboxItem) {
        const nextLocale = option.value;

        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }

    return (
        <Select
            classNames={{
                input: 'locale-select-input',
                section: 'locale-select-section',
                wrapper: 'locale-select-wrapper',
                dropdown: 'locale-select-dropdown',
                options: 'locale-select-options',
            }}
            value={locale}
            data={locales}
            onChange={(_value, option) => onSelectChange(option)}
            disabled={isPending}
            defaultValue={locale}
            renderOption={renderSelectOption}
            leftSection={
                <Image src={`/${locale}.png`} alt="Flag" w={38} h={24} />
            }
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
        />
    );
}