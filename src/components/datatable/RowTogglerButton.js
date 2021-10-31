import React, { Component } from 'react';
import { classNames } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';

export class RowTogglerButton extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.props.onClick({
            originalEvent: event,
            data: this.props.rowData
        })
    }

    render() {
        const iconClassName = classNames('p-row-toggler-icon', this.props.expanded ? this.props.expandedRowIcon : this.props.collapsedRowIcon);

        return (
            <button type="button" onClick={this.onClick} className="p-row-toggler p-link" tabIndex={this.props.tabIndex}>
                <span className={iconClassName}></span>
                <Ripple />
            </button>
        );
    }
}
