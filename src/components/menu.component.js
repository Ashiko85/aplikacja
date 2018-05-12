import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
        <div>
            <a     href="/">Home</a>
            <a     href="/about">About</a>
            <a     href="/contact">Contact</a>
        </div>
    );
  }
}

export default Menu;
