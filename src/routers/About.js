import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header.js';
import Section from '../components/Section.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';

class About extends Component {
  render() {
    return (
        <div className ="App">
            <Header applicationName="Example application"/>
            <Menu/>
            <Section text="Example text - about section"/>
            <Footer authorInformation="Anna Waluszko"/>

        </div>
    );
  }
}

export default About;
