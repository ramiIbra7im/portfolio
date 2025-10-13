// components/Stats/Stats.js
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './Stats.module.css';

const AnimatedCounter = ({ value, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = value / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className={styles.statNumber}>
            {count}
            {suffix && <span className={styles.statSuffix}>{suffix}</span>}
        </span>
    );
};

const Stats = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';
    const t = getTranslations(currentLocale);

    const stats = [
        {
            number: 6,
            label: t('stats.projects'),
            suffix: '+'
        },
        {
            number: 10,
            label: t('stats.clients'),
            suffix: '+'
        },
        {
            number: 2,
            label: t('stats.experience'),
            suffix: '+'
        },
        {
            number: 99,
            label: t('stats.success'),
            suffix: '%'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`container-fluid ${styles.statsSection}`} id="stats">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`text-center mb-5 ${styles.title}`}
                >
                    {t('stats.title')}
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="row g-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="col-6 col-lg-3"
                        >
                            <motion.div
                                className={styles.statCard}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatedCounter
                                    value={stat.number}
                                    suffix={stat.suffix}
                                />
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* نص إضافي */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-5"
                >
                    <p className="m-0" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
                        {t('stats.description')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Stats;