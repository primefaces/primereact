import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class RowCheckbox extends Component {

    static defaultProps = {
        rowData: null,
        onClick: null
    }

    static propTypes = {
        rowData: PropTypes.object,
         onClick: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData,
                checked: this.props.selected
            })
        }
    }
    
    render() {
        let className = classNames('p-chkbox-box p-component', {'p-highlight': this.props.selected});
        let iconClassName = classNames('p-chkbox-icon p-clickable', {'pi pi-check': this.props.selected});
        
        return <div className="p-chkbox p-component">
                 <div className="p-helper-hidden-accessible">
                    <input type="checkbox" />
                </div>
                <div className={className} onClick={this.onClick}>
                    <span className={iconClassName}></span>
                </div>
            </div>;
    }
}