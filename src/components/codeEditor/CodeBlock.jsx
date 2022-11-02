import React from 'react'

const CodeBlock = ({key, data}) => {
    console.log(data)
  return (
    (typeof data === 'object' ?
      <div className='group'>
        {key && key + ': '} object
        {Object.keys(data).map((k, index) => (
            <div className='py-1 group-hover:border-l-2 group-hover:border-teal-400' key={index}>
                <div className='ml-5'>
                  <span className='text-[#a0dbfc]'>{k}: </span><span className='text-[#efb097]'>"{data[k]}"</span>
                </div>
            </div>
        ))}
        object
      </div>
    :
      <>
        {key}: [
        {data.map((k, index) => (
        <span key={index}>{k}</span>
        ))}
        ]
      </>
    )
  )
}

export default CodeBlock