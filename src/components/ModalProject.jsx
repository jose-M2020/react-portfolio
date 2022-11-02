import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';
import { projects } from '../utils/constants';
import { Button } from './';

const ModalProject = ({ id, setSelectedId }) => {
  const { 
    img, 
    title, 
    url: { github, demo }  
  } = projects.find(item => item.id === id);
  const cardRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  })

  const handleClickOutside = (e) => {
    // console.log(e.target)
    if(!cardRef?.current?.contains(e.target)){
        setSelectedId(null);
        // console.log('click outside')
    }
  }

  return (
    <motion.div className='modal--active 
                         text-white backdrop-blur-sm 
                           fixed top-0 left-0 
                           h-screen w-screen
                           z-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}>
      <div className='flex justify-center items-center min-w-sm h-full scroll-auto'>
        <div className='bg-black/60 p-6 rounded-xl' ref={cardRef}>
          <div>
            <h5 className='text-3xl mb-4 font-semibold'>{ title }</h5>
          </div>
          <motion.div className='mb-4' layoutId={`card-image-container-${id}`}>
            <img alt="Project" className="block object-cover object-center w-full h-full rounded-lg"
                 src={img} />
            {/* <motion.button onClick={() => setSelectedId(null)} /> */}
          </motion.div>
          <div className='flex gap-2'>
            <Button text='Demo' href={demo} />
            <Button text='GitHub' href={github} />
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default ModalProject