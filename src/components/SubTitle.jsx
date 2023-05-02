import React from 'react'

const SubTitle = ({text, ...props}) => (
  <div className="text-[4rem] md:text-[6rem] font-extrabold mb-9 text-center" {...props}>
    <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#08557f] to-transparent">
      { text }
    </h2>
  </div>
);

export default SubTitle