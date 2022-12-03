import React from 'react'
import { gallery } from '../data/data'
const Gallery = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <div
        style={{
          textAlign: 'center',
          width: '795px',
          margin: 'auto',
          height: '126px',
        }}
      >
        <h2 style={{ color: '#7E1CFE', margin: '0px' }}>
          Transform your Creation Process
        </h2>
        <p style={{ color: '#323232' }}>
          With a new approach toordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </p>
      </div>
      <div
        style={{
          textAlign: 'center',
          width: '795px',
          margin: 'auto',
          height: '122px',
          paddingBottom: '25px',
        }}
      >
        <h2 style={{ color: '#7E1CFE', margin: '0px' }}>
          Activate your business growth with RetinkContent.
        </h2>
        <p style={{ color: '#323232' }}>
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gridRowGap: '20px',
          gridColumnGap: '20px',
        }}
      >
        {gallery.map((element, index) => (
          <div style={{ width: '300px', height: '250px' }}>
            <img
              src={element.image}
              alt="No image"
              width="100%"
              height="150px"
            />
            <h2
              style={{
                fontSize: '14px',
                color: '#393939',
                paddingLeft: '10px',
              }}
            >
              {element.title}
            </h2>
            <p style={{ fontSize: '14px', paddingLeft: '10px' }}>
              {element.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
