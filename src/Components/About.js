import React from 'react';
import '../Stylish/About.css'; // ملف الـ CSS الخاص بالتصميم
import profilePic from '../Images/me.jpg'; // تأكد من أن الصورة موجودة في هذا المسار

const About = () => {
  return (
    <div className="container py-5 co-about">
      <h2 className="text-center mb-4 display-4 fw-bold">About Me</h2>
      <div className="row align-items-center">
        {/* الصورة */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={profilePic} // تأكد من وضع المسار الصحيح للصورة
            alt="Profile"
            className="img-fluid rounded-circle about-img"
          />
        </div>
        
        {/* النص */}
        <div className="col-md-8  ">
          <h3 className="about-name">Ramy Ibrahim</h3>
          <p className="about-description lh-2 fs-5 fw-bold">
            Hello! I'm Ramy Ibrahim, 
 a Front-End developer with experience in transforming designs into interactive and visually appealing interfaces. I possess strong skills in HTML, CSS, and JavaScript, and I leverage the latest web development technologies to create fast and efficient websites. I focus on designing user-friendly interfaces that ensure a smooth and enjoyable experience for users. Additionally, I have experience working with libraries and frameworks like React,Next, which enhances my ability to build complex and flexible web applications.

I believe in the importance of collaboration and teamwork, working closely with designers and developers to bring the project's vision to life. I am always striving to improve my skills and stay up-to-date with the latest trends in web design and development.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
