import React from 'react'
import { feature } from '../data/data'
import '../helpers/design.css'
const Feature = () => {
  return (
    <div
      className=""
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gridRowGap: '20px',
        gridColumnGap: '20px',
        paddingBottom: '100px',
      }}
    >
      {feature.map((element, index) => (
        <div
          className=""
          style={{
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '270px',
            height: '280px',
            margin: '10px',
            borderRadius: '8px',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
          }}
        >
          <img
            src={element.image}
            alt="No Image"
            width="70px"
            height="70px"
            style={{ paddingTop: '20px' }}
          />
          <h4
            style={{
              textAlign: 'center',
              padding: '4px',
              margin: '0px',
              height: '40px',
            }}
          >
            {element.name}
          </h4>
          <p style={{ textAlign: 'center' }}>{element.info}</p>
        </div>
      ))}
    </div>
  )
}

export default Feature
