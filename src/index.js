import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'
import MySortablePane from './components/MySortablePane'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Photos from './components/pages/Photos'
import Videos from './components/pages/Videos'
import Services from './components/pages/Services'
import Contacts from './components/pages/Contacts'

ReactDOM.render(
  <BrowserRouter>
    <div className="Site">
      <MySortablePane />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
