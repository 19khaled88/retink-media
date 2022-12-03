import React from 'react'
import '../helpers/button.css'
import { auth,provider } from '../auth/auth'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
const Button = () => {
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
    <div className='contain'>
      <h4
        style={{
          padding: '0px',
          height: '41px',
          width: '401',
          fontSize: '24px',
          fontWeight: '700',
          color: '#7E1CFE',
          margin: '0px',
          textAlign: 'center',
        }}
      >
        Sign Up For The BETA to see more
      </h4>
      <div
        style={{
          height: '58px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <button
          style={{
            borderRadius: '10px',
            height: '58px',
            width: '288px',
            border: '1px solid #754DE8',
            fontSize: '20px',
          }}
        >
          Business Name
        </button>
        <button
          style={{
            borderRadius: '10px',
            height: '58px',
            width: '288px',
            border: '1px solid #754DE8',
            fontSize: '20px',
          }}
        >
          Email
        </button>
      </div>
      <button
        style={{
          borderRadius: '10px',
          height: '48px',
          width: '223px',
          border: '1px solid #754DE8',
          backgroundColor: '#7E1CFE',
          color: '#FFFFFF',
          fontSize: '20px',
        }}
      >
        Notify me
      </button>
      <button
      onClick={formHandler}
        style={{
          borderRadius: '10px',
          height: '48px',
          width: '340px',
          border: '1px solid #754DE8',
          fontSize: '20px',
          color: '#0085FF',
          cursor:'pointer'
        }}
      >
        Sign up as a freelance partner
      </button>
    </div>
  )
}

export default Button
