import { useState } from 'react'
import SocialMedia from '../SocialMedia';
import useSidebarEffects from './hooks/useSidebarEffects';
import useActiveSection from './hooks/useActiveSection';
import Profile from './Profile';
import Menu from './Menu';

const Sidebar = ({isVisible, toggleOpen}) => {
  const [activeSection, setActiveSection] = useState('home');

  useSidebarEffects(isVisible, toggleOpen);
  useActiveSection(isVisible, setActiveSection);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('sidebar-overlay')) {
      toggleOpen(false);
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className='fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[99] sidebar-overlay'
          onClick={handleClickOutside}
        />
      )}
      <div className={`bg-[#1d3452] w-full sm:w-2/3 md:w-[320px] lg:w-[330px] text-white
        fixed top-0 transition-[left] duration-300
        flex flex-col h-screen z-[100] ${
          isVisible ? 'left-0' : '-left-full'
        }`}
      >
        <Profile />
        <div className='flex-grow px-7 pb-8 mt-8 flex flex-col justify-between h-full overflow-y-auto'>
          <Menu
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            toggleOpen={toggleOpen}
          />
          <div className='pt-6 border-t border-gray-600'>
            <p className='text-xs text-gray-400 mb-4'>Sígueme en redes</p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar