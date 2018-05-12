import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Section from './Section.js';
import Footer from './footer.js';

class Home extends Component {
  render() {
    return (
        <div className ="App">
            <Header applicationName="Example application"/>
            <Section text="Example text - home section"/>
            <Footer authorInformation="Anna Waluszko"/>

        </div>
    );
  }
}

export default Home;
