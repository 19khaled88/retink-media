import React from 'react'
import Button from './Button'
import Feature from './Feature'
import Footer from './Footer'
import Gallery from './Gallery'
import Header from './Header'
import Vidoe from './Vidoe'
const LandingPage = () => {
  return (
    <div>
       <div style={{ paddingLeft: '121px', paddingRight: '121px' }}>
      <Header />
      <Vidoe />
      <Feature />
      <Gallery />
      <Button />
      
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
