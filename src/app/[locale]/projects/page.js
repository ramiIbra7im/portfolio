'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getTranslations } from '../../../i18n/config';
import styles from './Projects.module.css';

// استيراد الصور
import khImage from '../../../../public/Images/kwater.jpg';
import loginimg from '../../../../public/Images/login.jpg';
import portfolio from '../../../../public/Images/me-page.png';
import todo from '../../../../public/Images/todo.jpg';
import calc from '../../../../public/Images/calc.jpg';
import age from '../../../../public/Images/age.jpg';
import landing from '../../../../public/Images/Landing.jpg';
import foodheat from '../../../../public/Images/foodheat.jpg';
import muslim from '../../../../public/Images/muslim.png';
import cutopiashop from '../../../../public/Images/cutopiashop.png';
import saasedu from '../../../../public/Images/saas-edu.png';
import elzaeem from '../../../../public/Images/el-zaeem.png';
import dashboard from '../../../../public/Images/dashboard.png';

export default function ProjectsGrid() {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'ar';
    const t = getTranslations(currentLocale);

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 9;
    const projectsSectionRef = useRef(null);

    const projects = [
        { id: 1, title: 'Posts', type: t('projects.types.posts'), tech: ['React', 'Bootstrap', 'JSONPlaceholder'], imageUrl: khImage, link: 'https://kawater.vercel.app/' },
        { id: 2, title: 'Login Page', type: t('projects.types.auth'), tech: ['React', 'Bootstrap', 'Firebase'], imageUrl: loginimg, link: 'https://login-rb.vercel.app/' },
        { id: 3, title: 'Age Calculator', type: t('projects.types.tool'), tech: ['React', 'Date Logic'], imageUrl: age, link: 'https://age-rb.vercel.app/' },
        { id: 4, title: 'To Do List', type: t('projects.types.task'), tech: ['React', 'LocalStorage'], imageUrl: todo, link: 'https://todo-rb.vercel.app/' },
        { id: 5, title: 'Calculator', type: t('projects.types.tool'), tech: ['React'], imageUrl: calc, link: 'https://calculator-olive-iota.vercel.app/' },
        { id: 6, title: 'Portfolio', type: t('projects.types.portfolio'), tech: ['Next.js', 'Bootstrap', 'Framer Motion'], imageUrl: portfolio, link: 'https://rb-ramy.vercel.app/' },
        { id: 7, title: 'Landing Page', type: t('projects.types.landing'), tech: ['Next.js', 'Bootstrap'], imageUrl: landing, link: 'https://page-rb.vercel.app/' },
        { id: 8, title: 'Food Store', type: t('projects.types.ecommerce'), tech: ['Next.js', 'Bootstrap'], imageUrl: foodheat, link: 'https://foodheat.vercel.app/' },
        { id: 9, title: 'Saas', type: t('projects.types.saas'), tech: ['Next.js', 'Supabase'], imageUrl: saasedu, link: 'https://saas-edu.vercel.app/' },
        { id: 10, title: 'Cutopia', type: t('projects.types.shop'), tech: ['Next.js', 'Bootstrap', 'SEO'], imageUrl: cutopiashop, link: 'https://cutopia-rb.vercel.app/' },
        { id: 11, title: 'Muslim', type: t('projects.types.api'), tech: ['Next.js', 'API Integration'], imageUrl: muslim, link: 'https://muslim-rb.vercel.app/' },
        { id: 12, title: 'El Zaeem', type: t('projects.types.contracting'), tech: ['Next.js', 'Bootstrap'], imageUrl: elzaeem, link: 'https://mqawalat.vercel.app/' },
        { id: 13, title: 'Dashboard', type: t('projects.types.Dashboard'), tech: ['Next.js', 'Bootstrap', 'recharts'], imageUrl: dashboard, link: 'https://dashboard-rb-1.vercel.app/' },
    ];

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const currentProjects = projects.slice().reverse().slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setTimeout(() => {
            projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    // إعدادات الأنيميشن
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return (
        <section ref={projectsSectionRef} className={`${styles.projectsSection} py-5`} id="projects">
            <div className="container text-center">
                <h1 className={`mb-5 fw-bold ${styles.title}`}>{t('projects.title')}</h1>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="row g-4 justify-content-center"
                    >
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                className="col-12 col-sm-6 col-lg-4"
                            >
                                <div className={`card border-0 shadow-sm rounded-4 overflow-hidden ${styles.projectCard}`}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <div className="position-relative overflow-hidden">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className={`img-fluid ${styles.projectImage}`}
                                                style={{ height: '230px', objectFit: 'cover' }}
                                            />
                                            <div className={`d-flex align-items-center justify-content-center ${styles.overlay}`}>
                                                {t('projects.view')}
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-body">
                                        <h5 className={`fw-bold mb-3 ${styles.projectType}`}>{project.type}</h5>
                                        <div className="d-flex flex-wrap justify-content-center gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className={`badge px-3 py-2 ${styles.techTag}`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="d-flex justify-content-center align-items-center gap-2 mt-5 flex-wrap"
                    >
                        <button
                            className="btn btn-light btn-sm"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <motion.button
                                key={i + 1}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePageChange(i + 1)}
                                className={`btn btn-sm ${styles.pageLink} ${currentPage === i + 1 ? styles.active : ''}`}
                            >
                                {i + 1}
                            </motion.button>
                        ))}

                        <button
                            className="btn btn-light btn-sm"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            ›
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}