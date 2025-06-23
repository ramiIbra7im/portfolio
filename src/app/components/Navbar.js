'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import '../Navstyle.css';

function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const collapseRef = useRef(null);
  const pathname = usePathname(); // ✅ الرابط الحالي

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLinkClick = () => {
    const collapseEl = collapseRef.current;
    if (collapseEl && collapseEl.classList.contains('show')) {
      collapseEl.classList.remove('show');
    }
  };

  const navClasses = `navbar navbar-expand-lg p-2 fixed-top ${isClient ? 'visible' : ''}`;

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={navClasses}>
      <div className="container">
        <Link className="navbar-brand p-0 m-0" href="/">
          <h2 className="fw-bold text-white">
            RB<span className="span-dot">.</span>
          </h2>
        </Link>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="custom-toggler">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto fw-bold text-white">
            {links.map(({ path, label }) => (
              <li className="nav-item pe-3 text-white" key={path}>
                <Link
                  href={path}
                  className={`nav-link ${pathname === path ? 'active' : ''}`}
                  onClick={handleLinkClick}
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
