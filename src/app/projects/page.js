"use client";

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './Pro.css';

import khImage from '../../../public/Images/kwater.jpg';
import loginimg from '../../../public/Images/login.jpg';
import portfolio from '../../../public/Images/me-page.png';
import todo from '../../../public/Images/todo.jpg';
import calc from '../../../public/Images/calc.jpg';
import age from '../../../public/Images/age.jpg';
import landing from '../../../public/Images/Landing.jpg';
import foodheat from '../../../public/Images/foodheat.jpg';
import muslim from '../../../public/Images/muslim.png';
import cutopiashop from '../../../public/Images/cutopiashop.png';

const projects = [
    {
        id: 1,
        title: 'Posts',
        type: 'Posts Tool',
        tech: ['React', 'Bootstrap', 'JSONPlaceholder'], // ✅ array بدل string
        imageUrl: khImage,
        link: 'https://kawater.vercel.app/',
    },
    {
        id: 2,
        title: 'Login Page',
        type: 'Auth UI',
        tech: ['React', 'Bootstrap ', ' Firebase'],
        imageUrl: loginimg,
        link: 'https://login-rb.vercel.app/',
    },
    {
        id: 3,
        title: 'Age Calculator',
        type: 'Tool',
        tech: ['React ', ' Date Logic'],
        imageUrl: age,
        link: 'https://age-rb.vercel.app/',
    },
    {
        id: 4,
        title: 'To Do List',
        type: 'Task Manager',
        tech: ['React ', ' LocalStorage'],
        imageUrl: todo,
        link: 'https://todo-rb.vercel.app/',
    },
    {
        id: 5,
        title: 'Calculator',
        type: 'Tool',
        tech: ['React'],
        imageUrl: calc,
        link: 'https://calculator-olive-iota.vercel.app/',
    },

    {
        id: 6,
        title: 'Portfolio',
        type: 'Portfolio Website',
        tech: ['Next.js', 'Bootstrap', 'Framer Motion'],
        imageUrl: portfolio,
        link: 'https://rb-ramy.vercel.app/',
    },
    {
        id: 7,
        title: 'Landing Page',
        type: 'Landing Page',
        tech: ['Next.js ', ' Bootstrap'],
        imageUrl: landing,
        link: 'https://page-rb.vercel.app/',
    },
    {
        id: 8,
        title: 'Food Store',
        type: 'E-commerce UI',
        tech: ['Next.js ', ' Bootstrap ', ' Cards Layout'],
        imageUrl: foodheat,
        link: 'https://foodheat.vercel.app/',
    },
    {
        id: 9,
        title: 'cutopia',
        type: 'Cutopia Shop ',
        tech: ['Next.js', 'Bootstrap', 'Supabase', 'firebase', 'SEO', 'Dashboard', 'role', 'hook jwt'],
        imageUrl: cutopiashop,
        link: 'https://cutopia.shop/',
    },
    {
        id: 10,
        title: 'Muslim',
        type: 'نسك المسلم',
        tech: ['Next.js', 'Bootstrap', 'API Integration', 'Card Layout'],
        imageUrl: muslim,
        link: 'https://muslim-rb.vercel.app/',
    },

];

const ProjectsGrid = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex co-fluid p-2">
            <div className=" container-xxl main-project d-flex justify-content-center align-items-center flex-column">
                <h1 className="p-3 mb-5 fw-bold display-3 text-white text-center">My Projects</h1>
                <Row>
                    {projects.slice().reverse().map((project) => (
                        <Col md={4} className="mb-4 d-flex" key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4 }}
                                className="card border-0 shadow-lg rounded-4 overflow-hidden h-100"
                            >
                                {/* الصورة مع Overlay واللينك */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className="position-relative"
                                        style={{ overflow: "hidden" }}
                                    >
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={500}
                                            height={300}
                                            className="w-100"
                                            style={{ objectFit: "cover", height: "220px", transition: "transform 0.4s ease" }}
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                                            style={{
                                                background: "rgba(0,0,0,0.55)",
                                                color: "#fff",
                                                opacity: 0,
                                                transition: "opacity 0.3s ease",
                                                fontSize: "1.2rem",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Go to Project
                                        </div>
                                    </motion.div>
                                </a>

                                {/* محتوى الكارت */}
                                <div className="card-body text-center p-4">
                                    <h5 className="fw-bold mb-3">{project.type}</h5>

                                    {/* التكنولوجيات */}
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {project.tech.map((item, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-pill"
                                                style={{
                                                    background: "#f1f3f5",
                                                    fontSize: "0.85rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>


            </div>
        </div>
    );
};

export default ProjectsGrid;
