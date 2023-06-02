import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button, Parallax } from '../../components'
import { socialMedia } from '../../data/data';

const textAnimate = {
  hidden: {
    y: 50, 
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1
    }
  }
}

const baseTranform = {
  x: '-50%',
  y: '-50%',
  opacity: 0,
  rotateY: 158,
  skewY: 346,
  transformPerspective: 900, 
}

const editorAnimate = {
  hidden: {
    ...baseTranform
  },
  visible: {
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
    skewY: 343,
  },
  visible: {
    opacity: 1,
    top: '40%',
    left: '28%',
    y: '-78%',
    scale: .7,
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
    left: '76%',
    y: '-45%',
    scale: .7,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
      delay: 1
    }
  }
}

const Home = () => {
  const ref = useRef(null);
  let { scrollYProgress } =  useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <section className='relative flex justify-center items-center h-screen text-white' ref={ref}>
        <motion.div className='absolute inset-x-0 top-0 h-screen hero-bg -z-10' style={{ y, opacity }}>
          <img src="/hero.jpg" alt="" className='object-cover w-full h-full' />
        </motion.div>
        {/* <GradientAnimation /> */}
        <div className="w-full">
          <div className='px-6 max-w-screen-xl mx-auto '>
            <Parallax className='flex flex-col md:flex-row gap-8 items-center md:text-left'>
              <motion.div className='text-center lg:text-left lg:max-w-[50%]'
                          initial={"hidden"}
                          whileInView={"visible"}
                          viewport={{once: true, amount: 0.5}}
                          transition={{
                            delayChildren: 0.3,
                            staggerChildren: 0.5
                          }}>
                {/* <motion.span className='text-xl md:text-1xl lg:text-3xl font-semibold' variants={textAnimate}>
                  ¡Hola! Mi nombre es
                </motion.span> */}
                {/* <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-b from-[#77c5ff] via-[#3c949a] to-[#caffef]" variants={textAnimate}>
                  Jose Silva
                </motion.h1> */}
                {/* <motion.h1 className="sm:text-5xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white" variants={textAnimate}>
                  Descubre mis Proyectos Web y Ponte en Contacto
                </motion.h1> */}
                <motion.h1 className="mb-6 sm:text-5xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white" variants={textAnimate}>
                  ¡Hola!<br/>soy <span className='text-[#43eeb2]'>Jose Manuel</span>,<br/>desarrollador web
                </motion.h1>
                <motion.p className="mb-6 text-lg leading-8 text-gray-300" variants={textAnimate}>
                  Programador en creación de aplicaciones web utilizando principalmente la tecnología MEAN stack. Con conocimientos en desarrollo tanto de frontend como de backend.
                </motion.p>
                {/* <motion.div className='flex gap-3 mt-4' variants={textAnimate}>
                  {socialMedia.map((item, index) => (
                    <a className='text-gray-300 text-lg hover:bg-[#1adba2] hover:text-sky-900
                                    w-10 h-10 
                                    border border-gray-300 rounded-full 
                                    flex items-center justify-center
                                    duration-300' 
                      href={ item.link }
                      key={index}
                      target='_blank'
                      rel="noreferrer">
                      <i className={ item.icon }></i>
                    </a>
                  ))}
                </motion.div> */}
                {/* <motion.span className='text-xl md:text-1xl lg:text-3xl block font-semibold mt-5 text-white' variants={textAnimate}>
                  Desarrollador Full-stack
                </motion.span> */}
                <motion.div className='' variants={textAnimate}>
                  <Button text='Ver Proyectos' href='./#portfolio' />
                </motion.div>
              </motion.div>
              <motion.div className='hidden lg:block flex-grow absolute md:relative
                                    sm:scale-75 lg:scale-80 xl:scale-100 origin-center-rigth'
                          initial={"hidden"}
                          whileInView={"visible"}
                          viewport={{once: true, amount: 0.5}}
                          >
                  <motion.div className='screen editor' variants={editorAnimate}></motion.div>
                  <motion.img src="/images/programmer.svg" className='absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-72' alt="Programmer" />
                  <motion.div className='screen mockup1' variants={mockup1Animate}></motion.div>
                  <motion.div className='screen mockup2' variants={mockup2Animate}></motion.div>           
              </motion.div>
            </Parallax>
          </div>
        </div>
        {/* <div className="shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z"
              className="shape-fill"
            />
          </svg>
        </div> */}
      </section>
      {/* <div className='absolute top-0 left-0 w-screen h-screen'>
        <Blob className="absolute -top-1/4 -left-1/4 mix-blend-overlay w-1/2" />
        <Blob className="absolute -bottom-1/4 -right-28 mix-blend-overlay w-1/2" />
      </div> */}
    </>
  )
}

export default Home