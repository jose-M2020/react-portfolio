import { Parallax, SectionTitle } from '../../components'
import Skills from './components/Skills'
import AboutDescription from './components/AboutDescription'

const About = () => {
  return (
    <section className="relative pt-32 pb-24" id='about' data-section>
      <div className='px-6 max-w-screen-xl mx-auto' >
        <SectionTitle
          text="Sobre mí"
          description="Un resumen de quién soy, qué hago y con qué tecnologías trabajo."
        />
        <Parallax>
          <div className='flex flex-col md:flex-row gap-12 text-white'>
            <div className='w-full md:w-1/2'>
              <AboutDescription />
            </div>
            <div className='w-full md:w-1/2'>
              <Skills />
              {/* <CodeEditor /> */}
            </div>
          </div>
        </Parallax>
      </div>

      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            description={category.description}
            icon={category.icon}
            skills={category.items}
          />
        ))}
      </div> */}
    </section>
  )
}

export default About