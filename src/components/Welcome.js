import React from 'react'
import {useNavigate} from 'react-router-dom'
const Welcome = () => {
    const navigate = useNavigate()
    const clickHandler=()=>{
        navigate('/')
    }
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between', width:'90%',margin:'auto'}}>
        <p><img src='/images/welcome/logo.png' alt='No Image' /></p>
        <ul style={{display:'flex',flexDirection:'row', gap:'15px'}}>
            <li onClick={clickHandler} style={{listStyle:'none',cursor:'pointer'}}>Home</li>
            <li style={{listStyle:'none',cursor:'pointer'}}>About</li>
            <li style={{listStyle:'none',cursor:'pointer'}}>Contact</li>
        </ul>
      </div>
      <div style={{display:'flex',flexDirection:'row',width:'90%',margin:'auto',justifyContent:'space-between',alignItems:'center'}}>
        <div >
            <h1 style={{color:'#D51D46'}}>Welcome you to this world!</h1>
            <div style={{color:'#6717C0',fontSize:'50px',fontWeight:'bold'}}>
                <p>You are just One</p>
                <p>Content away!</p>
            </div>
            <p style={{color:'gray'}}>Boost your business growth by driving sales with unlimited customized content created at less cost.</p>
            <p style={{color:'#7F17C4'}}>We Offer 30 Mins Free Consultation and One Free Content!</p>
            <button style={{backgroundColor:'#6717C0',border:'none', padding:'10px',borderRadius:'8px',color:'white'}}>Start for Free Now</button>
        </div>
        <div>
            <img src='/images/welcome/welcome.png' alt='No Image' />
        </div>
      </div>
    </div>
  )
}

export default Welcome
