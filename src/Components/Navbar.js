import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylish/Navstyle.css';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false); // حالة لتفعيل الـ Animation

  // التأكد من ظهور الـ Navbar بعد تحميل الصفحة
  useEffect(() => {
    setIsVisible(true); // عندما يتم تحميل الصفحة، نقوم بتفعيل الانيميشن
  }, []);

  return (
<nav className={`navbar navbar-expand-lg shadow-sm p-1 ${isVisible ? 'visible' : ''} fixed-top`}>
      <div className="container ">
         <Link className="navbar-brand p-0 m-0 " to="/">
          <img src="/logo2.svg" alt="Logo" style={{ width: '50px', height: '50px' }} />
         </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"  
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item pe-3">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item pe-3">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item pe-3">
              <NavLink to="/projects" className="nav-link">projects</NavLink>
            </li>
            <li className="nav-item pe-3">
              <NavLink to="/skills" className="nav-link">skills</NavLink>
            </li>
            <li className="nav-item pe-3">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
