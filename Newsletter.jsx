import './Newsletter.css'

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    // Add email validation and API call here
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <p>
          Sign up to our newsletter to be informed about all our novelties.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-button">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter 