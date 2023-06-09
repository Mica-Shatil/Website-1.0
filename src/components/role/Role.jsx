import React from 'react'
import './role.css'

const Role = ({company, title, start_date, end_date, text, image, img_alt, tools}) => {
  return (
    <div className='myweb__role-container__role'>
            <img className="myweb__role-img" src={image} alt = {img_alt} />
            <div className='myweb__role-content'>
                <label className='myweb__role-company'> {company} </label> 
                <label className='myweb__role-title'> {title} </label>
                <div className='myweb__role-tools'>
                    <p>{tools}</p>
                </div>
                <div className='myweb__role-dates'>
                    <label> {start_date} </label> - <label> {end_date} </label>
                </div>
                <br/>
                <div className='myweb__role-description'>
                    <p>{text}</p>
                </div>
            </div>
      </div>
  )
}

export default Role