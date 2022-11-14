import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/data';
import { ProjectCard } from './'

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

const Projects = ({ items }) => {
  const [currentId, setCurrentId] = useState(null);
  // const [showModal, setShowModal] = useState(false);
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

        <div className='flex flex-col md:flex-row justify-between gap-10'>
          <div className='w-full md:w-1/2 text-white order-2 md:order-1'>
            {/* <ProjectCard data={projects[0]} currentId={currentId} setCurrentId={setCurrentId} /> */}
            {items.map((item, index, {length}) => (
              <div className='flex gap-3' key={index}>
                { (length - 1 === index) ? (
                  <div className='text-[#1adba2] mb-[33rem] md:mb-[20rem]'>
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
            <div className=''>
              {/* <img src="images/laptop-V2.svg" className='-z-10 w-[29rem]' alt="laptop" /> */}
              <div className='p-4 backdrop-blur-sm bg-sky-800/30 shadow-2xl shadow-gray-700 rounded-lg 
                              md:scale-75 lg:scale-100 md:origin-right' 
                   key={currentId}>
                {currentId ? (
                  <>
                    <motion.a href={currentProject?.url?.demo} 
                              className='block text-white p-2 mb-5 shadow-sm shadow-sky-300 rounded-lg 
                                         hover:bg-sky-800/70 duration-700 
                                         md:text-xl lg:text-base' 
                              target='_blank' rel='noreferrer'
                              variants={sentenceAnimation}
                              initial='hidden'
                              animate='visible'
                              >
                      <i className="fa-solid fa-globe mr-1 text-sm"></i>
                      {(currentProject?.url?.demo).split('').map((char, index) => (
                        <motion.span key={index} variants={letterAnimation}>{char}</motion.span>
                      ))}
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
                    <motion.div className="p-2 mb-4 rounded-lg w-[500px] h-[261px] shadow-sm" 
                                variants={screenAnimation}
                                initial='hidden'
                                animate='visible'
                                style={{background: `url(${currentProject?.img}), rgb(21 66 100 / 51%)`}}
                                // onClick={() => currentId && setShowModal(true)}
                                // layoutId='card-image-container'
                    >
                    </motion.div>
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
      {showModal && (
        <ModalProject id={currentId} showModal={showModal} setShowModal={setShowModal} />
      )}
      </AnimatePresence> */}
    </>
  )
}

export default Projects