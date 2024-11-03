import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.scss'
import RandomAlbum from './pages/album-rec'
import Resume from './pages/resume'
import ContactPage from './pages/contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="web-title">Brett Toutkoushian's Portfolio</div>{' '}
          {/* Title on the far left */}
          {/* Centered circle menu button */}
          <div className="circle-menu" onClick={toggleMenu}>
            <div className="menu-button">Menu</div>
          </div>
          {/* Menu items positioned relative to circle-menu */}
          <div ref={menuRef} className={`menu-items ${menuOpen ? 'show' : ''}`}>
            <Link
              to="/"
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/resume"
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              to="/album-rec"
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Album Recommendation
            </Link>
            <Link
              to="/contact"
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </header>

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/album-rec" element={<RandomAlbum />} />
          </Routes>
        </div>
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

function albumRec() {}

export default App
