import React from 'react'
import './contact.css'
import pdf from '../../assets/micashatilcv.pdf';

const Contact = () => {
  return (
    <div className="myweb__contact" section_margin id="contact">
            <div className='myweb__contact-channel'>
                <a href='https://www.linkedin.com/in/mica-shatil/'>
                  <p> LinkedIn </p>
                </a>
                <a href='mailto:micashatil@gmail.com'>
                  <p> Email </p>
                </a>
                <a href='https://github.com/Mica-Shatil'>
                  <p> Github </p>
                </a>
                <a href={pdf} download>
                  <p> Full CV </p>
                </a>
            </div>
      </div> 
  )
}

export default Contact