import './App.css';
import { motion } from "framer-motion"
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <motion.h1 initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ color: '#033448', opacity: 1 }} className="text-3xl font-bold underline text-center mt-8">
        Portfolio
      </motion.h1>
    </div>
  );
}

export default App;
