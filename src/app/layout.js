import Protection from "@/components/Protection";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="rtl">
            <body >
                {/* <Protection /> */}
                    {children}
            </body>
        </html>
    );
}
// layout