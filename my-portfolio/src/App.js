// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return <h1>Welcome to My Portfolio</h1>
}

function AboutMe() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        Hello, I'm a software developer with a passion for technology and
        innovation.
      </p>
    </section>
  )
}

function Projects() {
  return <h2>Projects Page</h2>
}

function Resume() {
  return (
    <section class="resume-section">
      <h2>Work Experience</h2>

      <div class="job">
        <h3>Software Implementation Specialist</h3>
        <p>
          <em>Prometheus Group – Raleigh, NC | July 2024 – Present</em>
        </p>
        <ul>
          <li>
            Develop and maintain dynamic reports using PostgreSQL, enabling
            data-driven decision-making for clients.
          </li>
          <li>
            Utilize Visual Studio and DevExpress to build and refine software
            solutions tailored to customer requirements.
          </li>
          <li>
            Configure and debug ePAS software to ensure seamless implementation
            that meets client specifications.
          </li>
          <li>
            Collaborate in daily stand-ups and adopt Agile methodologies to
            ensure efficient sprint planning and delivery.
          </li>
        </ul>
      </div>

      <div class="job">
        <h3>Software Analyst</h3>
        <p>
          <em>Manhattan Associates – Marietta, GA | June 2023 – June 2024</em>
        </p>
        <ul>
          <li>
            Developed custom software extensions for Manhattan Warehouse
            Management, enhancing functionality based on client needs.
          </li>
          <li>
            Created RESTful APIs and manipulated JSON data for seamless
            integration with existing systems.
          </li>
          <li>
            Supported successful software go-lives both remotely and on-site,
            ensuring minimal disruption during deployments.
          </li>
        </ul>
      </div>

      <div class="job">
        <h3>Application Development Intern</h3>
        <p>
          <em>
            Automatic Data Processing (ADP) – Alpharetta, GA | May 2022 – August
            2022
          </em>
        </p>
        <ul>
          <li>
            Developed an internal tool for the Problem Management team to track
            and resolve IT issues more efficiently.
          </li>
          <li>
            Implemented back-end endpoints using the Django REST framework to
            streamline data access and storage.
          </li>
        </ul>
      </div>

      <div class="job">
        <h3>IT Specialist</h3>
        <p>
          <em>Cosmic Delivery – Athens, GA | October 2020 – April 2022</em>
        </p>
        <ul>
          <li>
            Configured and maintained receipt printers and tablets for
            restaurant partners to ensure smooth operation.
          </li>
          <li>
            Gained hands-on experience with Raspberry Pi and IR sensors,
            designing custom hardware solutions.
          </li>
          <li>
            Provided on-site technical support, troubleshooting hardware and
            software issues as needed.
          </li>
        </ul>
      </div>

      <div class="job">
        <h3>Software Electronics Team Member</h3>
        <p>
          <em>
            UGA Small Satellite Research Lab – Athens, GA | April 2021 – May
            2023
          </em>
        </p>
        <ul>
          <li>
            Developed flight software for the MOCI Small Satellite, ensuring its
            functionality for space missions.
          </li>
          <li>
            Worked in a cross-functional, Agile team to coordinate the
            development, testing, and deployment of satellite software.
          </li>
        </ul>
      </div>

      <div class="job">
        <h3>Percussion Instructor</h3>
        <p>
          <em>
            Oconee County High School – Watkinsville, GA | July 2021 – May 2023
          </em>
        </p>
        <ul>
          <li>
            Instructed high school percussion students, fostering musical
            development and teamwork skills.
          </li>
          <li>
            Collaborated with fellow instructors to develop engaging lesson
            plans and performance strategies.
          </li>
        </ul>
      </div>

      <h2>Education</h2>

      <div class="education">
        <h3>Bachelor of Science in Computer Science</h3>
        <p>
          <em>University of Georgia – Graduation: May 2023 | GPA: 3.87</em>
        </p>
      </div>
    </section>
  )
}

export default App
