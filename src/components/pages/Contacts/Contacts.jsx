import React from 'react';
import Panel from '../../Panel'

const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="Contacts_map">
        <Panel title="Postal Address">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.8436660916695!2d-73.98845918457664!3d40.58920607934541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ada6024e69%3A0xb9cfc4b7c29b0f4b!2s2755+Harway+Ave%2C+Brooklyn%2C+NY+11214!5e0!3m2!1sen!2sus!4v1488205044354" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
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
      <div className="Contacts_form">
        <Panel title="Contact Form">
          <form action="">
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <input type="phone" name="phone"/>
            <textarea id="" name="body" cols="30" rows="10"></textarea>
          </form>
        </Panel>
      </div>

    </div>
  )
}

export default Contacts
