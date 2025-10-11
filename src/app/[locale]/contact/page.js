// components/Contact/Contact.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './Contact.module.css';

const Contact = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';
  const t = getTranslations(currentLocale);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_2920', 'template_2920', e.target, 'AhPNndtB1F8-nRS0c')
      .then(() => {
        setAlertMessage(t('contact.success'));
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setAlertMessage(t('contact.error'));
        setShowAlert(true);
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setShowAlert(false), 3000);
      });
  };

  const contactInfo = [
    { icon: FaPhone, label: t('contact.info.phone'), value: t('contact.value.phone'), href: 'tel:+201551212431' },
    { icon: FaEnvelope, label: t('contact.info.email'), value: t('contact.value.email'), href: 'mailto:ramy@example.com' },
    { icon: FaWhatsapp, label: t('contact.info.whatsapp'), value: t('contact.value.whatsapp'), href: 'https://wa.me/201551212431' },
    { icon: FaFacebook, label: t('contact.info.facebook'), value: t('contact.value.facebook'), href: 'https://facebook.com/Ramiibra7im' },
    { icon: FaLinkedin, label: t('contact.info.linkedin'), value: t('contact.value.linkedin'), href: 'https://linkedin.com/in/yourusername' },
    { icon: FaGithub, label: t('contact.info.github'), value: t('contact.value.github'), href: 'https://github.com/yourusername' }
  ];

  return (
    <div className={`container-fluid ${styles.contactSection} d-flex align-items-center`} id="contact">

      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`alert alert-success ${styles.alert} text-center fw-bold`}
        >
          {alertMessage}
        </motion.div>
      )}

      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-center mb-5 ${styles.title}`}
        >
          {t('contact.title')}
        </motion.h2>

        <div className="row g-4">
          {/* معلومات الاتصال - 6 بطاقات في صفين */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="row g-3"
            >
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="col-md-6">
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card h-100 text-decoration-none text-white ${styles.contactCard}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="card-body text-center p-3">
                        <IconComponent className={`mb-2 ${styles.contactIcon}`} />
                        <h6 className="card-title mb-1 fw-bold">{item.label}</h6>
                        <p className="card-text small mb-0">{item.value}</p>
                      </div>
                    </motion.a>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* نموذج الاتصال */}
          <div className="col-lg-6">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className={`card ${styles.contactCard} border-0`}
            >
              <div className="card-body p-4">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${styles.formControl}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.name')}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${styles.formControl}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.email')}
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className={`form-control ${styles.formControl}`}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.message')}
                    required
                  />
                </div>
                <div className='text-center'>
                  <motion.button
                    type="submit"
                    className={`btn text-white fw-bold p-3 px-4 ${styles.submitBtn}`}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <span className={styles.loading}></span>
                        {t('contact.sending')}
                      </>
                    ) : (
                      t('contact.send')
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;