import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CV from './components/CV'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/cv" element={<CV short />} />
      </Routes>
    </>
  )
}
