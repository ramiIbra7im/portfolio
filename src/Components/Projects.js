import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'; 
import { motion } from 'framer-motion';  // استيراد framer-motion
import '../Stylish/Pro.css';
import khImage from '../Images/kh.png';

const projects = [
  {
    id: 1,
    title: ' خواطر',
    description: 'وصف قصير للمشروع الأول.',
    imageUrl:khImage,
    link: 'https://kawater.vercel.app/',
  },
  {
    id: 2,
    title: 'المصحف',
    description: 'وصف قصير للمشروع الثاني.',
    imageUrl: khImage,
    link: 'https://elmoshaf.vercel.app/',
  },
  {
    id: 3,
    title: 'Q',
    description: 'وصف قصير للمشروع الثالث.',
    imageUrl: khImage,
    link: 'https://example.com/project3',
  },
  {
    id: 4,
    title: 'D',
    description: 'وصف قصير للمشروع الثالث.',
    imageUrl: khImage,
    link: 'https://example.com/project3',
  },
  {
    id: 5,
    title: 'C',
    description: 'وصف قصير للمشروع الثالث.',
    imageUrl: khImage,
    link: 'https://example.com/project3',
  },
  {
    id: 6,
    title: 'A',
    description: 'وصف قصير للمشروع الثالث.',
    imageUrl: khImage,
    link: 'https://example.com/project3',
  },
];

const ProjectsGrid = () => {
  return (
    <div className="container mt-5">
      <h1 className=' p-3 fw-bold display-3 text-white text-center'>My project</h1>
      <Row>
        {projects.map((project) => (
          <Col md={4} className="mb-4" key={project.id}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              {/* إضافة motion.div مع أنيميشن عند الظهور */}
              <motion.div
                className="card  project-card "
                initial={{ opacity: 0, y: 50 }}  // البداية (مخفية وأسفل)
                animate={{ opacity: 1, y: 0 }}   // النهاية (ظهور في مكانه)
                transition={{ duration: 0.6 }}   // فترة الانتقال
              >
                <img src={project.imageUrl} className="card-img-top " alt={project.title} />
                <h5 className="card-title fw-bold fs-3 text-center">{project.title}</h5>
              </motion.div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsGrid;
