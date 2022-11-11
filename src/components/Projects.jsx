import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { projects } from '../data/data';
import { Parallax, ProjectCard, ModalProject } from './'

const Projects = ({ items }) => {
  const [currentId, setCurrentId] = useState(null);
  const currentProject = projects.find(item => item.id === currentId);

  return (
    <>
      {/* <Parallax> */}
        {/* <motion.div className="flex flex-wrap -m-1 md:-m-2 py-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: .8 }
                    }}>
          {items.map((item, index) => (
            <ProjectCard data={item} setSelectedId={setSelectedId} />
          ))}
        </motion.div> */}

        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='w-full md:w-1/2 text-white order-2 md:order-1'>
            {/* <ProjectCard data={projects[0]} currentId={currentId} setCurrentId={setCurrentId} /> */}
            {items.map((item, index, {length}) => (
              <div className='flex gap-3' key={index}>
                { (length - 1 === index) ? (
                  <div className='text-[#1adba2] mb-[33rem] md:mb-[12.5rem]'>
                    <i className="fa-regular fa-object-group text-4xl mt-4"></i>
                  </div>
                ) : (
                  <div className='text-[#1adba2] flex flex-col items-center'>
                    <i className="fa-regular fa-object-group text-4xl my-4"></i>
                    <div className='h-[500px] w-[1px] bg-[#1adba2]'></div>
                  </div>
                )}
                <ProjectCard data={item} currentId={currentId} setCurrentId={setCurrentId} key={index} />
              </div>
            ))}
          </div>
          <div className='order-1 sticky top-2/3 right-0 md:top-1/3 h-full'>
            <div className='md:transform-x'>
              <div className='w-[22rem] h-56 bg-cyan-700 shadow-2xl rounded-lg'></div>
              <div className='w-[22rem] h-56 backdrop-blur-sm bg-sky-800/30 shadow-2xl shadow-gray-700 absolute -top-8 -left-8 rounded-lg'>
                {currentId ? (
                  <>
                    <a href={currentProject?.url?.demo} className='block text-white bg-teal-800/60 p-2 mb-2 rounded-lg' target='_blank' rel='noreferrer'>{currentProject?.url?.demo}</a>
                    <img src={currentProject?.img} className="w-full p-2 rounded-lg" alt="" />
                  </>
                ) : (
                  <div className="animate-pulse">
                    <div className='w-full p-2 mb-2 bg-slate-500 rounded-lg'></div>
                    <div className='w-full h-44 bg-cyan-600 rounded-lg'></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      {/* </Parallax> */}

      {/* <AnimatePresence>
      {selectedId && (
        <ModalProject id={selectedId} selectedId={selectedId} setSelectedId={setSelectedId} />
      )}
      </AnimatePresence> */}
    </>
  )
}

export default Projects