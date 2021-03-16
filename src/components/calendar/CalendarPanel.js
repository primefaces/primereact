import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

class CalendarPanelComponent extends Component {

    static defaultProps = {
        appendTo: null,
        style: null,
        className: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string
    };

    renderElement() {
        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.props.onEnter} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={this.props.className} style={this.props.style} onClick={this.props.onClick}>
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

export const CalendarPanel = React.forwardRef((props, ref) => <CalendarPanelComponent forwardRef={ref} {...props} />);
