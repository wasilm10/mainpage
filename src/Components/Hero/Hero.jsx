import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          Track Your Child’s Spending — Smarter & Safer
          Empowering parents to guide their children’s financial habits
        </h1>
        <p>
          Monitor allowances, set spending limits, and view real-time expense reports — all in one place
        </p>
        <a
          href="https://dashboard-h3lh.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Start Tracking <img src={dark_arrow} alt="arrow" />
        </a>
      </div>
    </div>
  )
}

export default Hero
