import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import USERS from '../utils/dbUsers';

class UsersList extends Component {
    renderUserEmenent = USERS.map((user) => <li key={user.id}><Link to= {`/users/${user.id}`}>{user.name}</Link> </li>);

  render() {
    return (
<div className = "HomeComponent">
    <h3> UsersList</h3>
    <ul>
        {this.renderUserEmenent}
    </ul>
</div>

    );
  }
}

export default UsersList;
