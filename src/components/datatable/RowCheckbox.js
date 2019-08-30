import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox } from "../checkbox/Checkbox";

export class RowCheckbox extends Component {

    static defaultProps = {
        rowData: null,
        onClick: null,
        disabled: false
    }

    static propTypes = {
        rowData: PropTypes.object,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if(this.props.onClick && !this.props.disabled) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData,
                checked: this.props.selected
            })
        }
    }
    
    render() {
        return <Checkbox onChange={this.onClick} checked={this.props.selected} disabled={this.props.disabled} />;
    }
}
