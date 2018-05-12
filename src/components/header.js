import React, {Component} from 'react';
import '../App.css'

class Header extends React.Component {

    render(){

        return(
            <div>
                {this.props.applicationName}
            </div>
        );
    }
}
        export default Header;