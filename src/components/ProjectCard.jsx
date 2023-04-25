import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'

const ProjectCard = ({ 
  index,
  length,
  data,
  currentId,
  setCurrentId
}) => {
  const { scrollY } = useScroll();
  const projectRef = useRef(null);
  const [lineHeight, setLineHeight] = useState()
  const [showMore, setShowMore] = useState(false)
  const { 
    id, 
    title, 
    description, 
    tools: {front, back} 
  } = data;

  // TODO: Fix the scroll

  useEffect(() => {
    scrollY.onChange(() => {
      const {top} = projectRef.current.getBoundingClientRect();
      const positionY = Math.round((top/window.innerHeight)*100);
        
      if((positionY < 60 && positionY > 0) && id !== currentId) {
        setCurrentId(id);
      } 
      // if((positionY > 60 && positionY < 0)){
      //   setCurrentItem(0);
      //   setCurrentId(null);
      // }
    });
  })

  useEffect(() => {
    setLineHeight(projectRef?.current?.clientHeight + 150)
  }, [projectRef?.current?.clientHeight])

  return (
    // <div className="w-full p-1 md:p-2 overflow-hidden
    //                 hover:cursor-pointer hover:scale-105 duration-200" 
    //       onClick={() => setCurrentId(id)}
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

    <div className='flex gap-3'>
      { (length - 1 === index) ? (
        <div className='text-[#1adba2] md:mb-[14.5rem]'>
          <i className="fa-regular fa-object-group text-4xl mt-4"></i>
        </div>
      ) : (
        projectRef && (
          <div className='text-[#1adba2] flex flex-col items-center'>
            <i className="fa-regular fa-object-group text-4xl my-4"></i>
            <div className={`w-[1px] bg-[#1adba2]`} style={{ height: `${lineHeight}px` }}></div>
          </div>
        )
      )}
      {/* CARD */}
      <div className='h-full w-full p-4 rounded-2xl shadow-lg shadow-[#1adba2]/30 text-justify' ref={projectRef}>      
          <motion.h3 className='text-4xl font-bold mb-6 text-[1.8rem]' layoutId={`card-title-${id}`}>{ title }</motion.h3>
          <p
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
              <>
                { item }
                <br/>
                <br/>
              </>
            )) }
          </p>
          <span
            className='text-[#1adba2] cursor-pointer'
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? 'Ver más' : 'Ver menos'}
          </span>
          <div className='mt-4'>
            {front && (
              <div className='flex mb-2'>
                <span className='font-bold mr-1'>Front-end: </span>
                <ul className='flex flex-wrap gap-1'>
                  {front.map((item, i, {length}) => (
                    <li key={i}>{(length - 1 === i) ? item : (item + ',')}</li>
                  ))}
                </ul>
              </div>
            )}
            {back && (
              <div className='flex'>
                <span className='font-bold mr-1'>Back-end: </span>
                <ul className='flex gap-2'>
                  {back.map((item, i, {length}) => (
                    <li key={i}>{(length - 1 === i) ? item : (item + ',')}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
      </div>
    </div>

  )
}

export default ProjectCard