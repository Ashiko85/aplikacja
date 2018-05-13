import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header.js';
import Section from '../components/Section.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';
import UsersList from '../components/usersList.components.js';
import USERS from '../utils/dbUsers.js';
import usersComponent from '../components/users.js';
import './Home.css'


class Home extends Component {

  render() {
    return (
        <div className ="container3">
        <div className ="App">
            <Header applicationName="Example application"/>
            <Menu/>
            <Section text="Example text - home section"/>
            <Footer authorInformation="Anna Waluszko"/>
            <UsersList />
        </div>
        </div>
    );
  }
}

export default Home;
