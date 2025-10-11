'use client';
import { usePathname } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';

    const toggleLanguage = () => {
        const newLocale = currentLocale === 'ar' ? 'en' : 'ar';
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPathname = segments.join('/');
        window.location.href = newPathname;
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`btn ${styles.languageBtn}`}
            aria-label="Toggle language"
        >
            {currentLocale === 'ar' ? 'EN' : 'AR'}
        </button>
    );
};

export default LanguageSwitcher;
