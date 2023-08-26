
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PatientPage from './Pages/PatientPage'
import ShiftsPage from './pages/ShiftsPage'





function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<HomePage />}></Route>
          <Route path= "/about" element={<AboutPage />}></Route>
          <Route path= "/patient" element={<PatientPage />}></Route>
          <Route path= "/shift" element={<ShiftsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



