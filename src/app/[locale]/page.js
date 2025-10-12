'use client';
import Hero from "../../components/herosection/hero";
import Skills from "./skills/page";
import Services from "./services/page";
import Process from "./Process/page";
import Stats from "./statistics/page";
import ProjectsGrid from "./projects/page";
import Contact from "./contact/page";
import { use } from "react";
import styles from "../page.module.css"; // ← استيراد CSS module

export default function Home({ params }) {
  const { locale } = use(params);

  return (
    <div className={styles.background}>
      <Hero />
      <Skills />
      <Services />
      <Process />
      <Stats />
      <span id="projects">
        <ProjectsGrid />
      </span>
      <span id="contact">
        <Contact />
      </span>
    </div>
  );
}
