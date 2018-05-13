import React, { Component } from 'react';
import USERS from '../utils/dbUsers';

class NotFound extends Component {

    findUser = () => USERS.find((dupa)=>{ return dupa.id === +this.props.match.params.id });

    render() {
        const currentUser = this.findUser();

        return (
            <div className="HomeComponent">
                Not found

            </div>
        );
    }
}

export default NotFound;