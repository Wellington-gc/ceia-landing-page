'use client';

import { AppPathnames } from "@/config/config";
import { Link } from "@/config/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

export default function NavigationLink<Pathname extends AppPathnames>(
    { href, ...rest }: ComponentProps<typeof Link<Pathname>>
) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? "page" : undefined}
            className={isActive ? 'text-white' : 'text-gray-300'}
            href={href}
            {...rest}
        />
    );
}