import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_header"></div>

      <div className="Footer_body">
        <div className="Footer_body_address">
          <p>
            2755 Harway Ave. <br/>
            Brooklyn, NY 11214
          </p>
          <p>
            Phone: +1 (718) 676-0564<br/>
            Email: agirssinc@gmail.com
          </p>
        </div>

        <div className="Footer_body_links">
          <div className="Footer_body_social">
            <ul>
              <li><a href="javscript:void(0)">fb</a></li>
              <li><a href="javscript:void(0)">gl</a></li>
              <li><a href="javscript:void(0)">tw</a></li>
            </ul>
          </div>
          <div className="Footer_body_ezworks">
            <small>
              Designed by <a href="//ezworks.online">ezworks.online</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
