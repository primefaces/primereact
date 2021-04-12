import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from '../transition/CSSTransition';
import { Portal } from '../portal/Portal';

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
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.props.onEnter} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={this.props.className} style={this.props.style} onClick={this.props.onClick}>
                    {this.props.children}
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return this.props.inline ? element : <Portal element={element} appendTo={this.props.appendTo} />;
    }

}

export const CalendarPanel = React.forwardRef((props, ref) => <CalendarPanelComponent forwardRef={ref} {...props} />);
