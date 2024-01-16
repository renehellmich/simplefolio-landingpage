import './App.css'
import HeadSection from './assets/components/headsection/HeadSection'
import Nav from './assets/components/nav/Nav'
import ProjectSection from './assets/components/projectsection/ProjectSection'
import SkillSection from './assets/components/skillsection/skillsection'
import colorSwitch from './assets/color-switch-svgrepo-com.svg'

function App() {
  

  return (
    <>
      <main className='App'>
        <Nav
        img={colorSwitch}
        />
        <HeadSection/>
        <ProjectSection/>
        <SkillSection/>
      </main>
    </>
  )
}

export default App
