import './App.css'
import HeadSection from './assets/components/headsection/HeadSection'
import Nav from './assets/components/nav/Nav'
import ProjectSection from './assets/components/projectsection/ProjectSection'
import SkillSection from './assets/components/skillsection/skillsection'

function App() {
  

  return (
    <>
      <main className='App'>
        <Nav/>
        <HeadSection/>
        <ProjectSection/>
        <SkillSection/>
      </main>
    </>
  )
}

export default App
