import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'; 
import { motion } from 'framer-motion';  // استيراد framer-motion
import '../Stylish/Pro.css';
import khImage from '../Images/kwater.jpg';
import loginimg from '../Images/login.jpg';
import portfolio from '../Images/me-page.jpg';
import todo from '../Images/todo.jpg';
import calc from '../Images/calc.jpg';
import age from '../Images/age.jpg';
import landing from '../Images/Landing.jpg';
import foodheat from '../Images/foodheat.jpg';

const projects = [
  {
    id: 1,
    title: 'Posts',
    description: 'وصف قصير للمشروع الأول.',
    imageUrl:khImage,
    link: 'https://kawater.vercel.app/',
  },
  {
    id: 2,
    title: 'Login Page',
    description: 'وصف قصير للمشروع الثاني.',
    imageUrl: loginimg,
    link: 'https://login-rb.vercel.app/',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'وصف قصير للمشروع الثالث.',
    imageUrl: portfolio,
    link: 'https://rb-ramy.vercel.app/',
  },
  {
    id: 4,
    title: 'To Do List',
    description: 'وصف قصير للمشروع الرابع.',
    imageUrl: todo,
    link: 'https://todo-rb.vercel.app/',
  },
  {
    id: 5,
    title: 'Calculator',
    description: 'وصف قصير للمشروع الخامس.',
    imageUrl: calc,
    link: 'https://calculator-olive-iota.vercel.app/',
  },
  {
    id: 6,
    title: 'Age Calculator',
    description: 'وصف قصير للمشروع السادس.',
    imageUrl: age,
    link: 'https://age-rb.vercel.app/',
  },
  {
    id: 7,
    title: 'Landing Page',
    description: 'وصف قصير للمشروع السابع.',
    imageUrl: landing,
    link: 'https://page-rb.vercel.app/',
  },
  {
    id: 8,
    title: 'Food Store',
    description: 'وصف قصير للمشروع السابع.',
    imageUrl: foodheat,
    link: 'https://foodheat.vercel.app/',
  },
];

const ProjectsGrid = () => {
  return (
    <div className="container-fluid co-fluid p-2 pt-5">
      <div className="container main-project p-5">
        <h1 className="p-3 fw-bold display-3 text-center">My Projects</h1>
        <Row>
          {projects.slice().reverse().map((project) => (
            <Col md={4} className="mb-4 " key={project.id}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none "
              >
                <motion.div
                  className="card project-card border-0"
                  initial={{ opacity: 0, y: 80 }}  // البداية (مخفية وأسفل)
                  animate={{ opacity: 1, y: 0 }}   // النهاية (ظهور في مكانه)
                  transition={{ duration: 0.5 }}   // فترة الانتقال
                  whileHover={{ scale: 1.02, rotate: 2 }}  // تأثير التحريك عند مرور الماوس
                  whileTap={{ scale: 0.98 }}   // تأثير عند النقر
                >
                  <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                  <h5 className="card-title fw-bold fs-3 text-center pt-3">{project.title}</h5>
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
