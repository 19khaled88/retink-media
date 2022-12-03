import './App.css'
import Button from './components/Button'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Vidoe from './components/Vidoe'

function App() {
  return (
    <div style={{ paddingLeft: '121px', paddingRight: '121px' }}>
      <Header />
      <Vidoe />
      <Feature />
      <Gallery />
      <Button />
      <Footer />
    </div>
  )
}

export default App
