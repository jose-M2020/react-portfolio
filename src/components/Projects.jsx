import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Parallax, ProjectCard, ModalProject } from './'

const Projects = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);
  

  return (
    <div className="">
      <div className="text-7xl font-extrabold mb-6">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#163971] to-transparent">
          Portafolio
        </h2>
      </div>
      <Parallax>
        <motion.div className="flex flex-wrap -m-1 md:-m-2 py-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 }
                    }}>
          {items.map((item, index) => (
            <div className="flex flex-wrap w-full sm:w-1/3" key={index}>
                <ProjectCard data={item} setSelectedId={setSelectedId} />
            </div>
          ))}
        </motion.div>
      </Parallax>
      <AnimatePresence>
      {selectedId && (
        <ModalProject id={selectedId} setSelectedId={setSelectedId} />
        
      )}
      </AnimatePresence>
    </div>
  )
}

export default Projects