import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Photos from './components/pages/Photos'
import Videos from './components/pages/Videos'
import Services from './components/pages/Services'
import Contacts from './components/pages/Contacts'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Nav />
      <main>
        <Route exact path="/" component={Home}/>
        <Route path="/our-work/photos" component={Photos}/>
        <Route path="/our-work/videos" component={Videos}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/services/:id" component={Services}/>
      </main>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
