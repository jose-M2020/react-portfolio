import { useState } from 'react';
import { editors, editorTabs } from '../../data/data';
import Editor from './Editor';
import Tab from './Tab';

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState('perfil.json')

  return (
    <div className='mx-auto xl:text-lg shadow-sm shadow-blue-500 rounded-md 
                    backdrop-blur-lg bg-sky-800/10 overflow-hidden'>
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