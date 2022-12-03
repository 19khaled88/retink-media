import React, { useState } from 'react'
import { useRef } from 'react'
import { auth,provider } from '../auth/auth'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import '../helpers/header.css'
const Header = () => {
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const nameRef = useRef()
  const emailRef = useRef()
  const navigate = useNavigate()
  const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
       if(result.user.email !== null){
          navigate('/welcome')
       }
    }).catch((error)=>{
        console.log(error)
    })
  }

   const formHandler=()=>{
      signInWithGoogle()
   }
 
  return (
    <div className='headerContainer'>
      <div className='headerLogo'>
        <img src="/images/logo.png"/>
        <p>
          Re
          <span style={{ fontWeight: 'bold' }}>tink</span>
        </p>
      </div>
      <div>
        <h1>
          Get Advanced AI
        </h1>
        <h1>
          <span>+ Expert Created</span>{' '}
          <span>Logos</span>
        </h1>
      </div>
      <div >
        <p>
          Boost your sales{' '}
          <span>
            10x faster
          </span>{' '}
          with content customized by our unique partnership of{' '}
          <span>
            human creativity and AI optimization
          </span>
        </p>
      </div>
      <div>
        <h2>Sign Up For The BETA!</h2>
        <span>
          <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Business Name" />{' '}
          <label>Would like a beta invite sent to</label>{' '}
          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="@email address" />
          <label>When It's ready!</label>
        </span>
        <div >
          <button>
            Notify me
          </button>
          <button onClick={formHandler}>
            Sign up as freelance partner
          </button>
        </div>
      </div>
      <div>
        <img src="/images/io-image.png" alt="No image" height="500px" />
      </div>
    </div>
  )
}

export default Header
