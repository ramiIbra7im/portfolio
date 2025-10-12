import { redirect } from "next/navigation";

export default function HomeRedirect() {
    redirect("/en"); // أو لأي لغة افتراضية عندك
}
