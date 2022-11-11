import ProfileEditor from "./ProfileEditor"
import SkillsEditor from "./SkillsEditor"

const Editor = ({data}) => {

  // const iterate = (dta) => {
  //   if(typeof dta === 'object') {

  //     Object.keys(dta).map((key, index) => {
  //       return (
  //         <div>
  //           <span>{key} start</span> 
  //           {iterate(dta)}
  //           end
  //         </div>
  //       )
  //     })
  //   }
  //   if(typeof dta === 'string') {
  //     return(
  //       <span>{dta}</span>
  //     )
  //   }
  // }
  // iterate(data?.data);

  const typeEditors = {
    'perfil.json': <ProfileEditor data={data?.data} />,
    'habilidades.json': <SkillsEditor data={data?.data} />,
  }
  
  return (
    <div className='p-4 h-[25rem] overflow-y-auto overflow-x-hidden'>
      { typeEditors[data?.tabName] }
    </div>
  )
}

export default Editor