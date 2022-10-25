import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Parallax, ProjectCard, ModalProject } from './'

const Projects = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);
  

  return (
    <div className="">
      <div className="text-7xl font-extrabold mb-6">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#94ceff] to-transparent">
          Portafolio
        </h2>
      </div>
      <Parallax>
        <div className="flex flex-wrap -m-1 md:-m-2 py-4">
          {items.map((item, index) => (
            <div className="flex flex-wrap w-full sm:w-1/3" key={index}>
                <ProjectCard data={item} setSelectedId={setSelectedId} />
            </div>
          ))}
        </div>
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