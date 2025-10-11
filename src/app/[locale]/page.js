// app/[locale]/page.js
'use client';
import Hero from "../../components/herosection/hero";
import Skills from "../[locale]/skills/page";
import Services from "../[locale]/services/page";
import Process from "../[locale]/Process/page"
import Stats from "../statistics/page";
import ProjectsGrid from "../[locale]/projects/page";
import Contact from "../[locale]/contact/page";
import { use } from "react";

export default function Home({ params }) {
  const { locale } = use(params);

  return (
    <div className="home-page">
      <Hero />
      <Skills />
      <Services />
      <Process />
      <Stats />
      <div id="projects">
        <ProjectsGrid />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}