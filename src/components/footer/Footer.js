'use client';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [bubbles, setBubbles] = useState([]); // ← حفظ البيانات العشوائية هنا

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // توليد الفقاعات مرة واحدة فقط بعد تحميل الصفحة
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 8 }).map(() => ({
      width: Math.random() * 80 + 30,
      height: Math.random() * 80 + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 8,
    }));
    setBubbles(generatedBubbles);
  }, []);

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/201551212431",
      className: styles.whatsapp,
      label: "WhatsApp"
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/Ramiibra7im",
      className: styles.facebook,
      label: "Facebook"
    },
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      className: styles.github,
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      className: styles.linkedin,
      label: "LinkedIn"
    },
    {
      icon: FaEnvelope,
      href: "mailto:ramy@example.com",
      className: styles.email,
      label: "Email"
    }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {/* {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className={`${styles.scrollToTop} btn btn-primary rounded-circle`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )} */}

      {/* Main Footer */}
      <footer className={`${styles.footer} text-white py-5 position-relative`}>
        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className={`${styles.bubble} ${styles.floating}`}
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                top: `${bubble.top}%`,
                left: `${bubble.left}%`,
              }}
              animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* Copyright */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <motion.p
                className={`${styles.copyright} mb-2 fw-bold`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                CopyRight © {currentYear}{' '}
                <span className={styles.gradientText}>Ramy Ibrahim CEO RB </span>
              </motion.p>
              <motion.p
                className={styles.tagline}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full Stack Developer | Creating Amazing Web Experiences
              </motion.p>
            </div>

            {/* Social Links */}
            <div className="col-md-6">
              <motion.div
                className={styles.socialLinks}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialLink} ${social.className}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Text */}
          <motion.div
            className={`row mt-4 pt-3 ${styles.borderTop}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="col-12 text-center">
              <p className={`${styles.builtWith} small mb-0`}>
                Built with ❤️ using Next.js or React | Always learning, always coding
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
