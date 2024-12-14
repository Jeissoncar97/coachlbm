import React from 'react'
import ImgReport from '../assets/MockUp.svg'
import '../styles/personalizedReport.css'

const PersonalizedReports = () => {
  return (
    <section className='personalized_reports'>
      <img src={ImgReport} alt="" />
      <p>Recibe tus informes
      personalizados y visualizalos donde quieras!</p>
      <div>
      <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSeREsA_j-B1lUxd7ZkgbsaB5xu0rJDpM4WBPxHrQS1k1WUsOA/viewform"
      target="_blank"
      rel="noopener noreferrer"
      >CLIC AQUÍ</a>

      </div>
    </section>
  )
}

export default PersonalizedReports
