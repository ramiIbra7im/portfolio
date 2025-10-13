// components/navbar/Navbar.js
'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../../i18n/context';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';
import Image from 'next/image';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, currentLocale } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menuOpen');
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menuOpen');
      document.documentElement.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const links = useMemo(() => [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/contact', label: t('nav.contact') },
  ], [t]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
        <div className="container position-relative">
          {/* Brand */}
          <Link className={`navbar-brand ${styles.brand}`} href={`/${currentLocale}`} onClick={closeMobileMenu}>
            <Image src="/Images/logo.png" alt="Logo" width={40} height={40} className="rounded-5" />
          </Link>

          {/* Language Switcher - في اليسار */}
          <div className="d-none d-lg-block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Toggler */}
          <div className={`d-flex align-items-center ${styles.togglerContainer}`}>
            {/* Language Switcher في الموبايل */}
            <div className="d-lg-none me-3">
              <LanguageSwitcher />
            </div>

            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <div className={`${styles.customToggler} ${isMobileMenuOpen ? styles.active : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className={`collapse navbar-collapse ${styles.navbarCollapse}`}>
            <ul className="navbar-nav ms-auto">
              {links.map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <Link
                    href={`/${currentLocale}${path}`}
                    className={`nav-link ${styles.navLink} ${pathname === `/${currentLocale}${path}` ||
                      (path === '/' && pathname === `/${currentLocale}`) ? styles.active : ''
                      }`}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.show : ''}`}>
        {/* Close Button بدون علامة X */}


        {/* Navigation Links */}
        <ul className="navbar-nav">
          {links.map(({ path, label }) => (
            <li className="nav-item" key={path}>
              <Link
                href={`/${currentLocale}${path}`}
                className={`nav-link ${styles.navLink} ${pathname === `/${currentLocale}${path}` ? styles.active : ''
                  }`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* BY Ramy Ibrahim */}
        <div className={styles.mobileFooter}>
          <p className={styles.credit}>BY Ramy Ibrahim</p>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.show : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
}

export default Navbar;