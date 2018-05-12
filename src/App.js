import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Section from './components/Section.js';
import Footer from './components/footer.js';
import Menu from './components/menu.component.js';

class App extends Component {
  render() {
    return (
    <div className ="App">
        <Header applicationName="Example application"/>
        <Section text="Example text - lorem"/>
        <Footer authorInformation="Anna Waluszko"/>

    </div>
    );
  }
}

export default App;
