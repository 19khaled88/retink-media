import React from 'react'
import { feature } from '../data/data'

const Feature = () => {
  return (
    <div style={{ display: 'grid' }}>
      {feature.map((element, index) => (
        <>
          <img src={element.image} alt="No Image" width="50px" height="50px" />
          <p>{element.name}</p>
        </>
      ))}
    </div>
  )
}

export default Feature
