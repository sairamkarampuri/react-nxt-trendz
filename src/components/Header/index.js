// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="main-nav-container">
    <nav className="nav-container-large">
      <img
        className="nav-website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-details-section">
        <Link to="/" className="link-element nav-item">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/products" className="link-element nav-item">
          <li className="nav-item">Products</li>
        </Link>
        <Link to="/cart" className="link-element nav-item">
          <li className="nav-item">Cart</li>
        </Link>
        <Link to="/login" className="link-element">
          <button className="logout-button" type="button">
            Logout
          </button>
        </Link>
      </ul>
    </nav>
    <nav className="nav-container-small">
      <div className="nav-logo-logout-img-section">
        <img
          className="nav-website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <Link to="/login" className="link-element">
          <button className="nav-button" type="button">
            <img
              className="nav-img-button"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
            />
          </button>
        </Link>
      </div>
      <div className="button-img-section">
        <Link to="/" className="link-element">
          <button className="nav-button" type="button">
            <img
              className="nav-img-button"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
          </button>
        </Link>

        <Link to="/products" className="link-element">
          <button className="nav-button" type="button">
            <img
              className="nav-img-button"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
            />
          </button>
        </Link>

        <Link to="/cart" className="link-element">
          <button className="nav-button" type="button">
            <img
              className="nav-img-button"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
            />
          </button>
        </Link>
      </div>
    </nav>
  </div>
)

export default Header
