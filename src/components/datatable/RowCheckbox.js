import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        let className = classNames('p-checkbox-box p-component', {'p-highlight': this.props.selected, 'p-disabled': this.props.disabled});
        let iconClassName = classNames('p-checkbox-icon p-clickable', {'pi pi-check': this.props.selected});
        
        return <div className="p-checkbox p-component">
                 <div className="p-hidden-accessible">
                    <input type="checkbox" />
                </div>
                <div className={className} onClick={this.onClick}>
                    <span className={iconClassName}></span>
                </div>
            </div>;
    }
}