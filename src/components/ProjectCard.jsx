import { motion } from 'framer-motion';
import React from 'react'

const ProjectCard = ({ data, setSelectedId }) => {
  const { id, img } = data;

  return (
    <div className="w-full p-1 md:p-2 overflow-hidden
                    hover:cursor-pointer hover:scale-105 duration-200" 
          onClick={() => setSelectedId(id)}
    >
      <motion.div className='w-full h-full rounded-lg overflow-hidden relative
                             after:absolute after:top-0 after:left-0 
                             after:content-["\f06e"] after:font-["Font_Awesome_6_Free"] after:text-3xl after:text-white
                             after:bg-sky-900/70 after:w-full after:h-full after:opacity-0
                             after:flex after:justify-center after:items-center
                             after:hover:opacity-100 after:duration-300' 
                  layoutId={`card-image-container-${id}`}>
        <img alt="Project" className="block object-cover object-center mx-auto"
             src={img}
             loading='lazy' />
      </motion.div> 
    </div>
  )
}

export default ProjectCard