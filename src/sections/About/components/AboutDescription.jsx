import React from 'react'
import { Button } from '../../../components'

const AboutDescription = () => (
  <>
    <p className="text-base leading-relaxed text-gray-300">
      Soy <span className="text-[#43eeb2]">desarrollador fullstack</span> con experiencia construyendo soluciones web para 
      <span className="text-[#43eeb2]"> sectores financieros</span>, 
      <span className="text-[#43eeb2]"> e-commerce</span>, 
      <span className="text-[#43eeb2]"> CRMs</span>, 
      <span className="text-[#43eeb2]"> dashboards</span> y
      <span className="text-[#43eeb2]"> portales web</span>. 
      Trabajo principalmente con <span className="text-[#43eeb2]">React</span>, 
      <span className="text-[#43eeb2]"> Laravel</span> y 
      <span className="text-[#43eeb2]"> Next.js</span>; también he desarrollado proyectos con tecnologías como 
      <span className="text-[#43eeb2]"> Node.js</span>, 
      <span className="text-[#43eeb2]"> Vue</span> o 
      <span className="text-[#43eeb2]"> Angular</span> según las necesidades del proyecto.
      <br /><br />
      Me gusta analizar cada situación para anticipar problemas técnicos o de negocio para reducir errores en producción y proponer mejoras que generen valor desde el inicio. 
      Me considero alguien <span className="text-[#43eeb2]">curioso</span>, 
      <span className="text-[#43eeb2]"> autodidacta</span> y
      <span className="text-[#43eeb2]"> comprometido</span> con seguir mejorando. 
      Disfruto colaborar, aprender de cada proyecto y aportar ideas que hagan una diferencia real.
    </p>

    <div className=' mt-6'>
      <Button text='Descargar CV' href='./JoséSilva-CV.pdf' target='_blank' />
    </div>
    {/* <img src="/images/programmer-blob.svg" className='w-full max-w-[28rem]' style={{ transform: 'rotateY(180deg)' }} alt="programmer" /> */}
  </>
)

export default AboutDescription 