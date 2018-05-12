import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


class Users extends Component {
  render() {
    return (
        <div>
        {this.props.match.params.id}
        </div>
    );
  }
}

export default Users;
