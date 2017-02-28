import React from 'react';
import Panel from '../../Panel'
import './Contacts.css'

const Contacts = () => {
  return (
    <div>
    <div className="Contacts">
      <div className="Contacts_form">
        <Panel title="Contact Form">
          <form action="https://formspree.io/andrew.motinga@gmail.com"
                method='post'>
                <input
                  type="text"
                  name="name"
                  placeholder="Name: "
                  required />
                <input
                  type="email"
                  name="email"
                  placeholder="Email:"
                  required />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone:"
                  required />
                <textarea
                  name="body"
                  rows="10"
                  placeholder="Message:"
                  required ></textarea>
            <button className="btn" type="Submit">Send Message</button>
          </form>
        </Panel>
      </div>
      <div className="Contacts_address">
        <Panel title="Address">
          <p>
            2755 Harway Ave. <br/>
            Brooklyn, NY 11214
          </p>
          <p>
            Phone: +1 (718) 676-0564<br/>
            Email: agirssinc@gmail.com
          </p>
        </Panel>
      </div>
      </div>
      <hr />
      <div className="Contacts_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.8436660916695!2d-73.98845918457664!3d40.58920607934541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ada6024e69%3A0xb9cfc4b7c29b0f4b!2s2755+Harway+Ave%2C+Brooklyn%2C+NY+11214!5e0!3m2!1sen!2sus!4v1488205044354" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Contacts
