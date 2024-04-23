import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config/config";

export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale}>
            {locales.map((locale) => {
                return (
                    <option key={locale} value={locale} className="bg-black text uppercase">
                        {locale}
                    </option>
                );
            })}
        </LocaleSwitcherSelect>

    );
}