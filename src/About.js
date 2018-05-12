import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Section from './Section.js';
import Footer from './footer.js';

class About extends Component {
  render() {
    return (
        <div className ="App">
            <Header applicationName="Example application"/>
            <Section textn="Example text - about section"/>
            <Footer authorInformation="Anna Waluszko"/>

        </div>
    );
  }
}

export default About;
