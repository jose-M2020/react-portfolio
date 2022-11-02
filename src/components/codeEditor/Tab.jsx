import { useState } from 'react'

const Tab = ({ text, activeTab, setActiveTab }) => {
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(false)
    
    if(activeTab === text){
      setActiveTab(null);
    }
  }

  return (
    <div  className={`group text-white flex items-center
                      hover:cursor-pointer hover:bg-sky-800/60 duration-200 
                      ${activeTab === text ? 'bg-sky-800/50' : 'bg-sky-800/80'}
                      ${visible ? 'block' : 'hidden'}
                    `}
    >
      <span className='block p-2'
            onClick={() => setActiveTab(text)}>
        {text}
      </span>
      <i className="fa-solid fa-xmark opacity-0 group-hover:opacity-100 pr-2"
         onClick={ handleClick }></i>
    </div>
  )
}

export default Tab