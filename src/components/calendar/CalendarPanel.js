import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class CalendarPanel extends Component {

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
            <div ref={(el) => this.element = el} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo)
            return ReactDOM.createPortal(element, this.props.appendTo);
        else
            return element;
    }

}