import React from 'react'
import './experience.css'
import Role from '../../components/role/Role';
import manulife_logo from '../../assets/manulife.png'
import atolio_logo from '../../assets/atolio.png'
import neuphysio_logo from '../../assets/neuphysio.png'
import dc180_logo from '../../assets/dc180.png'
import unitedWay_logo from '../../assets/unitedWay.png'
import ja_logo from '../../assets/JA.png'

const Experience = () => {
  return (
    <div className="myweb__experience" section_margin id="experience">
      <div className="myweb__experience-heading">
        <h1 className="gradient__text">Experience</h1>
      </div>
      <div className="myweb__experience-container">
        <Role company="Manulife" title = "Data Scientist" 
              text="Developed distinct customer segments to target with digital marketing using k-means modelling.
                Worked with Neo4J and Cypher to utilize a graph database of projects across Manulife.
                Completed Azure DP-100 training course." 
              tools="SQL | Python-(Pandas, Scikit-learn) | Neo4J | Cypher | Google Cloud Platform | Azure | Google Data Studio"
              image={manulife_logo} img_alt="man" start_date="01.2022"
              end_date="05.2022"/>
        <Role company="Atolio" title = "Client Development" 
              text="Built a pre sales pipeline through cold outreach to CXOs of mid market and enterprise companies.
                Created a propensity to buy model, and integrated the model into Atolio's Salesforce instance to enhance the client outreach process." 
              tools="Python-(Pandas, simple_salesforce) | Salesforce"
                image={atolio_logo} img_alt="atolio" start_date="05.2021"
              end_date="09.2021"/>
        <Role company="180 Degrees Consulting" title = "Consultant" 
              text="Volunteered as a consultant aiding non-profit organizations. 
              Created a financially sustainable business model and new marketing campaign for a struggling non-profit. 
              Worked with a new non-profit on market expansion planning and partnership strategies." 
              tools="Microsoft Office 365 | Google Suit" image={dc180_logo} img_alt="temp" start_date="01.2021"
              end_date="09.2021"/>
        <Role company="Neuphysio" title = "Program Developer" 
              text="Designed, wrote, and implemented a Python program to convert accounting data from clinic
              software to accounting software, saving Neuphysio hours of data entry each month." 
              tools="Python-(Pandas, Numpy) | Microsoft Excel | Clinic Master | Sage50" image={neuphysio_logo} img_alt="temp" start_date="05.2020"
              end_date="06.2020"/>
        <Role company="United Way" title = "Canada Life Youth United Advisory Council Member" 
              text="Marketed and awarded several grants of up to $2000 to youth in the Middlesex area. The grants were to fund youth run
              community initiatives that better the Middlesex population." 
              image={unitedWay_logo} img_alt="temp" start_date="09.2019"
              end_date="05.2020"/>
        <Role company="Junior Achievement" title = "Company VP of Marketing and Sales" 
              text="Designed product packaging, product displays, and presentation boards while running
              Facebook and Instagram pages for the company. 
              Trained company members on how to make successful sales, organized sales
              events in the community, and motivated company members to reach their sales volume goals." 
              image={ja_logo} img_alt="temp" start_date="09.2019"
              end_date="05.2020"/>
      </div>
    </div>
  )
}

export default Experience