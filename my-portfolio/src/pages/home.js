// HomePage.js
import React from 'react'
import dawg from './images/dawg.JPG'
import san_fran from './images/san_fran.JPG'

const HomePage = () => {
  return (
    <main className="App-main">
      {/* Left Half: Blurb and Images */}
      <div className="left-half">
        <section className="blurb">
          <p>
            Hi! I'm [Your Name], a software engineer with a passion for backend
            development, music, and creating impactful software solutions.
          </p>
        </section>

        {/* Placeholder Images */}
        <div className="image-section">
          <img
            src={dawg}
            alt="Sample"
            className="image-placeholder animate__animated animate__fadeInUp"
          />
          <img
            src={san_fran}
            alt="Sample"
            className="image-placeholder animate__animated animate__fadeInUp delay-1"
          />
        </div>
      </div>

      {/* Right Half: Menu Circles */}
      <div className="right-half">
        <div className="menu-circles">
          <div className="circle">
            <a href="/about">About</a>
          </div>
          <div className="circle">
            <a href="/resume">Resume</a>
          </div>
          <div className="circle">
            <a href="/album-rec">Album Recommendation</a>
          </div>
          <div className="circle">
            <a href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
