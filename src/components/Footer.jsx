import React from 'react'
import { socialMedia } from '../utils/constants';

const Footer = () => {
  

  return (
    <footer className='bg-black/80 pt-12 pb-9 relative'>
        <a className='bg-sky-900 text-[#1adba2] text-xl 
                        w-9 h-9 p-4 
                        rounded-full
                        absolute inset-x-2/4 -top-5 -translate-x-2/4
                        flex justify-center items-center' 
            href='#'>
            <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className='flex justify-center gap-3 mb-4'>
          {socialMedia.map((item, index) => (
            <a className='text-white text-lg hover:bg-[#1adba2] hover:text-sky-900
                            w-10 h-10 
                            border border-[#1adba2] rounded-full 
                            flex items-center justify-center
                            duration-300' 
               href={ item.link }
               key={index}
               target='_blank'>
               <i className={ item.icon }></i>
            </a>
          ))}
        </div>
        <div className='text-center text-white/40'>
            <p>©2021 - Jose Silva</p>
        </div>
    </footer>
  )
}

export default Footer