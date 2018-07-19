import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class MultiSelectPanel extends Component {

    static defaultProps = {
        appendTo: null,
        header: null,
        onClick: null,
        scrollHeight: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        header: PropTypes.element,
        onClick: PropTypes.func,
        scrollHeight: PropTypes.string
    };

    renderElement() {
        return (
            <div className="ui-multiselect-panel ui-widget-content ui-corner-all ui-helper-hidden ui-input-overlay ui-shadow"
                ref={(el) => this.element = el} onClick={this.props.onClick}>
                {this.props.header}
                <div className="ui-multiselect-items-wrapper" style={{ maxHeight: this.props.scrollHeight }}>
                    <ul className="ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                        {this.props.children}
                    </ul>
                </div>
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