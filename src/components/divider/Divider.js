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

    get isHorizontal() {
        return this.props.layout === 'horizontal';
    }

    get isVertical() {
        return this.props.layout === 'vertical';
    }

    render() {
        const dividerClassName = classNames(`p-divider p-component p-divider-${this.props.layout} p-divider-${this.props.type}`, {
            'p-divider-left': this.isHorizontal && (!this.props.align || this.props.align === 'left'),
            'p-divider-right': this.isHorizontal && this.props.align === 'right',
            'p-divider-center': (this.isHorizontal && this.props.align === 'center') || (this.isVertical && (!this.props.align || this.props.align === 'center')),
            'p-divider-top': this.isVertical && this.props.align === 'top',
            'p-divider-bottom': this.isVertical && this.props.align === 'bottom',
        }, this.props.className);

        return (
            <div className={dividerClassName} style={this.props.style} role="separator">
                <div className="p-divider-content">
                    {this.props.children}
                </div>
            </div>

        );
    }
}
