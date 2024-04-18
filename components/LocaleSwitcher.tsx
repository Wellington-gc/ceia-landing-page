import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config/config";

export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale}>
            {locales.map((locale) => {
                return (
                    <option key={locale} value={locale} style={{ backgroundColor: "lightgray", color: "black" }}>
                        {locale}
                    </option>
                );
            })}
        </LocaleSwitcherSelect>
    );
}