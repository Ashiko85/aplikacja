import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users/Anna">anna</Link>
        </div>
    );
  }
}

export default Menu;
