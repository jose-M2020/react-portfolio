import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '../data/data';
import { useIntersection } from '../utils/useIntersection';
import { ProjectCard, Parallax } from './'

const sentenceAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      // delay: .0,
      staggerChildren: .03
    }
  }
}

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const screenAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: .8
    }
  }
}

const hideAnimation = {
  hidden: { 
    opacity: 0,
    y: '100%', 
    transition: {
      duration: .8,
      opacity: {
        duration: .3,
      }
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .4,
      opacity: {
        duration: .8,
      }
    }
  }
}

const Projects = ({ items }) => {
  const [currentId, setCurrentId] = useState(null);
  const [currentItem, setCurrentItem] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  const currentProject = projects.find(item => item.id === currentId);

  const refProjects = useRef();

  const inViewport = useIntersection(refProjects, '-100px');

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

        <div className='flex flex-col md:flex-row justify-between gap-10'>
          <div ref={refProjects} className='w-full md:w-1/2 text-white order-2 md:order-1'>
            <Parallax>
              {/* <ProjectCard data={projects[0]} currentId={currentId} setCurrentId={setCurrentId} /> */}
              {items.map((item, index, {length}) => (
                <ProjectCard
                  key={index}
                  index={index}
                  length={length}
                  data={item}
                  currentId={currentId}
                  setCurrentId={setCurrentId} />
              ))}
            </Parallax>
          </div>
          <motion.div className='order-1 fixed bottom-0 left-50 opacity-0
                          md:sticky md:right-0 md:top-[20%] md:h-full'
                      animate={inViewport ? 'visible' : 'hidden'}
                      variants={hideAnimation}>
              {/* <img src="images/laptop-V2.svg" className='-z-10 w-[29rem]' alt="laptop" /> */}
              <div className='p-4 backdrop-blur-md bg-sky-800/40 shadow-2xl shadow-gray-700 rounded-lg 
                              scale-[.65] sm:scale-[1] md:scale-[.74] lg:scale-100 origin-bottom-left md:origin-right
                              text-2xl sm:text-base' 
                   key={currentId}>
                {currentProject?.status === 'in progress' && (
                  <div
                    className="bg-blue-500 text-white p-1 rounded text-sm
                    absolute h-14-left-4 -top-4 right-2"
                  >
                    <i className="fa-solid fa-gear fa-spin fa-spin-reverse"></i>
                    <span className='ml-1'>En proceso</span>
                  </div>
                )}
                {currentId ? (
                  <>
                    <div className='flex gap-1 text-white mb-3'>
                      {currentProject.items.length > 1 && (
                          currentProject.items.map((item, index) => (
                              <button key={index} className={`px-2 py-1 bg-teal-200/30 rounded-lg 
                                               hover:bg-teal-200/10 hover:shadow-2xl duration-150
                                               ${currentItem === index ? 'bg-teal-200/10 border-b border-b-teal-400' : ''}`}
                                      onClick={() => setCurrentItem(index)}
                              >{item.name}</button>
                          ))
                      )}
                    </div>
                    <motion.a href={(currentProject.items[currentItem]?.url?.demo) ?? (currentProject.items[0]?.url?.demo)} 
                              className='block text-white p-2 mb-5 shadow-sm shadow-sky-300 rounded-lg 
                                         hover:bg-sky-800/70 duration-700 
                                         md:text-xl lg:text-base' 
                              target='_blank' rel='noreferrer'
                              variants={sentenceAnimation}
                              initial='hidden'
                              animate='visible'
                              >
                      <i className="fa-solid fa-globe mr-1 text-sm"></i>
                      {((currentProject.items[currentItem]?.url?.demo) ?? (
                        (currentProject.items[0]?.url?.demo))?.split('').map((char, index) => (
                          <motion.span key={index} variants={letterAnimation}>{char}</motion.span>
                        ))
                      )}
                    </motion.a>
                    {/* <a href={currentProject?.url?.demo} className='block text-white bg-teal-800/60 p-2 mb-2 rounded-lg' target='_blank' rel='noreferrer'>{currentProject?.url?.demo}</a> */}
                    {/* <motion.img src={currentProject?.img} alt="project mockup"
                                className="w-full p-2 rounded-lg" 
                                variants={screenAnimation}
                                initial='hidden'
                                animate='visible'
                                // onClick={() => currentId && setShowModal(true)}
                                // layoutId='card-image-container'
                    /> */}
                    <motion.div className="p-2 rounded-lg w-[500px] h-[261px] shadow-sm" 
                                variants={screenAnimation}
                                initial='hidden'
                                animate='visible'
                                style={{background: `url(${(currentProject.items[currentItem]?.img) ?? (currentProject.items[0]?.img)}), rgb(21 66 100 / 51%)`}}
                                // onClick={() => currentId && setShowModal(true)}
                                // layoutId='card-image-container'
                    >
                    </motion.div>
                  </>
                ) : (
                  <div className="animate-pulse">
                    <div className='w-full p-2 mb-2 bg-[#30a6ff82] rounded-lg'></div>
                    <div className='p-2 rounded-lg w-[500px] h-[261px] shadow-sm bg-[#30a6ff82]'></div>
                  </div>
                )}
              </div>
          </motion.div>
        </div>

      {/* </Parallax> */}

      {/* <AnimatePresence>
      {showModal && (
        <ModalProject id={currentId} showModal={showModal} setShowModal={setShowModal} />
      )}
      </AnimatePresence> */}
    </>
  )
}

export default Projects