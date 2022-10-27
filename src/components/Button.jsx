import React from 'react'

const btnStyles = `
    px-3 py-2 rounded-lg font-semibold text-white
    transition-all duration-500
    bg-gradient-to-tl from-[#03729c] via-[#1d677b] to-[#1adba2]
    bg-size-200 bg-pos-0 hover:bg-pos-100
`;

const Button = ({ text, href = null, ...props}) => {
  return (
    <div>
      {href ? 
        <a href={href} className={btnStyles} target='_blank' {...props}>
          {text}
        </a>
      :
        <button className={btnStyles} {...props}>
          {text}
        </button>
      }

    </div>
    
  )
}

export default Button