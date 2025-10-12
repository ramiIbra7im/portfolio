// components/Process/Process.js
'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaSketch, FaCode, FaRocket } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './Process.module.css';

const Process = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';
    const t = getTranslations(currentLocale);

    const steps = [
        {
            icon: FaSearch,
            number: t('process.step1.number'),
            title: t('process.step1.title'),
            description: t('process.step1.desc')
        },
        {
            icon: FaSketch,
            number: t('process.step2.number'),
            title: t('process.step2.title'),
            description: t('process.step2.desc')
        },
        {
            icon: FaCode,
            number: t('process.step3.number'),
            title: t('process.step3.title'),
            description: t('process.step3.desc')
        },
        {
            icon: FaRocket,
            number: t('process.step4.number'),
            title: t('process.step4.title'),
            description: t('process.step4.desc')
        }
    ];

    return (
        <div className={`container-fluid ${styles.processSection}`} id="process">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-5 text-white display-4 fw-bold"
                >
                    {t('process.title')}
                </motion.h2>

                <div className="row g-4">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="col-md-6 col-lg-3"
                            >
                                <motion.div
                                    className={`${styles.processStep} h-100`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className={styles.stepNumber}>{step.number}</div>
                                    <IconComponent className={styles.stepIcon} />
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Process;