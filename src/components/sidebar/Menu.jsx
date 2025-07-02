import { links } from "../../data/data";

const Menu = ({ activeSection, setActiveSection, toggleOpen }) => (
  <div className='flex flex-col gap-2 mb-8'>
    {links.map(({ id, name, url, icon }, index) => (
      <a
        href={url}
        className={`px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-3 text-sm font-medium ${
          activeSection === id 
            ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400' 
            : 'text-gray-300 hover:bg-blue-500/20 hover:text-white'
        }`}
        onClick={() => {
          setActiveSection(id);
          toggleOpen(false);
        }}
        key={index}
      >
        <i className={`${icon} w-4 text-center`} />
        <span>{name}</span>
      </a>
    ))}
  </div>
);

export default Menu; 