import React from 'react'
import logo from '../logo.png'
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from './MenuToggle'

const navbar = {
  open: {
      top: '0', 
      opacity: 1,
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
        name: 'HOME',
    },
    {
        name: 'ABOUT',
    },
    {
        name: 'PROJECTS',
    },
    {
        name: 'CONTACT',
    }
  ];

  return (
    <header className='fixed 
                       top-0 w-full 
                       bg-sky-900 
                       text-white 
                       p-6
                       z-50'>
        <motion.nav className='flex align-middle justify-between'
                    animate={isOpen ? "open" : "closed"}
                    initial={isOpen ? "open" : "closed"}>
          <div className='flex align-middle justify-between w-full z-50'>
            <a href='#'><img src={ logo } className='h-7' alt='Logo' /></a>
            <div className='block md:hidden'>
                <MenuToggle toggle={() => toggleOpen()} />
            </div>
          </div>
          <motion.ul className='bg-sky-900 
                          absolute top-[-100px] left-0 md:static 
                          h-screen md:h-auto 
                          w-screen md:w-auto 
                          flex align-middle justify-center flex-col md:flex-row gap-6 md:gap-3
                          opacity-0 md:opacity-100
                          text-3xl md:text-base font-semibold
                          z-40'
                      variants={navbar}>
              {links.map(({ name }) => (
                  <li className='text-center'><a href='#'>{ name }</a></li>
              ))}
          </motion.ul>
        </motion.nav>
    </header>
  )
}

export default Navbar