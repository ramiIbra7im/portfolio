'use client';

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navstyle.css';

function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const collapseRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // غلق التوجل عند الضغط على أي رابط
  const handleLinkClick = () => {
    const collapseEl = collapseRef.current;
    if (collapseEl && collapseEl.classList.contains('show')) {
      collapseEl.classList.remove('show');
    }
  };

  const navClasses = `navbar navbar-expand-lg p-2 fixed-top ${isClient ? 'visible' : ''}`;

  return (
    <nav className={navClasses}>
      <div className="container">
        <Link className="navbar-brand p-0 m-0" href="/">
          <h2 className="fw-bold text-white">RB<span className="span-dot">.</span></h2>
        </Link>

        <button
          className="navbar-toggler d-lg-none" // ✅ يظهر فقط في الشاشات الصغيرة
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
            {["/", "/about", "/projects", "/skills", "/contact"].map((path, i) => (
              <li className="nav-item pe-3 text-white" key={i}>
                <Link href={path} className="nav-link" onClick={handleLinkClick}>
                  {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
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
