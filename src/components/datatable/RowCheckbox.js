import React, { Component } from 'react';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class RowCheckbox extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div className="ui-chkbox ui-widget">
                 <div className="ui-helper-hidden-accessible">
                    <input type="checkbox" />
                </div>
                <div className="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                    <span className="ui-chkbox-icon ui-clickable"></span>
                </div>
            </div>;
    }
}