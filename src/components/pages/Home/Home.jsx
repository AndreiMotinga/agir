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
    let btnClass = 'btn -call-us'
    if (this.state.mounted) btnClass += ' -large'

    return (
      <div className="Home">
        <div className="Home_callBtn">
          <a href="tel:+1(718)676-0564" className={btnClass}>Give Us a Call</a>
        </div>
        <Panel title="WHO WE ARE" align="center">
          <p>
            "Founded in 2009, Agir Security Solution Inc. performs commercial, residential, industrial and service work throughout New York area and nearby states. No matter the electrical job, the experts at Agir are here to help. Our extremely knowledgeable technicians have a variety of electrical skills, including audio and video wiring expertise, to complete any electrical task quickly and professionally."
          </p>
        </Panel>

        <div className="carousel-container">
          <Panel title="WHAT WE DO" align="center">
            <Carousel
              showArrows
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              dynamicHeight={false}
              className="presentation-mode"
            >
              <div key="content-0" className="">
                  <h4 className="slide_title"><a href="/services/electrical">Electrical Work</a></h4>
                  <ul className="slide_list">
                    <li className="slide_list_item">Appliance & Specialized Equipment Wiring</li>
                    <li className="slide_list_item">Panels, Switches, Receptacles, Lighting</li>
                    <li className="slide_list_item">Temporary Service & Service Upgrades</li>
                    <li className="slide_list_item">Emergency Repairs & Maintenance</li>
                    <li className="slide_list_item">Wiring & Power Distribution</li>
                    <li className="slide_list_item">Electrical Inspections</li>
                  </ul>
              </div>

              <div key="content-1" className="">
                <h4 className="slide_title"><a href="/services/low-voltage">Low Voltage</a></h4>
                <ul className="slide_list">
                  <li className="slide_list_item">Alarm/Sercurity/Intercom Systems</li>
                  <li className="slide_list_item">Audio/Video/Telephone Systems</li>
                  <li className="slide_list_item">Motorized Window Treatments</li>
                  <li className="slide_list_item">Central Vacuum Systems</li>
                  <li className="slide_list_item">Building Automation</li>
                  <li className="slide_list_item">Structured Cabling</li>
                </ul>
              </div>

              <div key="content-2" className="">
                <h4 className="slide_title"><a href="/services/design-services">Design Services</a></h4>
                <ul className="slide_list">
                  <li className="slide_list_item">Design and Engineering</li>
                  <li className="slide_list_item">Technology Consulting</li>
                  <li className="slide_list_item">Project Management</li>
                  <li className="slide_list_item">Space Planning</li>
                </ul>
              </div>

              <div key="content-3" className="">
                <h4 className="slide_title"><a href="/services/it-services">IT Services</a></h4>
                <ul className="slide_list">
                  <li className="slide_list_item">Network Deployment & Integration</li>
                  <li className="slide_list_item">Repairs and Consulting</li>
                  <li className="slide_list_item">Wireless Networks</li>
                  <li className="slide_list_item">Cloud Services</li>
                  <li className="slide_list_item">VOIP Systems</li>
                </ul>
              </div>

              <div key="content-3" className="">
                <h4 className="slide_title"><a href="/services/home-office-automation">Home/Office Automation</a></h4>
                <ul className="slide_list">
                  <li className="slide_list_item">Intuitive Touchscreens & Remotes</li>
                  <li className="slide_list_item">Smarthome - Home Automation</li>
                  <li className="slide_list_item">HVAC & Climate Control</li>
                  <li className="slide_list_item">Custom Home Theaters</li>
                  <li className="slide_list_item">Pool/Spa Control</li>
                  <li className="slide_list_item">Digital Signage</li>
                </ul>
              </div>
            </Carousel>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Home
