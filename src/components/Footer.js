import React from 'react'
import '../helpers/footer.css'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='topFooter'>
        <div className='topInnerFooter'>
          <div>
            <img src="/images/logo.png" alt='No Image' />
            <p>
              Re
              <span style={{ fontWeight: 'bold' }}>tink</span>
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <ul>
              <li>Product by Retink Media UG</li>
              <li>Bonn, Germany</li>
            </ul>
            <ul>
              <li>Get Early Acess</li>
              <li>Provide Feedback</li>
            </ul>
          </div>
        </div>
        <div>
          <p>Connect with Us</p>
          <div>
            <img src='/images/icon/facebook.png' alt="No Image"  width="30px" height="30px" />
            <img src='/images/icon/twitter.png' alt="No Image"  width="30px" height="30px"/>
            <img src='/images/icon/instagram.png' alt="No Image"  width="30px" height="30px"/>
            <img src='/images/icon/linkedin.png' alt="No Image"  width="30px" height="30px"/>
            <img src='/images/icon/youtube.png' alt="No Image"  width="30px" height="30px"/>
            <img src='/images/icon/pinterest.png' alt="No Image"  width="30px" height="30px"/>
          </div>
        </div>
      </div>
      <div className='bottomFooter'>
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
