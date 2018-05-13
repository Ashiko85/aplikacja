import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render(){
        return (
            <div className ="footer">
            <div>
                {this.props.authorInformation}
            </div>
            </div>
    );
    }
}
export default Footer;