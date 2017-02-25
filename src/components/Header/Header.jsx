import React from 'react';
import './Header.css'
import logo from '../../img/agir.png';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.handleImageLoaded = this.handleImageLoaded.bind(this)
  }

  handleImageLoaded(e) {
    e.target.className += 'is-up'
  }

  render () {
    return (
      <div className="Header">
        <div className="Header_brand">
          <div className="Header_agir">
            <img
              src={logo}
              alt="Agir solutions"
              onLoad={this.handleImageLoaded}
            />
          </div>
          <div className="Header_title">
            <h1>Agir</h1>
            <small>security solutions inc</small>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
