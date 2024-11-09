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
      href="https://forms.gle/CzJdWG7in61sC4y78"
      target="_blank"
      rel="noopener noreferrer"
      >CLIC AQUÍ</a>

      </div>
    </section>
  )
}

export default PersonalizedReports
