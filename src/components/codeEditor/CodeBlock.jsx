import React from 'react'
import { getType } from '../../utils/utils'

const CodeBlock = ({keyName, data, next}) => {
  return (
    <div className='group'>
      {getType(data) === 'object' ?
        <>
          <span className='border-b-2 border-transparent group-hover:border-[#1adba2] duration-200'>{keyName && keyName + ': '}</span><span className='text-[#1adba2]'>{'{'}</span>
          {Object.keys(data).map((key, index, {length}) => (
              <div className='py-1 border-l border-transparent group-hover:border-[#1adba2] duration-200' key={index}>
                  <div className='ml-5'>
                    <span className='text-[#a0dbfc]'>{key}: </span><span className='text-[#efb097]'>"{data[key]}"</span>
                    { !(length - 1 === index) && <span className='text-[#1adba2]'>{','}</span>}
                  </div>
              </div>
          ))}
          <span className='text-[#1adba2]'>{next ? '},' : '}'}</span>
        </>
      :
        <>
          <span className='border-b-2 border-transparent group-hover:border-[#1adba2] duration-200'>{keyName && keyName + ': '}</span><span className='text-[#1adba2]'>{'['}</span>
          {data.map((item, index, {length}) => (
            <div className='py-1 border-l border-transparent group-hover:border-[#1adba2] duration-200' key={index}>
              <div className='ml-5'>
                <span className='text-[#efb097]'>"{item?.name}"</span>
                { !(length - 1 === index) && <span className='text-[#1adba2]'>{','}</span>}
              </div>
            </div>
          ))}
          <span className='text-[#1adba2]'>{next ? '],' : ']'}</span>
        </>
      }
    </div>
  )
}

export default CodeBlock