import React from 'react'

const Vidoe = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '30px',
      }}
    >
      <h1
        style={{
          textTransform: 'uppercase',
          textAlign: 'center',
          color: '#7E1CFE',
        }}
      >
        Explainer Video
      </h1>
      <video width="750" height="500" controls style={{ margin: 'auto' }}>
        <source src="..Videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Vidoe
