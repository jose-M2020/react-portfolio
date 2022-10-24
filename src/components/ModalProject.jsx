import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';
import { projects } from '../utils/constants';

const ModalProject = ({ id, setSelectedId }) => {
  const { 
    img, 
    title, 
    url: { github, demo }  
  } = projects.find(item => item.id === id);
  const cardRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, [])

  const handleClickOutside = (e) => {
    if(!cardRef?.current?.contains(e.target)){
        setSelectedId(null);
    }
  }

  return (
    <motion.div className='modal--active 
                         bg-sky-900/50 text-white backdrop-blur-sm 
                           fixed top-0 left-0 
                           h-screen w-screen
                           z-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}>
      <div className='flex justify-center items-center min-w-sm h-full scroll-auto'>
        <div className='bg-cyan-900 p-5 rounded-xl' ref={cardRef}>
          <div>
            <h5 className='text-3xl mb-3 font-semibold'>{ title }</h5>
          </div>
          <motion.div layoutId={`card-image-container-${id}`}>
            <img alt="Project" className="block object-cover object-center w-full h-full rounded-lg"
                 src={img} />
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
          <div className='flex gap-2'>
            <a href={github} className='p-2 bg-teal-700 rounded-md' target='_blank'>GitHub</a>
            <a href={demo} className='p-2 bg-teal-700 rounded-md' target='_blank'>Demo</a>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default ModalProject