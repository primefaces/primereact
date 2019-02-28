import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class ColorPickerPanel extends Component {

    static defaultProps = {
        appendTo: null,
        inline: false,
        disabled: false,
        onClick: null
    }

    static propTypes = {
        appendTo: PropTypes.any,
        inline: PropTypes.bool,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    }

    renderElement() {
        let className = classNames('p-colorpicker-panel', {
            'p-colorpicker-overlay-panel p-input-overlay': !this.props.inline,
            'p-disabled': this.props.disabled
        });

        return (
            <div ref={(el) => this.element = el} className={className} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
    }
}