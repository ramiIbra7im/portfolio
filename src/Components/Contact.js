import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // استيراد EmailJS
import '../Stylish/Contact.css';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false); // لحفظ حالة الفقاعة

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // إرسال البريد باستخدام EmailJS
    emailjs.sendForm('service_2920', 'template_2920', e.target, 'AhPNndtB1F8-nRS0c')
      .then((result) => {
        console.log('تم الإرسال بنجاح:', result.text);
        setShowAlert(true); // إظهار الفقاعة
        setTimeout(() => setShowAlert(false), 2000 ); // إخفاء الفقاعة بعد 2 ثانية
      }, (error) => {
        console.log('خطأ في الإرسال:', error.text);
      });

    setFormData({ name: '', email: '', message: '' });
  };

    return (
    //   alert
      <div className="container-fluid co-contact  mt-5 py-5">
           {showAlert && (
              <div className=" col-3 m-auto  alert alert-success mt-2 mb-5 text-center fw-bold" role="alert">
                  Send Sucsess
        </div>
            )}
            



      <h2 className="text-center mb-4  display-4 fw-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className=' p-3 col-lg-8 m-auto form shadow'>
        <div className="mb-3 col-lg-6 col-sm-12 m-auto ">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control  fw-bold" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3 col-lg-6 col-sm-12 m-auto">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control  fw-bold"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3 col-lg-6 col-sm-12 m-auto">
          <textarea
            id="message"
            name="message"
            className="form-control  fw-bold"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn_trns p-2 pe-5 ps-5 fw-bold">Send</button>
        </div>
      </form>
 <div className="d-flex justify-content-center gap-4">
          <a
            href="https://wa.me/201551212431"
            target="_blank"
            rel="noopener noreferrer"
            className=" fs-1 ic text-black"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/Ramiibra7im"
            target="_blank"
            rel="noopener noreferrer"
            className=" fs-1 ic text-black"
          >
            <FaFacebook />
          </a>
        </div>
     
    </div>
  );
};

export default Contact;
