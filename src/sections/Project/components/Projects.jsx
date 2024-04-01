import { useEffect, useRef, useState } from 'react'
import { useIntersection } from '../../../utils/useIntersection';
import { Parallax } from '../../../components'
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/data';
import { ProjectImage } from './ProjectImage';

const Projects = () => {
  const refProjects = useRef();
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [projectItemIndex, setProjectItemIndex] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  
  const currentProject = projects.find(item => item.id === currentProjectId);
  const inViewport = useIntersection(refProjects, '-100px');

  useEffect(() => {
    setProjectItemIndex(0);
  }, [currentProjectId])

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
              {/* <ProjectCard data={projects[0]} currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} /> */}
              {projects.map((item, index, {length}) => (
                <ProjectCard
                  key={index}
                  index={index}
                  length={length}
                  projectData={item}
                  currentProjectId={currentProjectId}
                  setCurrentProjectId={setCurrentProjectId} />
              ))}
            </Parallax>
          </div>
          <div className='order-1 relative w-1/2'>
            <ProjectImage
              inViewport={inViewport}
              currentProject={currentProject}
              currentProjectId={currentProjectId}
              projectItemIndex={projectItemIndex}
              setProjectItemIndex={setProjectItemIndex}
            />
          </div>
        </div>

      {/* </Parallax> */}

      {/* <AnimatePresence>
      {showModal && (
        <ModalProject id={currentProjectId} showModal={showModal} setShowModal={setShowModal} />
      )}
      </AnimatePresence> */}
    </>
  )
}

export default Projects