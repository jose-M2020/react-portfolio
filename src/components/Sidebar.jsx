import React from 'react'
import { links, socialMedia } from '../data/data'
import Button from './Button'

const Sidebar = () => {
  return (
    <div className='sticky min-w-[250px] top-0 text-white
    flex flex-col h-screen'
    >
      <div className='h-[100px] mb-[60px] relative'>
        <img src="/images/banner.jpg" className='object-cover h-full w-full' alt="Banner" />
        <div
          class="w-[100px] h-[100px] rounded-full bg-[#5878ab]
          absolute -bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-contain bg-center bg-no-repeat
          z-30"
          style={{
            backgroundImage: 'url(images/profile.png)'
          }}
        ></div>
        <div
          className='absolute inset-0 bg-sky-800 opacity-60'
        ></div>
      </div>
      <div className='text-center mb-5'>
        <p className='text-xl font-bold mb-1'>
          José Manuel
        </p>
        <p className='text-sm mb-1'>
          Full-Stack Developer
        </p>
        <p className='text-sm'>
          <i className="fa-solid fa-location-dot" /> Guerrero, MX.
        </p>
      </div>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-4 p-3'>
          {links.map(({ name, url, icon }, index) => (
              <div className='' key={index}><a href={url}><i className={`${icon} w-6`} />{ name }</a></div>
          ))}
        </div>
        <div className='p-3'>
          <Button className='w-full mb-4' text='Descargar CV' href='./JoséSilva-CV.pdf' />
          <div className='flex justify-center gap-3 mb-4'>
            {socialMedia.map((item, index) => (
              <a className='text-white text-lg hover:bg-[#1adba2] hover:text-sky-900
                              w-10 h-10 
                              border border-[#1adba2] rounded-full 
                              flex items-center justify-center
                              duration-300' 
                href={ item.link }
                key={index}
                target='_blank'
                rel="noreferrer">
                <i className={ item.icon }></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar