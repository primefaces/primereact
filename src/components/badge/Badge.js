import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class Badge extends Component {

    static defaultProps = {
        value: null,
        severity: null,
        size: null,
        style: null,
        className: null
    }

    static propTypes = {
        value: PropTypes.any,
        severity: PropTypes.string,
        size: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    render() {
        const badgeClassName = classNames('p-badge p-component', {
            'p-badge-no-gutter': this.props.value && String(this.props.value).length === 1,
            'p-badge-dot': !this.props.value,
            'p-badge-lg': this.props.size === 'large',
            'p-badge-xl': this.props.size === 'xlarge',
            'p-badge-info': this.props.severity === 'info',
            'p-badge-success': this.props.severity === 'success',
            'p-badge-warning': this.props.severity === 'warning',
            'p-badge-danger': this.props.severity === 'danger'
        }, this.props.className);

        return (
            <span className={badgeClassName} style={this.props.style}>
                {this.props.value}
            </span>
        );
    }
}
