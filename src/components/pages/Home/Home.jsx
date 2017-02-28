import React from 'react';
import Service from '../../Service'
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
    }, 3000)
  }

  componentWillUnmount () {
    this.timeouts.forEach(clearTimeout);
  }

  render () {
    const details = {
      title: "Agir Security Solution Inc.",
      text: "Founded in 2009, Agir Security Solution Inc. performs commercial, residential, industrial and service work throughout New York area and nearby states. No matter the electrical job, the experts at Agir are here to help. Our extremely knowledgeable technicians have a variety of electrical skills, including audio and video wiring expertise, to complete any electrical task quickly and professionally."
    }

    let btnClass= 'btn -call-us'
    if (this.state.mounted) btnClass += ' -large'

    return (
      <div className="Home">
        <div className="Home_callBtn">
          <a href="tel:+1(718)676-0564" className={btnClass}>Give Us a Call</a>
        </div>
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
        >
          <div>
            <div className="slide_text">
              <h2 className="slide_title">Electrical Work for Homeowners</h2>
              <ul className="slide_list">
                <li className="slide_list_item">Rewire a house, new lighting</li>
                <li className="slide_list_item">Installations of household items</li>
                <li className="slide_list_item">Outlets and switches</li>
                <li className="slide_list_item">Attic and ceiling fans</li>
                <li className="slide_list_item">Outdoor wiring</li>
              </ul>
            </div>
            <img src={slide1} alt="Agir Security Solutions"/>
          </div>
          <div>
            <div className="slide_text">
              <h2 className="slide_title">Installation Services</h2>
              <ul className="slide_list">
                <li className="slide_list_item">TV</li>
                <li className="slide_list_item">Security Cameras</li>
                <li className="slide_list_item">Burglar Alarms</li>
                <li className="slide_list_item">Central Vacuum</li>
                <li className="slide_list_item">Home Theater</li>
                <li className="slide_list_item">Sound Installation</li>
              </ul>
            </div>
            <img src={slide2} alt="Agir Security Solutions"/>
          </div>
          <div>
            <div className="slide_text">
              <h2 className="slide_title">Maintenance</h2>
              <ul className="slide_list">
                <li className="slide_list_item">Emergency calls</li>
                <li className="slide_list_item">Troubleshooting</li>
                <li className="slide_list_item">Upgrading</li>
              </ul>
            </div>
            <img src={slide3} alt="Agir Security Solutions"/>
          </div>
        </Carousel>
        <Service service={details} />
      </div>
    )
  }
}

export default Home
