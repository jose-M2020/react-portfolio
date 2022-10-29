import { useState } from 'react'
import { skills } from '../utils/constants'

const setTabClass = (selectedSkill, typeSkill) => (
  `w-2/4 p-3 hover:bg-sky-800/60 duration-200 ${selectedSkill === typeSkill && 'bg-sky-800/95'}`
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('front');
  const skillsSelected = skills[selectedSkill];
  
  return (
    <>
      <h3 className='font-bold mb-4'>Habilidades</h3>
      <div className='flex w-full justify-between text-center cursor-pointer mb-5 shadow-sm shadow-blue-500 rounded-md overflow-hidden'>
        <span className={setTabClass(selectedSkill, 'front')} onClick={() => setSelectedSkill('front')}>Front-end</span>
        <span className={setTabClass(selectedSkill, 'back')} onClick={() => setSelectedSkill('back')}>Back-end</span>
      </div>
      <ul className='flex flex-wrap'>
        {skillsSelected.map(({ name, icon }, index) => (
            <li className='flex items-center w-2/4 py-1' key={index}>
                <img src={icon} className="w-9 mr-3" loading='lazy'/>
                <span>{name}</span>
            </li>
        ))}
      </ul>
    </>
  )
}

export default Skills