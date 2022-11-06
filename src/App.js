import './App.css';
import { motion } from 'framer-motion';
import { Navbar, Parallax, Projects, Skills, Footer, Input, Button, Textarea, GradientAnimation, CodeEditor, Blob } from './components';
import { projects } from './data/data';

const textAnimate = {
  hidden: {
    y: 50, 
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1
    }
  }
}

const SubTitle = ({text}) => (
  <div className="text-7xl font-extrabold mb-9 text-center">
    <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#08557f] to-transparent">
      { text }
    </h2>
  </div>
);

function App() {
  return (
    <div>
      <GradientAnimation />
      <Navbar />
      {/* <Blobs /> */}
      <main>
        <section className='flex justify-center items-center w-screen h-screen text-white'>
          <Parallax>
            <div className='px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 items-center md:text-left'>
              <motion.div className=''
                          initial={"hidden"}
                          whileInView={"visible"}
                          viewport={{once: true, amount: 0.5}}
                          transition={{
                            delayChildren: 0.3,
                            staggerChildren: 0.5
                          }}>
                <motion.span className='text-xl md:text-1xl lg:text-3xl font-semibold' variants={textAnimate}>
                  ¡Hola! Mi nombre es
                </motion.span>
                <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-b from-[#77c5ff] via-[#3c949a] to-[#caffef]" variants={textAnimate}>
                  Jose Silva
                </motion.h1>
                <motion.span className='text-xl md:text-1xl lg:text-3xl block font-semibold mt-5 text-white' variants={textAnimate}>
                  Desarrollador Full-stack
                  </motion.span>
              </motion.div>
              <div className='flex-grow relative min-h-screen
                              md:scale-90  2xl:scale-100 origin-center-rigth'>
                {/* md:scale-75  2xl:scale-100 origin-top-left */}
                <div className=' z-30'>
                  {/* <Blob /> */}
                </div>
                <div className='screen editor'></div>
                <div className='screen mockup1'></div>
                <div className='screen mockup2'></div>
                <div className='z-10'>
                  <img src="/images/programmer.svg" className='absolute top-1/2 -translate-y-1/2 right-0 w-72' alt="Programmer" />
                </div>
              </div>
            </div>
          </Parallax>
          <div className="shape-divider">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z"
                className="shape-fill"
              />
            </svg>
          </div>
        </section>
        <div className='bg-[#0a1218] relative overflow-hidden w-screen'>
          {/* <div className='absolute top-0 left-0 w-screen h-screen'>
            <Blob className="absolute -top-1/4 -left-1/4 mix-blend-overlay w-1/2" />
            <Blob className="absolute -bottom-1/4 -right-28 mix-blend-overlay w-1/2" />
          </div> */}
          <section className="relative pt-32 pb-24" id='about' >
            <div className='container px-3 mx-auto' >
              <SubTitle text="Sobre mi" />
              <Parallax>
                <div className='flex flex-col md:flex-row gap-6 text-white'>
                  <div className='md:w-1/3 text-justify'>
                    {/* <p className='mb-4'>Soy desarrollador Full-Slack y me gusta estar en constante aprendizaje para refrescar o adquirir nuevos conocimientos que me ayuden en el desarrollo de proyectos.</p>
                    <p>Siempre he tenido un gran interés por la programación, crear soluciones mediante el desarrollo de software que facilite las tareas en la vida cotidiana o en áreas laborales.</p>
                    <div className=' mt-6'>
                      <Button text='Descargar CV' href='./JoséSilva-CV.pdf' />
                    </div> */}
                    <img src="/images/programmer.svg" className='w-full h-full' style={{ transform: 'rotateY(180deg)' }} alt="programmer" />
                  </div>
                  <div className='md:w-2/3'>
                    {/* <Skills/> */}
                    <CodeEditor />
                  </div>
                </div>
              </Parallax>
            </div>
          </section>
          <section className="py-24" id='portfolio'>
            <div className='container px-3 mx-auto'>
              <SubTitle text="Portafolio" />
              <Projects items={projects} />
            </div>
          </section>
          <section className='py-24' id='contact'>
            <div className='container px-3 mx-auto'>
              <SubTitle text="Contacto" />
              <form name="portfolio_contact" method='POST' data-netlify="true" className='max-w-md mx-auto'>
                <Parallax>
                  <div className='flex flex-col md:flex-row  gap-3'>
                    <Input label='Nombre' name="fullname" />
                    <Input label='Correo electrónico' name="email" type='email' />
                  </div>
                  <Input label='Asunto' name="subject" />
                  <Textarea label='Escribe tu mensaje...' name="message" />
                  <div className="form-group" data-netlify-recaptcha="true"></div>
                  <Button text='Enviar' className='w-full' />
                </Parallax>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
