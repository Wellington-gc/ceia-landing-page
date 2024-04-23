import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function LogoComponent() {
    const locale = useLocale();

    return (
        <Link className="flex items-center" href={`/${locale}`}>
            <Image src="/logo.png" alt="Logo" width={57} height={73} />
        </Link>
    );
}