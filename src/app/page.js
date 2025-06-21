'use client';
import SimpleParticles from "./components/SimpleParticles";
import Contact from "./contact/page";
import ProjectsGrid from "./projects/page";
import Skills from "./skills/page";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangingText from "./components/ChangingText";
export default function Home() {
  const titles = [
    "Front End Developer",
    "React Developer",
    "Web Designer",
    "UI/UX Enthusiast",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="position-relative min-vh-100 overflow-hidden text-white hero-section">
        {/* Particles */}
        <div className="particale" />
        <SimpleParticles />

        {/* Main Content */}
        <section
          className="d-flex flex-column flex-lg-row justify-content-center align-items-center min-vh-100 position-relative gap-5 px-4 px-lg-5"
          style={{ zIndex: 2 }}
        >
          {/* النص */}
          <div className="text-center text-lg-start">
            <h1 className="display-3 fw-bold mb-4 title-hero">I'm Ramy Ibrahim</h1>
            <h3 className="fw-bold des-hero">
              <ChangingText texts={["Front End Developer", "Next.js Developer", "UI Designer", "Contact Me 01551212431"]} />
            </h3>

          </div>

          <div className="hero-outer ">
            <div className="rotating-border"></div> {/* الشريط الدائري */}
            <div className="hero-img-wrapper">
              <Image
                src="/Images/heros.png"
                alt="Me"

                fill
                className="rounded-circle shadow"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

        </section>
      </div>

      <Skills />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
