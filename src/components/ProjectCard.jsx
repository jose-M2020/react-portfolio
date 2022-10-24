import { motion } from 'framer-motion';
import React from 'react'

const ProjectCard = ({ data, setSelectedId }) => {
  const { id, img } = data;

  return (
    <div className="w-full p-1 md:p-2 hover:cursor-pointer" onClick={() => setSelectedId(id)}>
      <motion.div layoutId={`card-image-container-${id}`}>
        <img alt="Project" className="block object-cover object-center w-full h-full rounded-lg"
             src={img} />
      </motion.div> 
    </div>
  )
}

export default ProjectCard