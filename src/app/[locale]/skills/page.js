// components/skills/Skills.js
'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaPlug
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './Skills.module.css';

const Skills = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';
    const t = getTranslations(currentLocale);

    // Skills data مع الترجمة
    const skills = [
        { name: t('skills.html'), icon: FaHtml5, level: 90 },
        { name: t('skills.css'), icon: FaCss3Alt, level: 85 },
        { name: t('skills.javascript'), icon: FaJs, level: 80 },
        { name: t('skills.react'), icon: FaReact, level: 85 },
        { name: t('skills.nextjs'), icon: SiNextdotjs, level: 80 },
        { name: t('skills.bootstrap'), icon: FaBootstrap, level: 75 },
        { name: t('skills.api'), icon: FaPlug, level: 70 },
        { name: t('skills.github'), icon: FaGithub, level: 75 },
        { name: t('skills.framer'), icon: TbBrandFramerMotion, level: 70 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className={`${styles.mainSkills} d-flex align-items-center`} id="skills">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h2 className={styles.title}>{t('skills.title')}</h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <Row className="g-4 justify-content-center">
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <Col key={index} xs={6} sm={4} md={3} lg={2}>
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className={styles.skillCard}
                                    >
                                        <div className="p-4 text-center">
                                            <div className={styles.iconWrapper}>
                                                <IconComponent className={styles.skillIcon} />
                                            </div>
                                            <h5 className={styles.skillName}>{skill.name}</h5>
                                            <div className={styles.skillLevel}>{skill.level}%</div>
                                        </div>
                                    </motion.div>
                                </Col>
                            );
                        })}
                    </Row>
                </motion.div>
            </Container>
        </div>
    );
};

export default Skills;