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
        header: PropTypes.any,
        onClick: PropTypes.func,
        scrollHeight: PropTypes.string
    };

    renderElement() {
        return (
            <div className="p-multiselect-panel p-hidden p-input-overlay"
                ref={(el) => this.element = el} onClick={this.props.onClick}>
                {this.props.header}
                <div className="p-multiselect-items-wrapper" style={{ maxHeight: this.props.scrollHeight }}>
                    <ul className="p-multiselect-items p-multiselect-list p-component" role="listbox" aria-multiselectable={true}>
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
