import React from 'react'
import './experience.css'
import Role from '../../components/role/Role';
import manulife_logo from '../../assets/manulife.png'
import level_logo from '../../assets/level.png'
import atolio_logo from '../../assets/atolio.png'
import neuphysio_logo from '../../assets/neuphysio.png'
import dc180_logo from '../../assets/dc180.png'
import unitedWay_logo from '../../assets/unitedWay.png'
import ja_logo from '../../assets/JA.png'
import C1_logo from '../../assets/C1.png'
import xcare_logo from '../../assets/xcare.png'

const Experience = () => {
  return (
    <div className="myweb__experience" section_margin id="experience">
      <div className="myweb__experience-heading">
        <h1 className="gradient__text">Experience</h1>
      </div>
      <div className="myweb__experience-container">
      <Role company="Capital One" title = "Data Science Intern" 
              text="Created a Gradient Boosted Machine (lightgbm) credit risk model; experimenting with sample strategy 
              in a post COVID era, additional feature integration, hyperparameter tuning, and model explainability analysis." 
              tools="Python (pandas, lightgbm, plotly, etc.) | SQL"
              image={C1_logo} img_alt="Capital-One" start_date="01.2024"
              end_date="05.2024"/>
      <Role company="X-Care (WAT.AI)" title = "Machine Learning Engineer" 
              text="Produced a RAG system for a medical assistant chatbot, integrating OpenAI and Cohere general LLMs, 
              a custom chroma db for embeddings, designed and organized, efficient, backend api, and implemented it to drive the NLP chatbot." 
              tools="Python (pandas, langchain, chroma)"
              image={xcare_logo} img_alt="XCare" start_date="09.2023"
              end_date="09.2024"/>
      <Role company="LEVEL (Cardon Rehab)" title = "Project Manager Intern" 
              text="Planned, organized, and implemented the beta testing of LEVEL's medical sensors. Communicated with key stakeholders
                to ensure alignment between customer expectations and product function and design." 
              tools="Figma | SQL | Python-(Pandas)"
              image={level_logo} img_alt="level" start_date="05.2023"
              end_date="06.2023"/>
        <Role company="Manulife" title = "Data Science Intern" 
              text="Developed distinct customer segments to target with digital marketing using k-means modelling.
                Worked with Neo4J and Cypher to utilize a graph database of projects across Manulife.
                Completed Azure DP-100 training course." 
              tools="SQL | Python-(Pandas, Scikit-learn) | Neo4J | Cypher | Google Cloud Platform | Azure | Google Data Studio"
              image={manulife_logo} img_alt="man" start_date="01.2022"
              end_date="05.2022"/>
        <Role company="Atolio" title = "Client Development Intern" 
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
              text="Marketed and awarded several grants of up to $2000 to youth in the London Middlesex area to fund
              community initiatives that aid the local population." 
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