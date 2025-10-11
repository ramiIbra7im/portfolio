// components/services/Services.js
'use client';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaRocket } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './Services.module.css';

const Services = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';
    const t = getTranslations(currentLocale);

    const services = [
        {
            icon: FaCode,
            title: t('services.webdev.title'),
            description: t('services.webdev.desc')
        },
        {
            icon: FaPalette,
            title: t('services.design.title'),
            description: t('services.design.desc')
        },
        {
            icon: FaMobile,
            title: t('services.mobile.title'),
            description: t('services.mobile.desc')
        },
        {
            icon: FaRocket,
            title: t('services.performance.title'),
            description: t('services.performance.desc')
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`container-fluid ${styles.servicesSection}`} id="services">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-center mb-5 ${styles.title}`}
                >
                    {t('services.title')}
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="row g-4"
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="col-md-6 col-lg-3"
                            >
                                <motion.div
                                    className={styles.serviceCard}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <IconComponent className={styles.serviceIcon} />
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;