'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { translations, defaultLocale } from './config';

const I18nContext = createContext();

export function I18nProvider({ children }) {
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState(defaultLocale);

    // ✅ تحديد اللغة الحالية من الـ URL
    useEffect(() => {
        const pathSegments = pathname.split('/');
        const newLocale = pathSegments[1] || defaultLocale;

        if (newLocale !== currentLocale) {
            setCurrentLocale(newLocale);
        }
    }, [pathname]);

    // ✅ تحديث اتجاه الصفحة ولغة الـ <html>
    useEffect(() => {
        document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLocale;
    }, [currentLocale]);

    // ✅ دالة الترجمة
    const t = (key) => {
        return translations[currentLocale]?.[key] || translations[defaultLocale]?.[key] || key;
    };

    // ✅ لما تتغير اللغة، نرندر الصفحة من جديد تلقائيًا
    const contextValue = {
        t,
        currentLocale,
        changeLanguage: (newLocale) => {
            setCurrentLocale(newLocale);
            document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = newLocale;
        },
    };

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    );
}

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};
