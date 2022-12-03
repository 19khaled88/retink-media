import React from 'react'

const Footer = () => {
  return (
    <div>
      <div></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <span>Copy &copy; 2021 Retink</span>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          <ul>Privacy Policy</ul>
          <ul>Terms of Service</ul>
        </ul>
      </div>
    </div>
  )
}

export default Footer
