import React, { Component } from 'react';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class RowRadioButton extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div className="ui-radiobutton ui-widget">
                    <div className="ui-helper-hidden-accessible">
                        <input type="radio" />
                    </div>
                    <div className="ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default">
                        <span className="ui-radiobutton-icon ui-clickable"></span>
                    </div>
                </div>
    }
}