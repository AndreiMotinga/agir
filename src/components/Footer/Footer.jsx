import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_address">
        <h3>Agir Security Solutions Inc.</h3>
        <i className="fa fa-map-marker"></i>
        {" "}
        <a href="http://maps.google.com/?q=2755+Harway+Ave+Brooklyn+NY"
           target="_blank" >
          2755 Harway Ave, Brooklyn, NY 11214
        </a>
        <br />
        <i className="fa fa-phone"></i> <a href="tel:1-718-676-0564">1(718) 676-0564<br/></a>
        <i className="fa fa-envelope-o"></i> <a href="mailto:agirssinc@gmail.com">agirssinc@gmail.com</a>
      </div>

      <div className="Footer_links">
        <div className="Footer_body_social">
          <ul>
            <li><a href="" className="social-icon" target="_blank"> <i className="fa fa-youtube"></i></a></li>
            <li><a href="" className="social-icon" target="_blank"> <i className="fa fa-google"></i></a></li>
            <li><a href="https://www.facebook.com/search/top/?q=agir%20security%20solution"
                   className="social-icon" target="_blank"> <i className="fa fa-facebook"></i></a></li>
            <li><a href="" className="social-icon" target="_blank"> <i className="fa fa-twitter"></i></a></li>
            <li><a href="" className="social-icon" target="_blank"> <i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="Footer_body_ezworks">
          <small>
            <a target="_blank" className="ezworks" href="//ezworks.online">Designed by ezworks.online</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Footer
