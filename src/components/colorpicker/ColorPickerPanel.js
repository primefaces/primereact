import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from 'react-transition-group';

class ColorPickerPanelComponent extends Component {

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
            'p-colorpicker-overlay-panel': !this.props.inline,
            'p-disabled': this.props.disabled
        });

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.props.onEnter} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={className} onClick={this.props.onClick}>
                    {this.props.children}
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return this.props.inline ? element : ReactDOM.createPortal(element, this.props.appendTo || document.body);
    }
}

export const ColorPickerPanel = React.forwardRef((props, ref) => <ColorPickerPanelComponent forwardRef={ref} {...props} />);
