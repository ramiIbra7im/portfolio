"use client"
import { BiCheck, BiX } from "react-icons/bi";
import "../styles/Price.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Price() {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الأنيميشن
      once: true, // يحصل مرة واحدة فقط
    });
  }, []);

  return (
    <div className="container-fluid price-co pb-4 ">
      <div className="container text-start pt-5">
        <h1>Pricing Plane</h1>
        <p className="fw-bold">Pick the plan that fits your needs</p>
      </div>
      <div className="container row pricing gap-4 text-center m-auto  m-0 p-0">
        <div className="price1 shadow col-lg mb-4 p-4" data-aos="fade-right" data-aos-delay="0">
          <div className="text-white">

            <h3>Basic</h3>
            <h2 className=" fw-bold mt-2">plan one</h2>
          </div>

          <div className=" text-start content-Price ">
            <h5 ><span className="check"><BiCheck /></span> Single page</h5>
            <h5 ><span className="check"><BiCheck /></span> Simple and clean design</h5>
            <h5 ><span className="check"><BiCheck /></span> 1 free revision</h5>
            <h5 ><span className="check"><BiCheck /></span> Responsive design (mobile)</h5>
            <h5 ><span className="check"><BiCheck /></span> Delivery Within 3 days</h5>
            <h5 ><span className="x"><BiX /></span> Source File</h5>
            <h5 ><span className="x"><BiX /></span> Support</h5>
            <div className="text-center mt-4 btn-get-start m-auto p-2 fw-bold col-10">
              <a href="https://wa.me/201551212431" rel="noreferrer noopener" target="_blank" className="text-white text-decoration-none">
                Get Start
              </a>
            </div>
          </div>
        </div>
        <div className="price2 shadow col-lg mb-4 p-4" data-aos="fade-up" data-aos-delay="150">
          <div className="text-white">

            <h3>Standard</h3>
            <h2 className=" fw-bold mt-2">plan tow</h2>
          </div>

          <div className=" text-start content-Price">
            <h5 ><span className="check"><BiCheck /></span> Multi-page website (React Router)</h5>
            <h5 ><span className="check"><BiCheck /></span> Custom design with more details</h5>
            <h5 ><span className="check"><BiCheck /></span> Up to 3 free revisions</h5>
            <h5 ><span className="check"><BiCheck /></span> Mobile + Speed optimized</h5>
            <h5 ><span className="check"><BiCheck /></span> Delivery Within 5 days</h5>
            <h5 ><span className="x"><BiX /></span> Source File</h5>
            <h5 ><span className="check"><BiCheck /></span> 7 days after delivery</h5>
            <div className="text-center mt-4 btn-get-start m-auto p-2 fw-bold col-10">
              <a href="https://wa.me/201551212431" rel="noreferrer noopener" target="_blank" className="text-white text-decoration-none">
                Get Start
              </a>
            </div>          </div>
        </div>
        <div className="price3 shadow col-lg mb-4 p-4" data-aos="fade-left" data-aos-delay="300">
          <div className="text-white">

            <h3>Pro</h3>
            <h2 className=" fw-bold mt-2">plan three</h2>
          </div>

          <div className=" text-start content-Price">
            <h5 ><span className="check"><BiCheck /></span> Up to 3 pages with React</h5>
            <h5 ><span className="check"><BiCheck /></span> Professional design with animations</h5>
            <h5 ><span className="check"><BiCheck /></span> Unlimited revisions</h5>
            <h5 ><span className="check"><BiCheck /></span> Mobile + Speed & UX optimized</h5>
            <h5 ><span className="check"><BiCheck /></span> Delivery Within 8 days</h5>
            <h5 ><span className="check"><BiCheck /></span> Source File</h5>
            <h5 ><span className="check"><BiCheck /></span> 14 days after delivery</h5>
            <div className="text-center mt-4 btn-get-start m-auto p-2 fw-bold col-10">
              <a href="https://wa.me/201551212431" rel="noreferrer noopener" target="_blank" className="text-white text-decoration-none">
                Get Start
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
export default Price;
