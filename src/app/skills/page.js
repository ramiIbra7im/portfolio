'use client';
import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaPlug } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TbBrandFramerMotion } from 'react-icons/tb';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="skill-icon" /> },
    { name: 'CSS', icon: <FaCss3Alt className="skill-icon" /> },
    { name: 'JavaScript', icon: <FaJs className="skill-icon" /> },
    { name: 'React', icon: <FaReact className="skill-icon" /> },
    { name: 'Next', icon: <SiNextdotjs className="skill-icon" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon" /> },
    { name: 'API', icon: <FaPlug className="skill-icon" /> },
    { name: 'GitHub', icon: <FaGithub className="skill-icon" /> },
    { name: 'Framer Motio', icon: <TbBrandFramerMotion className="skill-icon" /> },

];

const Skills = () => {
    return (
        <div className='container-fluid main-skils min-vh-100 d-flex'>
            <div className="container d-flex justify-content-center align-items-center flex-column py-5">
                <h2 className="text-center title-skils mb-4 display-4 fw-bold">My Skills</h2>
                <div className="row justify-content-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            className="col-6 col-sm-4 col-md-3 mb-4"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-card text-center p-3 shadow rounded">
                                <div className="mb-2 icon">{skill.icon}</div>
                                <h5 className="skill-name fw-bold">{skill.name}</h5>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
