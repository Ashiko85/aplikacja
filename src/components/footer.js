import React, {Component} from 'react';
import '../App.css'

class Footer extends Component {
    render(){
        return (
            <div>
                {this.props.authorInformation}
            </div>
    );
    }
}
export default Footer;