import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class Divider extends Component {

    static defaultProps = {
        align: null,
        layout: 'horizontal',
        type: 'solid',
        style: null,
        className: null
    }

    static propTypes = {
        align: PropTypes.string,
        layout: PropTypes.string,
        type: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    render() {
        const dividerClassName = classNames('p-divider p-component', 'p-divider-' + this.props.layout, 'p-divider-' + this.props.type,
            { 'p-divider-left': this.props.layout === 'horizontal' && (!this.props.align || this.props.align === 'left') },
            { 'p-divider-center': this.props.layout === 'horizontal' && this.props.align === 'center' },
            { 'p-divider-right': this.props.layout === 'horizontal' && this.props.align === 'right' },
            { 'p-divider-top': this.props.layout === 'vertical' && (this.props.align === 'top') },
            { 'p-divider-center': this.props.layout === 'vertical' && (!this.props.align || this.props.align === 'center') },
            { 'p-divider-bottom': this.props.layout === 'vertical' && this.props.align === 'bottom' },
            this.props.className);

        return (
            <div className={dividerClassName} style={this.props.style} role="separator">
                <div className="p-divider-content">
                    {this.props.children}
                </div>
            </div>

        );
    }
}
