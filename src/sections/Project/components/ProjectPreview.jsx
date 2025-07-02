import { motion } from 'framer-motion'

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
      ease: "easeInOut",
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
      ease: "easeInOut",
      opacity: {
        duration: .8,
      }
    }
  }
}

const sentenceAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 16,
      stiffness: 300,
    }
  }
};

export const ProjectPreview = ({
  inViewport,
  currentProject,
  currentProjectId,
  projectItemIndex,
  setProjectItemIndex,
}) => {

  const NavigationButtons = () => (
    <div className='flex gap-3 text-white mb-3'>
      {currentProject.items.length > 1 && (
          currentProject.items.map((item, index) => (
            <button
              key={index}
              className={
                `px-4 py-1 bg-transparent rounded-lg 
                hover:shadow hover:shadow-[#03e4e6] transition-all duration-200
                ${projectItemIndex === index ? 'bg-[#4390be]' : 'border-[2px] border-[#174f70]'}`
              }
              onClick={() => setProjectItemIndex(index)}
            >
              {item.name}
            </button>
          ))
      )}
    </div>
  );

  const ProjectLink = () => (
    <a 
      href={(currentProject.items[projectItemIndex]?.url?.demo) ?? (currentProject.items[0]?.url?.demo)} 
      className='block text-white p-2 mb-5 shadow-sm shadow-sky-300 rounded-lg
      hover:bg-sky-800/70 duration-700
      truncate'
      target='_blank' rel='noreferrer'
    >
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-globe mr-1 md:text-xl lg:text-base"></i>
        <motion.div
          className="flex"
          variants={sentenceAnimation}
          initial="hidden"
          animate="visible"
        >
          {(currentProject.items[0]?.url?.demo || '').split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </a>
  );

  const ProjectImage = () => (
    <>
      {/* <motion.div 
        className="p-2 w-[500px] h-[261px] rounded-lg shadow-sm" 
        variants={screenAnimation}
        initial='hidden'
        animate='visible'
        style={{
          background: `url(${(currentProject.items[projectItemIndex]?.img) ?? (currentProject.items[0]?.img)}), rgb(21 66 100 / 51%)`,
        }}
      >
      </motion.div> */}

      <motion.div
        className="rounded-lg h-full shadow-sm"
        variants={screenAnimation}
        initial='hidden'
        animate='visible'
      >
        <img
          className='w-full'
          src={
            currentProject.items[projectItemIndex]?.img.length ? (
              currentProject.items[projectItemIndex]?.img
            ) : 'images/no-image.png'
          }
          alt={currentProject.title}
        />

      </motion.div>
    </>
  );

  const ProjectSkeleton = () => (
    <div className="animate-pulse h-full">
      <div className='w-full p-2 mb-2 bg-[#30a6ff82] rounded-lg'></div>
      <div className='p-2 h-[261px] rounded-lg  shadow-sm bg-[#30a6ff82]'></div>
    </div>
  );

  const ProgressTooltip = () => (
    currentProject?.status === 'in progress' && (
      <div
        className="bg-blue-500 text-white p-1 rounded text-sm
        absolute h-14-left-4 -top-4 right-2"
      >
        <i className="fa-solid fa-gear fa-spin fa-spin-reverse"></i>
        <span className='ml-1'>En construcción</span>
      </div>
    )
  );

  return (
    <motion.div
      className='fixed md:sticky bottom-0 left-50 md:right-0 md:top-[20%] opacity-0 z-10 w-3/3 w-[82%] min-[500px]:w-2/3 md:w-auto mx-8 md:mx-0'
      animate={inViewport ? 'visible' : 'hidden'}
      variants={hideAnimation}
    >
        {/* <img src="images/laptop-V2.svg" className='-z-10 w-[29rem]' alt="laptop" /> */}
        <div
          className='h-full p-4 backdrop-blur-md bg-sky-800/40 shadow-2xl shadow-gray-700 rounded-lg'
        >
          <ProgressTooltip />
          {currentProjectId ? (
            <>
              <NavigationButtons />
              <ProjectLink />
              <ProjectImage />
            </>
          ) : (
            <ProjectSkeleton />
          )}
        </div>
    </motion.div>
  )
}
