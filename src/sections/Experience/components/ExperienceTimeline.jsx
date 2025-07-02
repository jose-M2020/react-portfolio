import React from 'react';
import { motion } from 'framer-motion';
import { workExperiences } from '../../../data/data';

const ExperienceTimeline = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {workExperiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-4 max-md:bg-cyan-800/20 max-md:p-4 max-md:rounded-2xl">
              {/* Left column */}
              <div className="flex-shrink-0 max-md:flex gap-3">
                <div className="font-semibold text-lg text-slate-800 dark:text-white mb-1 max-md:text-sm max-md:text-slate-300">{exp.company}</div>
                <div className="text-sm text-slate-300">{exp.period}</div>
              </div>
              {/* Timeline */}
              <div className="w-[15%] hidden md:flex flex-col items-center relative">
                { (workExperiences.length - 1 === idx) ? (
                  <div className='text-[#1adba2]'>
                    <div className='mt-2 mb-7 w-3 h-3 aspect-square bg-[#1adba2] rounded-full outline outline-[10px] outline-[#1adba2]/20' />
                  </div>
                ) : (
                  <div className='text-[#1adba2] flex flex-col items-center h-full'>
                    <div className='mt-2 mb-7 w-3 h-3 aspect-square bg-[#1adba2] rounded-full outline outline-[10px] outline-[#1adba2]/20' />
                    <div className={`w-[1px] bg-[#1adba2] h-full`}></div>
                  </div>
                )}

              </div>
              {/* Right column */}
              <div className="flex-1">
                <div className="font-semibold text-base md:text-lg text-white mb-4 md:mb-2">{exp.title}</div>
                <div className="text-sm text-slate-300">
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="py-[1px] px-3 bg-cyan-800/20 rounded-xl shadow-sm"
                    >
                      <span className="text-[11px] text-slate-300 text-center leading-tight break-words font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline; 