import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src="/hiatus-logo.svg" alt="Hiatus Spa" />
        </Link>
        <div className="nav-links">
          <Link to="/day-spa">Day Spa</Link>
          <Link to="/med-spa">Med Spa</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="nav-right">
        <button className="icon-button">🔍</button>
        <button className="icon-button">🛒<span className="cart-count">0</span></button>
        <button className="icon-button">👤</button>
        <button className="book-now">Book now</button>
      </div>
    </nav>
  )
}

export default Navbar 