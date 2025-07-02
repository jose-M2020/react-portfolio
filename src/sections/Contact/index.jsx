import SubTitle from '../../components/SectionTitle'
import ContactForm from './components/ContactForm'
import SocialLinks from './components/SocialLinks'

const Contact = () => {
  return (
    <section className='pt-24 pb-10' id='contact' data-section>
      <div className='px-6 max-w-screen-xl mx-auto'>
        <SubTitle
          text="Contáctame"
          description="Si tienes preguntas, sugerencias o quieres colaborar, no dudes en escribirme."
        />
        
        {/* <Parallax> */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto h-full'>
            {/* Contact form */}
            <div className='md:col-span-7 h-full'>
              <div className='bg-gradient-to-br from-[#284862]/60 to-[#1a365d]/60 rounded-2xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl h-full flex flex-col'>
                <div className='mb-8'>
                  <h2 className='text-xl font-bold text-white mb-2'>Envíame un mensaje</h2>
                  <p className='text-gray-300 text-sm'>
                    Cuéntame sobre tu proyecto y te responderé lo antes posible.
                  </p>
                </div>
                <div className='flex-1'>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Contact information */}
            <SocialLinks />
          </div>
        {/* </Parallax> */}
      </div>
    </section>
  )
}

export default Contact