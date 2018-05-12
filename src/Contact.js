import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Section from './Section.js';
import Footer from './footer.js';

class Contact extends Component {
  render() {
    return (
        <div>
            <div className ="App">
                <Header applicationName="Example application"/>
                <Section text="Example text - contact section"/>
                <Footer authorInformation="Anna Waluszko"/>

            </div>
        </div>
    );
  }
}

export default Contact;
