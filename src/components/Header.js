import React from 'react'

const Header = () => {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: '60px',
        }}
      >
        <img src="/images/logo.png" width="20px" height="18px" />
        <p
          style={{
            padding: '0px',
            margin: '0px',
            height: '100%',
            fontSize: '22px',
          }}
        >
          Re
          <span style={{ fontWeight: 'bold' }}>tink</span>
        </p>
      </div>
      <div
        style={{
          paddingTop: '50px',
          width: '342px',

          fontWeight: 'bold',
          fontSize: '15px',
        }}
      >
        <h1 style={{ padding: '0px', margin: '0px', color: '#323232' }}>
          Get Advanced AI
        </h1>
        <h1 style={{ padding: '0px', margin: '0px' }}>
          <span style={{ color: '#323232' }}>+ Expert Created</span>{' '}
          <span style={{ color: '#7E1CFE' }}>Logos</span>
        </h1>
      </div>
      <div style={{ width: '600px' }}>
        <p style={{ color: '#000000' }}>
          Boost your sales{' '}
          <span style={{ color: '#7E1CFE', fontWeight: 'bold' }}>
            10x faster
          </span>{' '}
          with content customized by our unique partnership of{' '}
          <span style={{ color: '#7E1CFE', fontWeight: 'bold' }}>
            human creativity and AI optimization
          </span>
        </p>
      </div>
      <div>
        <h2 style={{ color: '#7E1CFE' }}>Sign Up For The BETA!</h2>
        <form>
          <input type="text" name="name" placeholder="Business Name" />{' '}
          <label>Would like a beta invite sent to</label>{' '}
          <input type="email" name="email" placeholder="@email address" />
          <label>When It's ready!</label>
        </form>
        <div style={{ paddingTop: '20px' }}>
          <button
            style={{
              backgroundColor: '#7E1CFE',
              border: 'none',
              padding: '8px 25px',
              borderRadius: '12px',
              marginRight: '25px',
              color: '#FFFFFF',
            }}
          >
            Notify me
          </button>
          <button
            style={{
              border: '1px solid #754DE8',
              padding: '8px 25px',
              borderRadius: '12px',
              color: '#0085FF',
            }}
          >
            Sign up as freelance partner
          </button>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '0px',
          right: '0px',
          paddingTop: '60px',
          paddingRight: '',
        }}
      >
        <img src="/images/io-image.png" alt="No image" height="500px" />
      </div>
    </div>
  )
}

export default Header
