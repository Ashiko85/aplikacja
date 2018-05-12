import React, { Component } from 'react';
import './App.css'

class Section extends Component {
  render() {
    return (
        <div>
            {this.props.text}
        </div>
    );
  }
}

export default Section;
