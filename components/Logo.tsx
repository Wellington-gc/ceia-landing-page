import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    const locale = useLocale();

    return (
        <Link className="cursor-pointer h-20 w-14 relative" href={`/${locale}`}>
            <Image src="/logo.png" alt="Logo" fill={true} />
        </Link>
    );
}