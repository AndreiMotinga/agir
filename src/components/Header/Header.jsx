import React from 'react';
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

    componentWillUnmount () {
      this.timeouts.forEach(clearTimeout);
    }

  render () {
    const isUp = this.state.mounted ? 'js-brand is-up' : 'js-brand'

    return (
      <div className="Header">
        <div className="Header_brand">
          <div className="Header_agir">
            <img
              className={isUp}
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
