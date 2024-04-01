import { Fragment, useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion';

const ProjectCard = ({ 
  index,
  length,
  projectData,
  currentProjectId,
  setCurrentProjectId,
}) => {
  const { scrollY } = useScroll();
  const projectRef = useRef();
  const [lineHeight, setLineHeight] = useState()
  const [showMore, setShowMore] = useState(false)
  const { 
    id, 
    title, 
    description, 
    tools: {front, back} 
  } = projectData;

  // TODO: Fix the scroll

  useEffect(() => {
    scrollY.onChange(() => {
      const {top} = projectRef.current.getBoundingClientRect();
      const positionY = Math.round((top/window.innerHeight)*100);
        
      if((positionY < 60 && positionY > 0) && id !== currentProjectId) {
        setCurrentProjectId(id);
      } 
      // if((positionY > 60 && positionY < 0)){
      //   setCurrentItem(0);
      //   setCurrentProjectId(null);
      // }
    });
  })

  useEffect(() => {
    setLineHeight(projectRef?.current?.clientHeight + 180)
  }, [showMore])

  return (
    // <div className="w-full p-1 md:p-2 overflow-hidden
    //                 hover:cursor-pointer hover:scale-105 duration-200" 
    //       onClick={() => setCurrentProjectId(id)}
    // >
    //   <motion.div className='w-full h-full rounded-lg overflow-hidden relative
    //                          after:absolute after:top-0 after:left-0 
    //                          after:content-["\f06e"] after:font-["Font_Awesome_6_Free"] after:text-3xl after:text-white
    //                          after:bg-sky-900/70 after:w-full after:h-full after:opacity-0
    //                          after:flex after:justify-center after:items-center
    //                          after:hover:opacity-100 after:duration-300' 
    //               layoutId={`card-image-container-${id}`}>
    //     <img alt="Project" className="block object-cover object-center mx-auto"
    //          src={img}
    //          loading='lazy' />
    //   </motion.div> 
    // </div>
    <div className='flex gap-5'>
      {/* LEFT SIDE */}
      { (length - 1 === index) ? (
        <div className='text-[#1adba2] md:mb-[14.5rem]'>
          <div className='my-7 w-3 h-3 bg-[#1adba2] rounded-full outline outline-[10px] outline-[#1adba2]/20' />
        </div>
      ) : (
        <div className='text-[#1adba2] flex flex-col items-center'>
          <div className='my-7 w-3 h-3 bg-[#1adba2] rounded-full outline outline-[10px] outline-[#1adba2]/20' />
          <div className={`w-[1px] bg-[#1adba2]`} style={{ height: `${lineHeight}px` }}></div>
        </div>
      )}
      {/* RIGHT SIDE - CARD */}
      <div className='h-full w-full p-4 rounded-2xl shadow-lg shadow-[#1adba2]/30' ref={projectRef}>
          <motion.h3
            className='text-4xl font-bold mb-6 text-[1.8rem]'
            layoutId={`card-title-${id}`}
          >
            { title }
          </motion.h3>
          <div
            style={{
              ...(!showMore && {
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              })
            }}
          >
            { description.map((item, index, {length}) => (
              <Fragment key={index}>
                <p>
                  { item }
                </p>
                { (length - 1) !== index && (
                  <br/>
                )}
              </Fragment>
            )) }
          </div>
          <span
            className='text-[#1adba2] cursor-pointer'
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? 'Leer más' : 'Leer menos'}
          </span>
          <div className='mt-4 mb-3'>
            <div className='flex flex-wrap gap-x-2 gap-y-3 '>
              {front.map((item, i, {length}) => (
                <div className='px-3  rounded-full bg-[#263b4b]' key={i}>
                  {item}
                </div>
              ))}
              {back.map((item, i, {length}) => (
                <div className='px-3  rounded-full bg-[#345168]' key={i}>
                  {item}
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>

  )
}

export default ProjectCard