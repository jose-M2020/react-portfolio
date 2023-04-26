import React from 'react'

const Button = ({ text, href = null, className = '', ...props}) => {
  const btnStyles = `
    px-3 py-2 rounded-lg font-semibold text-white inline-block
    transition-all duration-500
    bg-gradient-to-tl from-[#03729c] via-[#1d677b] to-[#1adba2]
    bg-size-200 bg-pos-0 hover:bg-pos-100
    ${className}
  `;

  return (
    <>
      {href ? 
        <a href={href} className={btnStyles} target='_blank' rel="noreferrer" {...props}>
          {text}
        </a>
      :
        <button className={btnStyles} {...props}>
          {text}
        </button>
      }

    </>
    
  )
}

export default Button