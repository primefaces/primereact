import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class FirstPageLink extends Component {

    static defaultProps = {
        disabled: false,
        onClick: null
    }

    static propsTypes = {
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    }
    
    render() {
        let className = classNames('p-paginator-first p-paginator-element', {'p-disabled': this.props.disabled});
        
        return (
            <a className={className} onClick={this.props.onClick} tabIndex={this.props.disabled ? -1 : null}>
                <span className="p-paginator-icon pi pi-step-backward"></span>
            </a>
        );
    }
}