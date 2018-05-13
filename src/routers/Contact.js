import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header.js';
import Section from '../components/Section.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';
import './Contact.css'

class Contact extends Component {
  render() {
    return (
        <div>
            <div className ="container2">
            <div className ="App">
                <Header applicationName="Example application"/>
                <Menu/>
                <Section text="Example text - contact section"/>
                <Footer authorInformation="Anna Waluszko"/>
            </div>
            </div>
        </div>
    );
  }
}

export default Contact;
