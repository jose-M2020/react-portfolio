import './App.css';
import { motion  } from "framer-motion";
import { Navbar, Blobs, Parallax, Projects, Skills } from './components';
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

function App() {
  return (
    <div>
      <Navbar />
      {/* <Blobs /> */}
      <main>
        <section className='flex justify-center items-center w-screen h-screen text-white'>
          <Parallax>
            <div className='flex flex-col md:flex-row items-center justify-center gap-7 text-center md:text-left'>
              <div>
                <span className='font-semibold text-xl'>¡Hola! Mi nombre es</span>
                <h1 className="text-7xl font-bold mt-4">
                  Jose Silva
                  <span className='block font-semibold mt-5 text-xl'>Desarrollador Full-stack</span>
                </h1>
              </div>
              <div>
                <img src='user-coding.png' className='w-4/5 mx-auto md:ml-auto md:mr-0' />
              </div>
            </div>
          </Parallax>
        </section>
        <section className="container mx-auto py-24" id='about'>
          <div className="text-7xl font-extrabold mb-6">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#94ceff] to-transparent">
              Sobre mi
            </h2>
          </div>
          <Parallax>
            <div className='flex flex-col md:flex-row gap-4 text-white'>
              <div className='md:w-2/4'>
                <p className='mb-4'>Soy desarrollador Full-Slack y me gusta estar en constante aprendizaje para refrescar o adquirir nuevos conocimientos que me ayuden en el desarrollo de proyectos.</p>
                <p>Siempre he tenido un gran interés por la programación, crear soluciones mediante el desarrollo de software que facilite las tareas en la vida cotidiana o en áreas laborales.</p>
              </div>
              <div className='md:w-2/4'>
                <h3 className='font-bold mb-1'>Habilidades</h3>
                <Skills/>
              </div>
            </div>
          </Parallax>

        </section>
        <section className="container mx-auto py-24" id='portfolio'>
          <Projects items={projects} />
        </section>
        <section className='py-24' id='contact'>
          <div className="text-7xl font-extrabold mb-6">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#94ceff] to-transparent">
              Contacto
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
