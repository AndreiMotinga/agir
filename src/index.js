import 'normalize.css' // todo: prost-prod either remove or move to proper place
import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'
import Container from './components/Container'
import Home from './components/pages/Home'
import Photos from './components/pages/Photos'
import Videos from './components/pages/Videos'
import Services from './components/pages/Services'
import OurWork from './components/pages/OurWork'
import Contacts from './components/pages/Contacts'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Nav />
      <Container>
        <Route exact path="/" component={Home}/>
        <Route exact path="/our-work" component={OurWork}/>
        <Route path="/our-work/photos" component={Photos}/>
        <Route path="/our-work/videos" component={Videos}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/services/:id" component={Services}/>
      </Container>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
