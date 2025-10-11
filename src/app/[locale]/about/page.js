// components/About/About.js
'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './About.module.css';

const About = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';
    const t = getTranslations(currentLocale);

    return (
        <div className={`container-fluid ${styles.aboutSection} d-flex align-items-center`} id="about">
            <div className="container py-5">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={`text-center mb-5 ${styles.title}`}
                >
                    {t('about.title')}
                </motion.h2>

                <div className="row align-items-center justify-content-center">
                    {/* الصورة */}
                    <motion.div
                        className="col-md-4 text-center mb-4 mb-md-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.img
                            src="/Images/me.jpg"
                            alt={t('about.name')}
                            className={`img-fluid rounded-circle ${styles.profileImage}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* النص */}
                    <motion.div
                        className="col-md-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.name}>{t('about.name')}</h3>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t('about.description1')}
                        </motion.p>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {t('about.description2')}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;