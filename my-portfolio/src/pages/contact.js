import { useState } from 'react'
import axios from 'axios'

export default function ContactPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()

    axios
      .post(
        'https://formcarry.com/s/HaUvWdl72bR',
        {
          email: email,
          message: message,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.data.code === 200) {
          setSubmitted(true)
        } else {
          setError(res.data.message)
        }
      })
  }

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        {error && <p>{error}</p>}
        {submitted ? (
          <p>We've received your message, thank you for contacting us!</p>
        ) : (
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>

      <div className="contact-info-section">
        <h2>Contact Information</h2>
        <p>Email: btouts2000@gmail.com</p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/toutkoushian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </p>
        <p>
          Github:{' '}
          <a
            href="https://github.com/BTouts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </p>
        {/* Add more contact info as needed */}
      </div>
    </div>
  )
}
