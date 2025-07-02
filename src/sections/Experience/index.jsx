import React from "react";
import { Parallax, SectionTitle } from "../../components";
import ExperienceTimeline from "./components/ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
      data-section
      className="relative pb-24"
    >
      <div className='px-6 max-w-screen-xl mx-auto'>
        <SectionTitle
          text="Experiencia"
          description="Un recorrido por mi trayectoria profesional y los retos que me han hecho crecer."
        />
        <Parallax>
          <ExperienceTimeline />
        </Parallax>
      </div>
    </section>
  );
};

export default Experience; 