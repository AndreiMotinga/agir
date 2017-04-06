import React from 'react';
import Panel from '../../Panel'
import  { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'
import './Home.css'

import slide1 from '../../../img/carousel/slide-1.png'
import slide2 from '../../../img/carousel/slide-2.png'
import slide3 from '../../../img/carousel/slide-3.png'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 2500)
  }

  // componentWillUnmount () {
  //   let timeouts = this.timeouts
  //   if(timeouts && timeouts.length) timeouts.forEach(clearTimeout);
  // }

  render () {
    const details = {
      title: "Agir Security Solution Inc.",
      text: "Founded in 2009, Agir Security Solution Inc. performs commercial, residential, industrial and service work throughout New York area and nearby states. No matter the electrical job, the experts at Agir are here to help. Our extremely knowledgeable technicians have a variety of electrical skills, including audio and video wiring expertise, to complete any electrical task quickly and professionally."
    }

    let btnClass = 'btn -call-us'
    if (this.state.mounted) btnClass += ' -large'

    return (
      <div className="Home">
        <div className="Home_callBtn">
          <a href="tel:+1(718)676-0564" className={btnClass}>Give Us a Call</a>
        </div>
        <Panel title={details.title} align="center">
          {details.text}
        </Panel>
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          dynamicHeight={false}
          className="presentation-mode"
        >
          <div>
            <div className="slide_text">
              <h1 className="slide_title"><a href="/services/electrical">Electrical Work</a></h1>
              <ul className="slide_list">
                <li className="slide_list_item">Wiring & Power Distribution</li>
                <li className="slide_list_item">Temporary Service & Service Upgrades</li>
                <li className="slide_list_item">Panels, Switches, Receptacles, Lighting</li>
                <li className="slide_list_item">Appliance & Specialized Equipment Wiring</li>
                <li className="slide_list_item">Electrical Inspections</li>
                <li className="slide_list_item">Emergency Repairs & Maintenance</li>
              </ul>
            </div>
            {/* <img src={slide1} alt="Agir Security Solutions"/> */}
          </div>
          <div>
            <div className="slide_text">
              <h1 className="slide_title"><a href="/services/low-voltage">Low Voltage</a></h1>
              <ul className="slide_list">
                <li className="slide_list_item">Structured Cabling</li>
                <li className="slide_list_item">Alarm Systems</li>
                <li className="slide_list_item">Security Camera Systems</li>
                <li className="slide_list_item">Intercom Systems</li>
                <li className="slide_list_item">Access Control Systems</li>
                <li className="slide_list_item">Audio/Video Systems</li>
                <li className="slide_list_item">Telephone Systems</li>
                <li className="slide_list_item">Paging Systems</li>
                <li className="slide_list_item">Motorized Window Treatments</li>
                <li className="slide_list_item">Central Vacuum Systems</li>
                <li className="slide_list_item">Building Automation</li>
              </ul>
            </div>
            {/* <img src={slide2} alt="Agir Security Solutions"/> */}
          </div>
          <div>
            <div className="slide_text">
              <h1 className="slide_title"><a href="/services/design-services">Design Services</a></h1>
              <ul className="slide_list">
                <li className="slide_list_item">Technology Consulting</li>
                <li className="slide_list_item">Design and Engineering</li>
                <li className="slide_list_item">Project Management</li>
                <li className="slide_list_item">Space Planning</li>
              </ul>
            </div>
            {/* <img src={slide3} alt="Agir Security Solutions"/> */}
          </div>
          <div>
            <div className="slide_text">
              <h1 className="slide_title"><a href="/services/it-services">IT Services</a></h1>
              <ul className="slide_list">
                <li className="slide_list_item">Repairs and Consulting</li>
                <li className="slide_list_item">Network Deployment & Integration</li>
                <li className="slide_list_item">Wireless Networks</li>
                <li className="slide_list_item">VOIP Systems</li>
                <li className="slide_list_item">Cloud Services</li>
              </ul>
            </div>
            {/* <img src={slide3} alt="Agir Security Solutions"/> */}
          </div>
          <div>
            <div className="slide_text">
              <h1 className="slide_title"><a href="/services/home-office-automation">Home/Office Automation</a></h1>
              <ul className="slide_list">
                <li className="slide_list_item">Smarthome - Home Automation</li>
                <li className="slide_list_item">Motorized Window Treatments</li>
                <li className="slide_list_item">Pool/Spa Control</li>
                <li className="slide_list_item">HVAC & Climate Control</li>
                <li className="slide_list_item">Digital Signage</li>
                <li className="slide_list_item">Custom Home Theaters</li>
                <li className="slide_list_item">Smart Lighting Control</li>
                <li className="slide_list_item">Intuitive Touchscreens & Remotes</li>
              </ul>
            </div>
            <img src={slide3} alt="Agir Security Solutions"/>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Home
