// components/Projects/ProjectsGrid.js
'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

const ProjectsGrid = () => {
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
        { id: 8, title: 'Food Store', type: t('projects.types.ecommerce'), tech: ['Next.js', 'Bootstrap', 'Cards Layout'], imageUrl: foodheat, link: 'https://foodheat.vercel.app/' },
        { id: 9, title: 'Saas', type: t('projects.types.saas'), tech: ['Next.js', 'Bootstrap', 'Supabase', 'Dashboard'], imageUrl: saasedu, link: 'https://saas-edu.vercel.app/' },
        { id: 10, title: 'cutopia', type: t('projects.types.shop'), tech: ['Next.js', 'Bootstrap', 'Supabase', 'SEO'], imageUrl: cutopiashop, link: 'https://cutopia.shop/' },
        { id: 11, title: 'Muslim', type: t('projects.types.api'), tech: ['Next.js', 'Bootstrap', 'API Integration'], imageUrl: muslim, link: 'https://muslim-rb.vercel.app/' },
        { id: 12, title: 'mqawalt', type: t('projects.types.contracting'), tech: ['Next.js', 'Bootstrap'], imageUrl: elzaeem, link: 'https://el-zaeem.com/' },
    ];

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const currentProjects = projects
        .slice()
        .reverse()
        .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);

    const pageNumbers = Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        const start = Math.max(1, currentPage - 2);
        return start + i;
    }).filter(page => page <= totalPages);

    const handlePageChange = (page) => {
        setCurrentPage(page);

        setTimeout(() => {
            if (projectsSectionRef.current) {
                const yOffset = -80;
                const y = projectsSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div
            ref={projectsSectionRef}
            className={`container-fluid ${styles.projectsSection}`}
            id="projects"
        >
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`text-center mb-5 ${styles.title}`}
                >
                    {t('projects.title')}
                </motion.h1>

                <motion.div
                    key={currentPage}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="row g-4 justify-content-center"
                >
                    {currentProjects.map((project, index) => (
                        <motion.div
                            key={`${project.id}-${currentPage}`}
                            variants={itemVariants}
                            className="col-12 col-sm-6 col-lg-4 mb-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={styles.projectCard}
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={400}
                                            height={250}
                                            className={`${styles.projectImage} w-100`}
                                            style={{ height: '250px' }}
                                            priority={index < 3}
                                        />
                                        <motion.div
                                            className={styles.overlay}
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {t('projects.view')}
                                        </motion.div>
                                    </div>
                                </a>

                                <div className="card-body text-center p-3 p-md-4">
                                    <h3 className={styles.projectType}>{project.type}</h3>
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {project.tech.map((item, index) => (
                                            <span
                                                key={index}
                                                className={`${styles.techTag} px-2 px-md-3 py-1`}
                                                title={item}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-5"
                    >
                        <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                            <button
                                className={`btn ${styles.pageLink}`}
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                ‹
                            </button>

                            {pageNumbers.map(page => (
                                <button
                                    key={page}
                                    className={`btn ${styles.pageLink} ${currentPage === page ? styles.active : ''}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                className={`btn ${styles.pageLink}`}
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                ›
                            </button>
                        </div>

                        <div className={`text-center ${styles.pageInfo}`}>
                            {t('projects.showing')} {((currentPage - 1) * projectsPerPage) + 1} - {Math.min(currentPage * projectsPerPage, projects.length)} {t('projects.of')} {projects.length} {t('projects.projects')}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProjectsGrid;