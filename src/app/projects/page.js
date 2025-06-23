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
        title: 'Portfolio',
        type: 'Portfolio Website',
        tech: ['Next.js', 'Bootstrap', 'Framer Motion'],
        imageUrl: portfolio,
        link: 'https://rb-ramy.vercel.app/',
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
        title: 'Age Calculator',
        type: 'Tool',
        tech: ['React ', ' Date Logic'],
        imageUrl: age,
        link: 'https://age-rb.vercel.app/',
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
];

const ProjectsGrid = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex co-fluid p-2">
            <div className="container main-project d-flex justify-content-center align-items-center flex-column">
                <h1 className="p-3 mb-5 fw-bold display-3 text-white text-center">My Projects</h1>
                <Row>
                    {projects.slice().reverse().map((project) => (
                        <Col md={4} className="mb-4" key={project.id}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                <motion.div
                                    className="card project-card border"
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="card-img-top"
                                        style={{ objectFit: "cover", width: "100%", height: "220px" }}
                                    />
                                    <h5 className="card-title fw-bold fs-3 text-center pt-3">{project.type}</h5>


                                    <div className="tech-stack text-center mb-2 d-flex flex-wrap justify-content-center gap-2">
                                        {project.tech.map((item, index) => (
                                            <p key={index} className="tech-pill px-2 p-1 fw-bold rounded">
                                                {item}
                                            </p>
                                        ))}
                                    </div>


                                    <div className="overlay-text d-flex justify-content-center align-items-center">
                                        Go to project
                                    </div>
                                </motion.div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default ProjectsGrid;
