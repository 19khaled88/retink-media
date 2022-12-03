import React from 'react'

const Button = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        paddingBottom: '100px',
      }}
    >
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
        style={{
          borderRadius: '10px',
          height: '48px',
          width: '340px',
          border: '1px solid #754DE8',
          fontSize: '20px',
          color: '#0085FF',
        }}
      >
        Sign up as a freelance partner
      </button>
    </div>
  )
}

export default Button
