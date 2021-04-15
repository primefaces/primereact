import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';

export class LastPageLink extends Component {

    static defaultProps = {
        disabled: false,
        onClick: null,
        template: null
    }

    static propTypes = {
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        template: PropTypes.any
    }

    render() {
        const className = classNames('p-paginator-last p-paginator-element p-link', { 'p-disabled': this.props.disabled });
        const iconClassName = 'p-paginator-icon pi pi-angle-double-right';
        const element = (
            <button type="button" className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
                <span className={iconClassName}></span>
                <Ripple />
            </button>
        );

        if (this.props.template) {
            const defaultOptions = {
                onClick: this.props.onClick,
                className,
                iconClassName,
                disabled: this.props.disabled,
                element,
                props: this.props
            };

            return ObjectUtils.getJSXElement(this.props.template, defaultOptions);
        }

        return element;
    }
}
