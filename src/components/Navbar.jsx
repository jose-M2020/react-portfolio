import { useEffect, useState } from 'react'
import logo from '../logo.png'
import { motion, useCycle, useScroll } from "framer-motion"
import { MenuToggle } from './'

const links = [
  {
      name: 'ACERCA',
      url: '/#about'
  },
  {
      name: 'PORTAFOLIO',
      url: '/#portfolio'
  },
  {
      name: 'CONTACTO',
      url: '/#contact'
  }
];

const mobileNavbar = {
  open: {
      top: '0', 
      opacity: 1,
      visibility: 'visible',
      transition: {
        duration: .5
      }
  },
  closed: {
      
  }
}

const navbar = {
  visible: { 
    opacity: 1,
    y: 0
  },
  hidden: { 
    opacity: 0,
    y: -25
  }
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const updateState = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }

    if(scrollY?.current > 110){
      setTransparent(false);
    }else{
      setTransparent(true);
    }
  }
  useEffect(() => {
    scrollY.onChange(() => updateState());
  });
  
  return (
    <motion.header className={`fixed top-0 left-0 w-full
                       text-white ${!transparent && !hidden ? 'bg-[#0a1218]' : ''} backdrop-blur-sm 
                       p-6
                       z-50 duration-200`}
                   variants={navbar}
                   animate={ hidden ? "hidden" : "visible" }
                   transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}>
        <motion.nav className='flex align-middle justify-between'
                    animate={isOpen ? "open" : "closed"}
                    initial={isOpen ? "open" : "closed"}>
          <div className='flex align-middle justify-between w-full z-50'>
            <a aria-current="page" href='/#'><img src={ logo } className='h-7' alt='Logo' /></a>
            <div className='block md:hidden'>
                <MenuToggle toggle={() => toggleOpen()} />
            </div>
          </div>
          <motion.ul className='bg-[#0a1218] md:bg-transparent absolute top-[-100px] left-0 md:static 
                          h-screen md:h-auto 
                          w-screen md:w-auto 
                          flex align-middle justify-center flex-col md:flex-row gap-6 md:gap-3
                          opacity-0 md:opacity-100 invisible md:visible
                          text-3xl md:text-sm font-semibold
                          z-40'
                      variants={mobileNavbar}>
              {links.map(({ name, url }, index) => (
                  <li className='text-center' key={index}><a href={url}>{ name }</a></li>
              ))}
          </motion.ul>
        </motion.nav>
    </motion.header>
  )
}

export default Navbar