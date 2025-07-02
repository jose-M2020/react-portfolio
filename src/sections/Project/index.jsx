import React from 'react'
import { SectionTitle } from '../../components'
import Projects from './components/Projects'

const Project = () => {
  return (
    <section className="pb-24" id='portfolio' data-section>
      <div className='px-6 max-w-screen-xl mx-auto'>
        <SectionTitle
          text="Portafolio"
          description="Aquí puedes ver algunos de los proyectos personales en los que he trabajado."
        />
        <Projects />
      </div>
    </section>
  )
}

export default Project