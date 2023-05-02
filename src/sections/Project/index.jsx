import React from 'react'
import { SubTitle } from '../../components'
import Projects from './components/Projects'

const Project = () => {
  return (
    <section className="py-24" id='portfolio'>
      <div className='px-6 max-w-screen-xl mx-auto'>
        <SubTitle text="Portafolio" />
        <Projects />
      </div>
    </section>
  )
}

export default Project