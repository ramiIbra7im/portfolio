'use client';
import Hero from "../../components/herosection/hero";
import Skills from "../[locale]/skills/page";
import Services from "../[locale]/services/page";
import Process from "../[locale]/Process/page";
import Stats from "./statistics/page";
import ProjectsGrid from "../[locale]/projects/page";
import Contact from "../[locale]/contact/page";
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
