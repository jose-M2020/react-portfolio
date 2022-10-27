import React from 'react'

const Input = ({ label, name, type = "text", className, ...rest }) => {
  return (
    <div className='relative z-0 w-full mb-8'>
      <input id={name}
             type={type}
             placeholder=' '
             className="block px-2.5 pb-2.5 pt-4 w-full 
                        text-sm text-gray-900 bg-transparent 
                        rounded-lg
                        shadow-sm shadow-teal-300/60
                        dark:text-white dark:border-teal-300
                        focus:shadow-teal-300 focus:outline-none focus:ring-0 peer"
             {...rest} />
      <label htmlFor={name} 
             className="text-sm text-gray-500
                        absolute top-4 left-2.5
                        duration-300
                        pointer-events-none
                        transform -translate-y-4 scale-75 origin-[0] z-10 
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-teal-300">
        {label}
      </label>
    </div>
  )
}

export default Input