import { useState } from 'react'
import { skills } from '../../../data/data'

const filterOptions = [
  { key: 'all', label: 'Todos' },
  ...skills.map((cat, idx) => ({ key: idx, label: cat.shortTitle }))
];

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Agrupar todas las habilidades para el filtro "Todos"
  const allSkills = skills.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.title })));

  // Determinar qué habilidades mostrar según el filtro
  let displayedSkills = [];
  if (selectedFilter === 'all') {
    displayedSkills = allSkills;
  } else {
    displayedSkills = skills[selectedFilter].items.map(item => ({ ...item, category: skills[selectedFilter].title }));
  }

  return (
    <div>
      <h3 className='font-bold mb-4'>Habilidades</h3>
      {/* Menú de filtros */}
      <div className='flex gap-2 mb-6'>
        {filterOptions.map(opt => (
          <button
            key={opt.key}
            onClick={() => setSelectedFilter(opt.key)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors duration-150
              ${selectedFilter === opt.key
                ? 'bg-sky-700 text-white border-sky-700 shadow'
                : 'bg-cyan-800/20 text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-sky-900'}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {/* Lista de habilidades */}
      <ul className='flex flex-wrap gap-3'>
        {displayedSkills.map(({ name, icon, category }, i) => (
          <li key={i} className='flex flex-col items-center w-16 p-2 bg-cyan-800/20 rounded-xl shadow-sm hover:scale-[1.08] duration-200'>
            <img src={icon} className='w-7 h-7 object-contain mb-2' loading='lazy' alt={name} />
            <span className='text-[11px] text-slate-300 text-center leading-tight break-words font-medium'>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills