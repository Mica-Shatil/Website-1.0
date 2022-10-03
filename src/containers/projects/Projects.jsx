import React from 'react'
import './projects.css'
import Project from '../../components/project/Project';


const Projects = () => {
  return (
    <div className="myweb__projects" section_margin id="projects">
      <div className="myweb__projects-heading">
        <h1 className="gradient__text">Projects</h1>
      </div>
      <div className="myweb__projects-container">
        <Project name="Hands Free" year="2020" 
              text="Created an app that enables users to control all mouse functions with their face, working with four other students.
              Won First Place Overall out of 103 project submissions at Hack Western 7.
              Wrote and produced the video presentation required by Hack Western." 
              tools="Python-(Pyautogui, numpy)"
              link="https://devpost.com/software/hands-free"/>
        <Project name="HelloWorld" year="2021" 
              text="HelloWorld is a real-time translator that allowing quick and easy user-to-user communication in 50+ languages.
              The program runs on your computer taking what would be output from your speakers, and runs it through a translator program before outputting the audio." 
              tools="Python-(googletrans)"
              link="https://devpost.com/software/helloworld-zsdvjp"/>
      
        <Project name="Spur" year="2021" 
              text="Created the frontend of an app to promote local businesses through QR codes using Flutter and Dart while at a hackathon against the top 200 hackers in North America." 
              tools="Flutter, Dart"
              link="https://devpost.com/software/spur-4x6fpv"/>
      </div>
    </div>
  )
}

export default Projects