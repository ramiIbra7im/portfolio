'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../../i18n/context';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t, currentLocale } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // استخدم useMemo علشان الـ links تتحدث عندما تتغير اللغة
  const links = useMemo(() => [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/contact', label: t('nav.contact') },
  ], [t]);

  // علشان نضيف console.log علشان نشوف التغييرات
  useEffect(() => {

  }, [currentLocale, links, pathname]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} href={`/${currentLocale}`}>
          RB<span className={styles.dot}>.</span>
        </Link>

        <div className="d-flex align-items-center">
          <LanguageSwitcher />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  href={`/${currentLocale}${path}`}
                  className={`nav-link ${styles.navLink} ${pathname === `/${currentLocale}${path}` ||
                    (path === '/' && pathname === `/${currentLocale}`) ? styles.active : ''
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;