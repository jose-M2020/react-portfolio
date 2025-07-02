import React from 'react';

const SkillCard = ({ title, description, icon, iconBg, iconColor, skills }) => {
  return (
    <div
      className="group relative flex flex-col h-full p-6 bg-gray-950 rounded-xl border from-green-500 to-emerald-500 border-green-500/30 shadow-sm hover:shadow-md transition-all duration-300"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div
        className="bg-cyan-700/20 text-white flex items-center justify-center w-14 h-14 rounded-lg mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        <i className={icon} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-5 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100 border-gray-800">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-1.5 group">
            <div
              className="flex items-center justify-center h-8 w-8 rounded-full"
              style={{ backgroundColor: 'rgba(51, 153, 51, 0.082)' }}
            >
              <img src={skill.icon} alt={skill.name} className="h-5 w-5" loading='lazy' />
            </div>
            <span className="text-xs font-medium text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard; 