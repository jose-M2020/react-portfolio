import { useState } from 'react';
import { editors, editorTabs } from '../../data/data';
import Editor from './Editor';
import Tab from './Tab';

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState('perfil.json')

  return (
    <div className='xl:text-lg w-4/5 shadow-sm shadow-blue-500 rounded-md 
                    backdrop-blur-lg bg-sky-800/10 overflow-hidden 
                    transform-x hover:rotate-0 duration-300 ease-[[0.1, 0.25, 0.3, 1]]'>
        <div className=' bg-sky-800/20 flex shadow-sm shadow-[#2d455f] h-10'>
            {editorTabs.map((tab, index) => (
              <Tab key={index} text={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
            ))}
        </div>
        <Editor data={editors.find(item => item.tabName === activeTab)} />
    </div>
  )
}

export default CodeEditor