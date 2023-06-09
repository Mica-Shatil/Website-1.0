import React from 'react'
import './project.css'

const Project = ({name, year, text, tools, link}) => {
  return (
    <div className='myweb__project-container__proj'>
            <div className='myweb__project-content'>
                <a href={link}>
                  <p className='myweb__project-name'> {name} </p>
                </a>
                <div className='myweb__project-tools'>
                    <p>{tools}</p>
                </div>
                <div className='myweb__project-dates'>
                    <label>{year}</label>
                </div>
                <br/>
                <div className='myweb__project-description'>
                    <p> {text} </p>
                </div>
            </div>
      </div> 
  )
}

export default Project
