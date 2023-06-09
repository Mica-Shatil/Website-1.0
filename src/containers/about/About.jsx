import React from 'react'
import './about.css'
import Feature from '../../components/feature/Feature';
import skiing from '../../assets/skiing.jpg'
import play2 from '../../assets/play2.PNG'
import canoetrip1 from '../../assets/canoe1.JPG'

const About = () => {
  return (
    <div className="myweb__about section_margin" id="about"> {/* instead of gpt3__whatgpt3 section__margin" id="wgpt3 */}
      <div className="myweb__about-heading">
        <h1 className="gradient__text">Get To Know Me</h1>
      </div>
      <div className="myweb__about-feature">
        <p>I am a studying computer science at the University of Waterloo and business at Wilfred Laurier University. I chose this double degree program because
            I love how both fields combine logic with creativity. On top of that, I just love a good challenge! I enjoy exercises in problem solving, particularly when the
            problem has meaning and impact. Furthermore, I am a creative individual and a fast learner. Continuous learning and growth is something I am looking to be
            supported in by my future employers. I have strong verbal and written communication skills, and am able to utilize them to connect with vast and diverse audiences. 
            Thinking about how to make processes or structures more efficient and productive excites me. I have found that I am much more motivated when my work is 
            making a positive impact on others. I see my co-ops as an opportunity to try vast roles at different companies to gain a broader undertstanding of the 
            competitive landscape and how companies operate across functional units and industries.</p>
      </div>
      <div className="myweb__about-heading">
        <h2 className="gradient__text">Hobbies</h2>
      </div>
      <div className="myweb__about-container">
        <Feature title="Canoe Tripping" text="I fell in love with canoe tripping while attending a summer camp in my youth. The canoe trip leaders tought
                                              me valuable lessons on working hard, carrying my weight, helping others, and problem solving under high pressure with limited 
                                              resources. I returned to the camp as a canoe trip leader. In this rols, I was able to have a positive impact on the campers,
                                              wile also discovering much about myself and how to work under pressure when people are depending on you." />
        <Feature title="Skiing" text="Another one of my hobbies is skiing. If you can't tell by now, I love the outdoors! Skiing as another way I get to see the natural wonders
                                      of the world. The sport of skiing is loads of fun, but my favourite part is to just get away from the bussy city,
                                      and take in the views you get fom the top of the slopes. There's nothing quite like getting above the clouds at the top of a 
                                      mountain, looking around at all of the other peaks in sight, and then looking down at the epic mountain I'm about to ski!" />
        <Feature title="Theatre" text="I discovered acting in grade four at my elementary school, Lester B. Pearson, School for The Arts. I instantly fell in love with performing!
                                        To be a part of the process of blocking, rehearsing, and then performing a show is truly wonderful. To work for months on end towards a goal with the
                                        highly motivated cast and crew, and see a full audience to reqward you for your efforts fills me with joy. I am continuing to explore theatre in University
                                        as an actor in the plays run by EngPlay (an engineering society club)!
                                        " />
      </div>
      <div className="myweb__about-container">
        <div className="myweb__about-image">
          <img src={ canoetrip1 } alt="headshot" />
          <img src={ skiing } alt="headshot" />
          <img src={ play2 } alt="headshot" />
        </div>
      </div>
    </div>
  )
}

export default About