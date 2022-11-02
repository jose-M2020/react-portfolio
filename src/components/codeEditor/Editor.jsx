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
    'perfil.json': <ProfileEditor data={data.data} />,
    'habilidades.json': <SkillsEditor data={data.data} />,
  }
  
  return (
    <div className='h-[60vh] overflow-y-auto overflow-x-hidden'>
      {/* <pre>{JSON.stringify(data?.data, null, 2)}</pre> */}
      { typeEditors[data?.tabName] }
    </div>
  )
}

export default Editor