
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PatientsPage from './pages/PatientsPage'
import Shifts from './pages/ShiftsPage'




function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>}></Route>
          <Route path="/about" element= {<AboutPage/>}></Route>
          <Route path="/patients" element= {<PatientsPage/>}></Route>
          <Route path="/shifts" element= {<Shifts/>}></Route>

          
  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



