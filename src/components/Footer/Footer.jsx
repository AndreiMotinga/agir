import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_address">
        <p>
          <a href="http://maps.google.com/?q=2755+Harway+Ave+Brooklyn+NY"
             target="_blank" >
            <em>2755 Harway Ave, Brooklyn, NY 11214</em>
          </a>
          <br />
          Phone <a class="phone-mobile" href="tel:1-718-676-0564">1(718) 676-0564<br/></a>
          Email <a href="mailto:agirssinc@gmail.com">agirssinc@gmail.com</a>
        </p>
      </div>

      <div className="Footer_links">
        <div className="Footer_body_social">
          <ul>
            <li><a href="" className="social-icon"> <i class="fa fa-facebook"></i></a></li>
            <li><a href="" className="social-icon"> <i class="fa fa-twitter"></i></a></li>
            <li><a href="" className="social-icon"> <i class="fa fa-rss"></i></a></li>
            <li><a href="" className="social-icon"> <i class="fa fa-youtube"></i></a></li>
            <li><a href="" className="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            <li><a href="" className="social-icon"> <i class="fa fa-google-plus"></i></a></li>
          </ul>
        </div>
        <div className="Footer_body_ezworks">
          <small>
            Designed by <a className="ezworks" href="//ezworks.online">ezworks.online</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Footer
