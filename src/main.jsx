import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Router
import { Router, Route } from './router';

// Components
import LandingPage from './components/pages/Landing';
import AboutPage from './components/pages/About';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Route path='/' component={ <LandingPage /> }/>
    <Route path='/about' component={ <AboutPage /> }/>
  </Router>
);
