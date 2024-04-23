'use client';

import { usePathname, useRouter } from "@/config/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

type Props = {
    children: React.ReactNode;
    defaultValue: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;

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
        <div className="flex flex-col items-center space-y-1">
            <label htmlFor="select">
                <Image src={`/${locale}.png`} alt="locale" width={38} height={24}></Image>
            </label>
            <select
                className="bg-transparent uppercase outline-none"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
                id="select"
            >
                {children}
            </select>
        </div>

    );
}