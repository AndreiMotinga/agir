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
        <div className="Header_content">
          <div className="Header_img">
            <img
              className={isUp}
              src={logo}
              alt="Agir solutions"
              onLoad={this.handleImageLoaded}
            />
          </div>
          <h1 className="Header_text">
            <span className="name">Agir</span>
            <span className="small">Security Solutions Inc</span>
          </h1>
        </div>
        <div className="Header_borderBottom"></div>
      </div>
    )
  }
}

export default Header
