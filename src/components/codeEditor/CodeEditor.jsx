import { useState } from 'react';
import Editor from './Editor';
import Tab from './Tab';

// import { skills } from "../../utils/constants"

const editors = [
    {
        id: 1,
        tabName: 'perfil.json',
        data: {
            nombre: 'Jose Manuel Silva',
            profesion: 'Desarrollador Full-stack',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ad a rerum, possimus esse nobis earum dolores aliquid quo quidem laudantium ipsum magnam. Nesciunt excepturi rerum ipsum eius reprehenderit.'
        }
    },
    {
        id: 2,
        tabName: 'habilidades.json',
        data: {
            frontEnd: [
                'HTML',
                'CSS',
                'JavaScript',
                'HTML',
                'CSS',
                'JavaScript',
                'HTML',
                'CSS',
                'JavaScript',
                'HTML',
                'CSS',
                'JavaScript',
                'HTML',
                'CSS',
                'JavaScript',
                'Sass'
            ],
            backEnd: [
                'PHP',
                'NodeJS',
                'Laravel'
            ]
        }
    }
] 


const tabs = ['perfil.json', 'habilidades.json', 'estudios.json']

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState('perfil.json')

  return (
    <div className='w-4/5 shadow-sm shadow-blue-500 rounded-md backdrop-blur-lg bg-sky-800/10 overflow-hidden transform-x hover:rotate-0 duration-300 ease-[[0.1, 0.25, 0.3, 1]]'>
        <div className=' bg-sky-800/20 flex shadow-sm shadow-[#2d455f] h-10'>
            {tabs.map((tab, index) => (
              <Tab key={index} text={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
            ))}
        </div>
        <Editor data={editors.find(item => item.tabName === activeTab)} />
    </div>
  )
}

export default CodeEditor