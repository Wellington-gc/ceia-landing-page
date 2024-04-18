import { defaultLocale } from "@/config/config";
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect(defaultLocale);
}
