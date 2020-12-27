import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class Tag extends Component {

    static defaultProps = {
        value: null,
        severity: null,
        rounded: false,
        icon: null,
        style: null,
        className: null
    }

    static propTypes = {
        value: PropTypes.any,
        severity: PropTypes.string,
        rounded: PropTypes.bool,
        icon: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    render() {
        const tagClassName = classNames('p-tag p-component', {
            'p-tag-info': this.props.severity === 'info',
            'p-tag-success': this.props.severity === 'success',
            'p-tag-warning': this.props.severity === 'warning',
            'p-tag-danger': this.props.severity === 'danger',
            'p-tag-rounded': this.props.rounded
        }, this.props.className);

        const iconClass = classNames('p-tag-icon', this.props.icon);

        return (
            <span className={tagClassName} style={this.props.style}>
                {this.props.icon && <span className={iconClass}></span>}
                <span className="p-tag-value">{this.props.value}</span>
                <span>{this.props.children}</span>
            </span>
        );
    }
}
