import './App.css';
import { motion } from 'framer-motion';
import { Navbar, Parallax, Projects, Footer, Input, Button, Textarea, GradientAnimation, CodeEditor } from './components';
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

const baseTranform = {
  x: '-50%',
  y: '-50%',
  opacity: 0,
  rotateY: 147,
  skewY: 349,
  transformPerspective: 900, 
}

const editorAnimate = {
  hidden: {
    ...baseTranform
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2
    }
  }
}

const mockup1Animate = {
  hidden: {
    ...baseTranform
  },
  visible: {
    opacity: 1,
    top: '40%',
    left: '28%',
    scale: .7,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
      delay: 1
    }
  }
}

const mockup2Animate = {
  hidden: {
    ...baseTranform
  },
  visible: {
    opacity: 1,
    top: '45%',
    left: '76%',
    scale: .7,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
      delay: 1
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
            <div className='px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 items-center md:text-left'>
              <motion.div className='text-center md:text-justify'
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
                <motion.div className='mt-9' variants={textAnimate}>
                  <Button text='Descargar CV' href='./JoséSilva-CV.pdf' />
                </motion.div>
              </motion.div>
              <motion.div className='hidden md:block flex-grow absolute md:relative min-h-screen
                                     sm:scale-75 lg:scale-90 xl:scale-100 origin-center-rigth'
                          initial={"hidden"}
                          whileInView={"visible"}
                          viewport={{once: true, amount: 0.5}}
                          >
                  <motion.div className='screen editor' variants={editorAnimate}></motion.div>
                  <motion.img src="/images/programmer.svg" className='absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-72' alt="Programmer" />
                  <motion.div className='screen mockup1' variants={mockup1Animate}></motion.div>
                  <motion.div className='screen mockup2' variants={mockup2Animate}></motion.div>           
              </motion.div>
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
        {/* <div className='absolute top-0 left-0 w-screen h-screen'>
          <Blob className="absolute -top-1/4 -left-1/4 mix-blend-overlay w-1/2" />
          <Blob className="absolute -bottom-1/4 -right-28 mix-blend-overlay w-1/2" />
        </div> */}
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
        <section className="py-24" id='portfolio'>
          <div className='px-6 max-w-screen-xl mx-auto'>
            <SubTitle text="Portafolio" />
            <Projects items={projects} />
          </div>
        </section>
        <section className='py-24' id='contact'>
          <div className='px-6 max-w-screen-xl mx-auto'>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
