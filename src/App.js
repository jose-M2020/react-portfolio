import './App.css';
import { motion  } from "framer-motion";
import { Navbar, Blobs, Parallax, Projects, Skills, Footer, Input, Button, Textarea } from './components';
import { projects } from './utils/constants';

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 5,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const SubTitle = ({text}) => (
  <div className="text-7xl font-extrabold mb-6">
    <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#163971] to-transparent">
      { text }
    </h2>
  </div>
);

function App() {
  return (
    <div>
      {/* <div className='fixed h-screen w-screen z-0'>
        <img src='/bg.svg' className='w-full h-full' />
      </div> */}
      <Navbar />
      {/* <Blobs /> */}
      <main>
        <section className='flex justify-center items-center w-screen h-screen text-white'>
          <Parallax>
            <div className='flex flex-col md:flex-row items-center justify-center gap-7 text-center md:text-left'>
              <div>
                <span className='font-semibold text-xl'>¡Hola! Mi nombre es</span>
                <h1 className="text-7xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-l from-[#32c3ff] via-[#5b65ec] to-[#1adba2]">
                  Jose Silva
                  <span className='block font-semibold mt-5 text-xl text-white'>Desarrollador Full-stack</span>
                </h1>
              </div>
              <div>
                <img src='user-coding.png' className='w-4/5 mx-auto md:ml-auto md:mr-0' />
              </div>
            </div>
          </Parallax>
          <div className="custom-shape-divider-bottom-1666745174">
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
        <section className="py-24" id='about'>
          <div className='container px-3 mx-auto'>
            <SubTitle text="Sobre mi" />
            <Parallax>
              <div className='flex flex-col md:flex-row gap-6 text-white'>
                <div className='md:w-2/4 text-justify'>
                  <p className='mb-4'>Soy desarrollador Full-Slack y me gusta estar en constante aprendizaje para refrescar o adquirir nuevos conocimientos que me ayuden en el desarrollo de proyectos.</p>
                  <p>Siempre he tenido un gran interés por la programación, crear soluciones mediante el desarrollo de software que facilite las tareas en la vida cotidiana o en áreas laborales.</p>
                  <div className=' mt-6'>
                    <Button text='Descargar CV' href='./JoséSilva-CV.pdf' />
                  </div>
                </div>
                <div className='md:w-2/4'>
                  <h3 className='font-bold mb-1'>Habilidades</h3>
                  <Skills/>
                </div>
              </div>
            </Parallax>
          </div>
        </section>
        <section className="py-24" id='portfolio'>
          <div className='container px-3 mx-auto'>
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
                <Button text='Enviar' />
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
