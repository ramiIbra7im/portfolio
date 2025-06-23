'use client';
import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import '../Navstyle.css'

const Footer = () => {
  return (
    <footer className="footer text-white text-center py-4 ">
      <div className="container">
        <p className="mb-2 fw-bold ">CopyRight © {new Date().getFullYear()} <span className='name fw-bolder'>Ramy Ibrahim</span> </p>

        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://wa.me/201551212431"
            target="_blank"
            rel="noopener noreferrer"
            className=" fs-4 ic"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/Ramiibra7im"
            target="_blank"
            rel="noopener noreferrer"
            className=" fs-4 ic"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
