import { socialMedia } from "../data/data";

const SocialMedia = () => (
  <div className='flex gap-3'>
    {socialMedia.map((item, index) => (
      <a className='text-gray-400 hover:text-[#1adba2] hover:bg-[#1adba2]/10
                      w-10 h-10
                      border border-gray-600 rounded-lg
                      flex items-center justify-center
                      transition-all duration-200' 
        href={ item.link }
        key={index}
        target='_blank'
        rel="noreferrer"
        title={item.name}>
        <i className={ item.icon }></i>
      </a>
    ))}
  </div>
);

export default SocialMedia;