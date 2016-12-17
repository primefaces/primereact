import React, {Component} from 'react';

export class InputText extends Component {
    
    render() {
        return <input type="text" className="ui-inputtext ui-state-default ui-corner-all ui-widget" {...this.props}/>;
    }
}