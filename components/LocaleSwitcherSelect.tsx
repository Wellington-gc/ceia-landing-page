'use client';

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { locales } from "@/config/config";
import { usePathname, useRouter } from "@/config/navigation";
import { ComboboxItem, Image, Select, SelectProps, Stack, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
        <Stack gap={0} pl={"3px"}>
            {icons[option.value]}
            <Text>{option.label}</Text>
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
            data={locales.filter((l) => l !== locale)}
            onChange={(_value, option) => onSelectChange(option)}
            disabled={isPending}
            defaultValue={locale}
            renderOption={renderSelectOption}
            leftSection={
                <Stack gap={0} align="center">
                    <Image src={`/${locale}.png`} alt="Flag" w={38} h={24} />
                    <Text c={"white"}>{locale}</Text>
                </Stack>
            }
            rightSection={<FontAwesomeIcon icon={faChevronDown} />}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
        />
    );
}