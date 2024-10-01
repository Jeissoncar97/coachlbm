import React from 'react'
import ImgReport from '../assets/imageReport.png'
import '../styles/personalizedReport.css'

const PersonalizedReports = () => {
  return (
    <section className='personalized_reports'>
      <img src={ImgReport} alt="" />
      <p>Recibe tus informes
      personalizados y visualizalos donde quieras!</p>
      <div>
      <a href="https://www.youtube.com/watch?v=OmRotR0EdhI">CLIC AQUÍ</a>

      </div>
    </section>
  )
}

export default PersonalizedReports
