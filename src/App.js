import './App.css'
import Button from './components/Button'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Vidoe from './components/Vidoe'
import LandingPage from './components/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Welcome from './components/Welcome'
function App() {
  return (
    <div>
      {/* <div style={{ paddingLeft: '121px', paddingRight: '121px' }}>
      <Header />
      <Vidoe />
      <Feature />
      <Gallery />
      <Button />
      <Routes>
        <Route path='/welcome' element={<Welcome />}/>
      </Routes>
      </div>
      <Footer /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/welcome' element={<Welcome />}/>
      </Routes>
    </div>
  )
}

export default App
