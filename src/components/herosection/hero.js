// components/herosection/hero.js
'use client';
import { motion } from 'framer-motion';
import SimpleParticles from "../SimpleParticles";
import ChangingText from "../ChangingText";
import Image from "next/image";
import { useI18n } from '../../i18n/context';
import styles from './hero.module.css';
import { useEffect, useState } from 'react';

export default function Hero() {
    const { t, currentLocale } = useI18n();
    const [changingTexts, setChangingTexts] = useState([]);

    // علشان نتأكد من تحديث النصوص عندما تتغير اللغة
    useEffect(() => {
        const texts = [
            t('hero.subtitle'),
            t('hero.changing.nextjs'),
            t('hero.changing.designer'),
            t('hero.cta.contact')
        ];
        setChangingTexts(texts);

        console.log('Updated texts for locale:', currentLocale, texts);
    }, [t, currentLocale]); // أهم حاجة: نسمع لتغير الـ t والـ currentLocale

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.8
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <div className={styles.heroSection} id="home">
            <div className={styles.particleContainer}>
                <SimpleParticles />
            </div>
 
            {/* Main Content */}
            <section className={styles.mainContent}>
                {/* Text Section */}
                <motion.div
                    className={styles.textSection}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <motion.h1
                        className={`${styles.title} col`}
                        variants={textVariants}
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.div
                        className={styles.description}
                        variants={textVariants}
                    >
                        <ChangingText
                            texts={changingTexts}
                        />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className={styles.ctaButtons}
                        variants={buttonVariants}
                    >
                        <motion.button
                            className={styles.primaryButton}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={scrollToProjects}
                        >
                            {t('hero.cta.work')}
                        </motion.button>

                        <motion.button
                            className={styles.secondaryButton}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={scrollToContact}
                        >
                            {t('hero.cta.contact')}
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className={styles.imageSection}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <div className={styles.heroOuter}>
                        <div className={styles.rotatingBorder} />
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/Images/heros.png"
                                alt={currentLocale === 'ar' ?
                                    "رامي إبراهيم - مطور واجهات أمامية" :
                                    "Ramy Ibrahim - Front End Developer"
                                }
                                fill
                                className={styles.heroImage}
                                priority
                            // sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 360px"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div>{t('hero.scroll')}</div>
                <motion.div
                    className={styles.scrollArrow}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ↓
                </motion.div>
            </motion.div>
        </div>
    );
}