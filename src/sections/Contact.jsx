import React from 'react'
import { Button, Input, Parallax, Textarea } from '../components'
import SubTitle from '../components/SubTitle'

const Contact = () => {
  return (
    <section className='py-24' id='contact'>
      <div className='px-6 max-w-screen-xl mx-auto'>
        <div className='mb-[9rem]'>
          <SubTitle text="Contacto" />
        </div>
        <Parallax>
        <div className='bg-[#284862]/40 grid grid-cols-1 md:grid-cols-2 gap-10 rounded-xl p-8 max-w-5xl mx-auto backdrop-blur-xl'>
          <div className='hidden md:block'>
            <p className='text-white text-justify mb-10'>Gracias por visitar mi portafolio. Si tienes alguna pregunta, sugerencia o simplemente deseas charlar sobre una posible colaboración, no dudes en contactarme.</p>
            <img src="images/mailbox.svg" className='max-w-xs mx-auto' alt="mailbox" />
            {/* <p className='text-white text-justify'>Gracias por visitar mi portafolio. Me encantaría tener la oportunidad de colaborar contigo en futuros proyectos. Si tienes alguna pregunta, sugerencia o simplemente deseas charlar sobre una posible colaboración, no dudes en contactarme. Estoy abierto a cualquier oportunidad de aprendizaje y desarrollo.</p> */}
          </div>
          <div>
            <p className='text-2xl mb-6 text-white text-center'>Enviame un mensaje</p>
            <form
              method='POST'
              name="contact"
            >
              <input 
                type='hidden'
                name='form-name'
                value="contact" />
              <div className='flex flex-col md:flex-row  gap-3'>
                <Input
                  label='Nombre'
                  name='name'
                  required
                />
                <Input
                  label='Correo electrónico'
                  name="email"
                  type='email'
                  required
                />
              </div>
              <Input
                label='Asunto'
                name='subject'
                required
              />
              <Textarea
                label='Escribe tu mensaje...'
                name='message'
                required
              />
              <div className="form-group" data-netlify-recaptcha="true"></div>
              <Button text='Enviar' className='w-full' />
            </form>
          </div>
        </div>
          </Parallax>
      </div>
    </section>
  )
}

export default Contact