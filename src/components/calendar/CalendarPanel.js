import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

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
            <div ref={(el) => {this.element = el; if(this.props.forwardRef) this.props.forwardRef(el)}} className={this.props.className} style={this.props.style}>
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

export const CalendarPanel = React.forwardRef((props, ref) => <CalendarPanelComponent forwardRef={ref} {...props}/>);
