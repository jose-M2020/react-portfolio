import './App.css';
import { motion  } from "framer-motion";
import { Navbar, Blobs, Parallax, Projects } from './components';
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
      <section className='flex justify-center items-center w-screen h-screen'>
        <Parallax>
          <h1 className="text-5xl font-bold text-white">
            Portfolio
          </h1>
        </Parallax>
      </section>
      <section className="py-24">
        <Projects items={projects} />
      </section>
      <section className='py-24'>

      </section>
    </div>
  );
}

export default App;
