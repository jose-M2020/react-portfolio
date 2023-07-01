import React from 'react'
import { motion } from 'framer-motion';

const baseTranform = {
  x: '-50%',
  y: '-50%',
  opacity: 0,
  // rotateX: -20,
  // rotateY: -20,
  
  // rotateY: 158,
  // skewY: 306,
  // transformPerspective: 900, 
}

const editorAnimate = {
  hidden: {
    ...baseTranform
  },
  visible: {
    scale: 1.2,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2
    }
  }
}

const mockup1Animate = {
  hidden: {
    ...baseTranform,
    // skewY: 343,
  },
  visible: {
    opacity: 1,
    top: '40%',
    left: '50%',
    x: '-50%',
    y: '18%',
    scale: .79,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
      delay: 1
    }
  }
}

const mockup2Animate = {
  hidden: {
    ...baseTranform
  },
  visible: {
    opacity: 1,
    top: '45%',
    left: '50%',
    y: '-78%',
    scale: .79,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
      delay: 1
    }
  }
}

const Screens = () => {
    
  return (
    <motion.div 
      className='hidden lg:block flex-grow absolute md:relative
      sm:scale-75 lg:scale-80 xl:scale-100 origin-center-rigth'
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once: true, amount: 0.5}}
    >
      <div
        style={{ perspective: 2000, transform: 'rotateY(-23deg) rotateX(22deg)' }}
      >
        <motion.div className='screen editor' variants={editorAnimate}></motion.div>
        {/* <motion.img src="/images/programmer.svg" className='absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-72' alt="Programmer" /> */}
        <motion.div className='screen mockup1' variants={mockup1Animate}></motion.div>
        <motion.div className='screen mockup2' variants={mockup2Animate}></motion.div>           
      </div>
    </motion.div>
  )
}

export default Screens