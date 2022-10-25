import { useState } from 'react'
import { skills } from '../utils/constants'

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('front');
  const skillsSelected = skills[selectedSkill];

  return (
    <div>
      <div className='bg-sky-800/50 flex w-full justify-between text-center cursor-pointer mb-3'>
        <span className='w-2/4 p-3 hover:bg-sky-800/95' onClick={() => setSelectedSkill('front')}>Front-end</span>
        <span className='w-2/4 p-3 hover:bg-sky-800/95' onClick={() => setSelectedSkill('back')}>Back-end</span>
      </div>
      <ul className='flex flex-wrap'>
        {skillsSelected.map(({ name, icon }, index) => (
            <li className='flex items-center w-2/4' key={index}>
                <img src={icon} className="w-9 mr-3"/>
                <span>{name}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills