import React from 'react'
import { Button, Parallax, SectionTitle } from '../../components'
import Skills from './components/Skills'
import AboutDescription from './components/AboutDescription'

const About = () => {
  const backendIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-server h-7 w-7"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
      <line x1="6" x2="6.01" y1="6" y2="6"></line>
      <line x1="6" x2="6.01" y1="18" y2="18"></line>
    </svg>
  )

  const frontendIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-monitor h-7 w-7"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  )

  return (
    <section className="relative pt-32 pb-24" id='about' data-section>
      <div className='px-6 max-w-screen-xl mx-auto' >
        <SectionTitle
          text="Sobre mí"
          description="Un resumen de quién soy, qué hago y con qué tecnologías trabajo."
        />
        <Parallax>
          <div className='flex flex-col md:flex-row gap-12 text-white'>
            <div className='w-full md:w-1/2'>
              <AboutDescription />
            </div>
            <div className='w-full md:w-1/2'>
              <Skills />
              {/* <CodeEditor /> */}
            </div>
          </div>
        </Parallax>
      </div>

      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            description={category.description}
            icon={category.icon}
            skills={category.items}
          />
        ))}
      </div> */}
    </section>
  )
}

export default About