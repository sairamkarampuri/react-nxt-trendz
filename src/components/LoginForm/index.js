// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getUsername = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="label-text" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          className="input-box"
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  getPassword = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="label-text" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          className="input-box"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  getErrorMsg = () => {
    const {errorMsg} = this.state
    return <p className="error-msg">{errorMsg}</p>
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDeatils = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDeatils),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      // console.log(data)
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="main-container">
          <div className="image-section">
            <img
              className="login-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
          </div>
          <div className="login-details-container">
            <form className="form-container" onSubmit={this.onSubmitDetails}>
              <img
                className="app-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
              <img
                className="login-image-small-section"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                alt="website login"
              />
              {this.getUsername()}
              {this.getPassword()}
              <button className="login-button" type="submit">
                Login
              </button>
              {this.getErrorMsg()}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
