import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../img/agir.png';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 1000)
  }

  // componentWillUnmount () {
  //   this.timeouts.forEach(clearTimeout);
  // }

  render () {
    const isUp = this.state.mounted ? 'logo js-brand is-up' : 'logo js-brand'

    return (
      <div className="Header">
        <div className="Header_content">
          <Link to="/">
            <img
              className={isUp}
              src={logo}
              alt="Agir solutions"
              onLoad={this.handleImageLoaded}
            />
          </Link>
          <h1 className="Header_text">
            <span className="name">Agir</span> <span>Security Solutions Inc</span>
          </h1>
          <a className="Header_phone" href="tel:1-718-676-0564">
            <h3>+1(718)676-0564</h3>
            <h6>9:00 AM - 7:00 PM</h6>
            <small></small>
          </a>
        </div>
        <div className="Header_borderBottom"></div>
      </div>
    )
  }
}

export default Header
