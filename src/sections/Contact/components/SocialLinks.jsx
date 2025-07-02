import React from 'react'
import { socialMedia } from '../../../data/data'

const SocialLinks = () => {
  return (
    <div className='md:col-span-5 h-full'>
      <div className='bg-gradient-to-br from-[#284862]/60 to-[#1a365d]/60 rounded-2xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl h-full flex flex-col'>
        <div className='mb-8'>
          <h3 className='text-xl font-bold text-white mb-2'>Conectemos</h3>
          <p className='text-gray-300 text-sm'>
            Encuéntrame en mis redes sociales.
          </p>
        </div>

        {/* Social links */}
        <div className='space-y-5 flex-1 flex flex-col'>
          {socialMedia.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className='flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300'>
                <i className={`${link.icon} text-white`}></i>
              </div>
              <div className='ml-4 flex-1'>
                <h4 className='text-white font-semibold group-hover:text-white transition-colors duration-300'>
                  {link.name}
                </h4>
              </div>
              <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Email directo */}
        {/* <div className='bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30'>
          <div className='flex items-center mb-3'>
            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3'>
              <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
            </div>
            <h4 className='text-white font-semibold'>Email Directo</h4>
          </div>
          <p className='text-gray-300 text-sm mb-3'>
            ¿Prefieres escribirme directamente?
          </p>
          <a
            href='mailto:anthonyrov@gmail.com'
            className='inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group'
          >
            anthonyrov@gmail.com
            <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default SocialLinks 