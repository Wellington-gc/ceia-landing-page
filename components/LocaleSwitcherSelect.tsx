'use client';

import { usePathname, useRouter } from "@/config/navigation";
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
        <select
            className="bg-transparent px-4 py-2 border border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            defaultValue={defaultValue}
            disabled={isPending}
            onChange={onSelectChange}
        >
            {children}
        </select>
    );
}