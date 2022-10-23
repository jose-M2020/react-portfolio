import './App.css';
import { motion  } from "framer-motion"
import Navbar from './components/Navbar';
import Blobs from './components/Blobs/Blobs';
import Parallax from './components/Parallax';

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
      <motion.div className='flex justify-center items-center w-screen h-screen'>
        <Parallax>
          <h1 className="text-5xl font-bold text-white">
            Portfolio
          </h1>
        </Parallax>
      </motion.div>
      <div className='h-screen'>
        
      </div>
    </div>
  );
}

export default App;
