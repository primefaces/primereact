import React, {Component} from 'react';

export class TabPanel extends Component {
    
    render() {        
        return <div>{this.props.children}</div>;
    }
}