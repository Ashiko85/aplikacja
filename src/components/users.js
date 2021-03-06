import React, { Component } from 'react';
import USERS from '../utils/dbUsers';

class UsersComponent extends Component {

    findUser = () => USERS.find((dupa)=>{ return dupa.id === +this.props.match.params.id });

    render() {
        const currentUser = this.findUser();

        return (
            <div className="HomeComponent">
                <h3>User details</h3>

                <div>Imię:</div>
                <div>{currentUser.name}</div>

                <div>Opis:</div>
                <div>{currentUser.description}</div>

            </div>
        );
    }
}

export default UsersComponent;
