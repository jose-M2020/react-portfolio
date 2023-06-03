import React from 'react'
import { links, socialMedia } from '../data/data'

const Sidebar = () => {
  return (
    <div className='bg-[#1d3452] w-full lg:w-[300px] text-white
      absolute top-0 left-0 bottom-0 right-0 lg:sticky md:top-0
      hidden lg:flex flex-col h-screen z-10'
    >
      {/* <div className='h-[100px] mb-[60px] relative'>
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
      </div> */}
      <div className='px-7 pt-8
        bg-[length:100%_105px] bg-no-repeat'
        style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% 100%, #658bc6 42%, #1e40af)' }}
      >
        <img
          src="images/profile.png"
          alt="Profile"
          className='w-[150px] h-[150px] mb-3 mx-auto rounded-full bg-[#658bc6]'
        />
        <div className='text-center'>
          <p className='text-xl font-bold mb-1'>
            José Manuel Silva
          </p>
          <div className='text-gray-200'>
            <p className='text-s  mb-1'>
              Full-Stack Developer
            </p>
            <p className='text-xs mt-[4px]'>
              <i className="fa-solid fa-location-dot" /> Guerrero, MX.
            </p>
          </div>
        </div>
      </div>
      <div className='px-7 pb-8 mt-12 flex flex-col justify-between h-full overflow-y-auto'>
        <div className='flex flex-col gap-4 mb-12'>
          {links.map(({ name, url, icon }, index) => (
              <div className='' key={index}><a href={url}><i className={`${icon} w-6 mr-2`} />{ name }</a></div>
          ))}
        </div>
        <div className=''>
            {/* <Button className='w-full' text='Descargar CV' href='./JoséSilva-CV.pdf' /> */}
            <div className='flex gap-3 mt-4'>
              {socialMedia.map((item, index) => (
                <a className='text-gray-300 text-lg hover:bg-[#1adba2] hover:text-sky-900
                                w-8 h-8 p-4
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
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar