import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CV from './pages/cv/CV'
import SkillsPage from './pages/skills/SkillsPage'
import Resume from './pages/resume/Resume'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}
