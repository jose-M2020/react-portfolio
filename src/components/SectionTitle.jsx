import React from 'react'

const SectionTitle = ({ text, description, ...props }) => (
  <div className='mb-16 relative'>
    {/* Background decoration */}
    <div className='absolute inset-0 flex items-center justify-center opacity-5'>
      <div className='w-32 h-32 bg-gradient-to-r from-[#1adba2] to-[#08557f] rounded-full blur-3xl'></div>
    </div>
    
    {/* Main content */}
    <div className='relative z-10'>
      {/* Subtitle indicator */}
      {/* <div className='flex items-center justify-center mb-6'>
        <div className='w-12 h-0.5 bg-gradient-to-r from-transparent via-[#1adba2] to-transparent'></div>
        <span className='px-4 text-[#1adba2] text-sm font-medium tracking-widest uppercase'>
          Sección
        </span>
        <div className='w-12 h-0.5 bg-gradient-to-r from-transparent via-[#1adba2] to-transparent'></div>
      </div> */}

      {/* Main title */}
      <h2 className="
        text-4xl md:text-5xl
        font-bold text-center mb-4
        bg-gradient-to-r from-white via-gray-100 to-white
        bg-clip-text text-transparent
        tracking-wide leading-tight
        drop-shadow-sm
      ">
        {text}
      </h2>

      {/* Description */}
      <div className='max-w-3xl mx-auto'>
        <p className="
          text-gray-300
          text-center leading-relaxed
          font-light
          opacity-90 max-w-xl mx-auto
        ">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className='flex justify-center mt-8'>
        <div className='w-36 h-1 bg-gradient-to-r from-transparent from-20% via-[#1adba2] via-50% to-transparent to-80% rounded-full'></div>
      </div>
    </div>
  </div>
);

export default SectionTitle