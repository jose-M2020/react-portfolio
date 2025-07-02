import { Button, Input, Textarea } from "../../../components";

const ContactForm = () => {

  return (
    <>
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
    </>
  )
}

export default ContactForm;