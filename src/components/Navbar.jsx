import React from 'react'
import logo from '../logo.png'
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from './'

const navbar = {
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

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

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

  return (
    <header className='fixed top-0 w-full
                       text-white backdrop-blur-sm 
                       p-6
                       z-50'>
        <motion.nav className='flex align-middle justify-between'
                    animate={isOpen ? "open" : "closed"}
                    initial={isOpen ? "open" : "closed"}>
          <div className='flex align-middle justify-between w-full z-50'>
            <a aria-current="page" href='#'><img src={ logo } className='h-7' alt='Logo' /></a>
            <div className='block md:hidden'>
                <MenuToggle toggle={() => toggleOpen()} />
            </div>
          </div>
          <motion.ul className='absolute top-[-100px] left-0 md:static 
                          h-screen md:h-auto 
                          w-screen md:w-auto 
                          flex align-middle justify-center flex-col md:flex-row gap-6 md:gap-3
                          opacity-0 md:opacity-100 invisible md:visible
                          text-3xl md:text-sm font-semibold
                          z-40'
                      variants={navbar}>
              {links.map(({ name, url }, index) => (
                  <li className='text-center' key={index}><a href={url}>{ name }</a></li>
              ))}
          </motion.ul>
        </motion.nav>
    </header>
  )
}

export default Navbar