import React from "react";
import "./projects.css";
import Project from "../../components/project/Project";

const Projects = () => {
  return (
    <div className="myweb__projects" section_margin id="projects">
      <div className="myweb__projects-heading">
        <h1 className="gradient__text">Projects</h1>
      </div>
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6 col-lg-4">
          <Project
            name="Hands Free"
            year="2020"
            text="Created an app that enables users to control all mouse functions with their face, working with four other students. Won First Place Overall out of 103 project submissions at Hack Western 7. Wrote and produced the video presentation required by Hack Western."
            tools="Python-(Pyautogui, numpy)"
            link="https://devpost.com/software/hands-free"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Project
            name="HelloWorld"
            year="2021"
            text="HelloWorld is a real-time translator that allowing quick and easy user-to-user communication in 50+ languages. The program runs on your computer taking what would be output from your speakers, and runs it through a translator program before outputting the audio."
            tools="Python-(googletrans)"
            link="https://devpost.com/software/helloworld-zsdvjp"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Project
            name="Spur"
            year="2021"
            text="Created the frontend of an app to promote local businesses through QR codes using Flutter and Dart while at a hackathon against the top 200 hackers in North America."
            tools="Flutter, Dart"
            link="https://devpost.com/software/spur-4x6fpv"
          />
        </div>
        <div className="d-none d-lg-block col-lg-4"></div>
        <div className="col-12 col-md-6 col-lg-4">
          <Project
            name="Spotify Shuffler"
            year="2023"
            text="I was fed up with spotify shuffle failing to randomly shuffle my music, so I decided to create a script
                    to randomize my playlists on a daily basis."
            tools="Python-(flask, threading, pyautogui)"
            link="https://github.com/Mica-Shatil/Spotify-Playlisy-Shuffler"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
