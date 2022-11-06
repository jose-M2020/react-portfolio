import React from 'react'
import CodeBlock from './CodeBlock'

const SkillsEditor = ({data}) => {
  return (
    <div>
        <CodeBlock keyName='frontEnd' data={data.front} next={true} />
        <CodeBlock keyName='backEnd' data={data.back} />
    </div>
  )
}

export default SkillsEditor