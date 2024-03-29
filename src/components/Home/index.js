// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-section">
      <div className="text-section">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <div className="home-image-section-small">
          <img
            className="home-image-small-device"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revloution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <div className="shop-now-button-container">
          <button className="shop-now-button" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="home-image-section">
        <img
          className="home-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
