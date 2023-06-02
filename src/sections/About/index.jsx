import React from 'react'
import { CodeEditor, Parallax, SubTitle } from '../../components'

const About = () => {
  return (
    <section className="relative pt-32 pb-24" id='about' >
      <div className='px-6 max-w-screen-xl mx-auto' >
        <SubTitle text="Sobre mi" />
        <Parallax>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-white'>
            <div className='hidden md:block'>
              {/* <p className='mb-4'>Soy desarrollador Full-Slack y me gusta estar en constante aprendizaje para refrescar o adquirir nuevos conocimientos que me ayuden en el desarrollo de proyectos.</p>
              <p>Siempre he tenido un gran interés por la programación, crear soluciones mediante el desarrollo de software que facilite las tareas en la vida cotidiana o en áreas laborales.</p>
              <div className=' mt-6'>
                <Button text='Descargar CV' href='./JoséSilva-CV.pdf' />
              </div> */}
              <img src="/images/programmer-blob.svg" className='w-full max-w-[28rem]' style={{ transform: 'rotateY(180deg)' }} alt="programmer" />
            </div>
            <div className='w-full md:w-1/2'>
              {/* <Skills/> */}
              <CodeEditor />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}

export default About