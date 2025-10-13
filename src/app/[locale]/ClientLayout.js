// components/ClientLayout.js
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { I18nProvider } from '../../i18n/context';
import BootstrapClient from "../../components/BootstrapClient";
import LoadingSpinner from "../../components/Loading/Loading";

export default function ClientLayout({ children, params }) {
    const urlParams = useParams();
    const locale = params?.locale || urlParams?.locale;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // محاكاة وقت التحميل
        const timer = setTimeout(() => {
            const direction = locale === 'ar' ? 'rtl' : 'ltr';

            // تحديث اللغة والاتجاه
            if (typeof document !== 'undefined') {
                document.documentElement.lang = locale;
                document.documentElement.dir = direction;
                document.body.dir = direction;
            }

            setIsLoading(false);
        }, 2500); // 1.5 ثانية

        return () => clearTimeout(timer);
    }, [locale]);

    // عرض الـ Loading
    if (isLoading) {
        return <LoadingSpinner />;
    }

    // المحتوى الرئيسي بعد التحميل
    return (
        <I18nProvider>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <BootstrapClient />
        </I18nProvider>
    );
}