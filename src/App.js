import React, { Component } from 'react';
import './App.css';
import Tab from './introPage/Tab'
import About from './introPage/About'
import Services from './introPage/Services'
import Team from './introPage/Team'
import Contact from './introPage/Contact'
import Footer from './introPage/Footer'
import './css/agency.css';
import './vendor/font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab/>
      
        <header class="masthead">
          <div class="container">
            <div class="intro-text">
              <div class="intro-lead-in">Dreams come true!</div>
              <div class="intro-heading text-uppercase">The smarter way to invest in art</div>
              <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>

        <Services/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
