import './WhatsNew.css'
import { useState } from 'react'

const ArticleCard = ({ image, category, title, link }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="article-card">
      <img 
        src={imageError ? '/fallback-image.jpg' : image} 
        alt={title}
        onError={() => setImageError(true)}
      />
      <div className="article-content">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <a href={link} className="learn-more">Learn More</a>
      </div>
    </article>
  )
}

const WhatsNew = () => {
  const articles = [
    {
      image: '/path/to/retreat-image.jpg',
      category: 'DAY SPA • EPIC RETREAT',
      title: 'Quarterly Epic Retreat | Autumn Zen',
      link: '/retreat'
    },
    {
      image: '/path/to/specials-image.jpg',
      category: 'DAY SPA • HIATUS NEWS',
      title: 'October Specials & Events | 2024',
      link: '/specials'
    },
    {
      image: '/path/to/facial-image.jpg',
      category: 'MED SPA • SPECIALS',
      title: 'Get Holiday Ready with Facial Balancing | 2024',
      link: '/facial'
    }
  ]

  return (
    <section className="whats-new-section">
      <div className="whats-new-header">
        <h2>What's New</h2>
        <p>
          We believe authentic beauty reaches far beyond the superficial, 
          through consistent self care you let the beauty shine both externally and internally.
        </p>
      </div>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  )
}

export default WhatsNew 