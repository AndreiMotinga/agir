import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import OurWork from './components/pages/OurWork'
import Contacts from './components/pages/Contacts'

import 'normalize.css' // todo: prost-prod either remove or move to proper place
import './css/index.css';

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/our-work" component={OurWork}/>
      <Route path="/contacts" component={Contacts}/>
    </div>
  </Router>,
  document.getElementById('root')
)
