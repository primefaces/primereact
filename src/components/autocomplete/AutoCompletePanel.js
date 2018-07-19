import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ObjectUtils from '../utils/ObjectUtils';

export class AutoCompletePanel extends Component {

    static defaultProps = {
        suggestions: null,
        field: null,
        appendTo: null,
        itemTemplate: null,
        onItemClick: null,
        scrollHeight: '200px'
    }

    static propTypes = {
        suggestions: PropTypes.array,
        field: PropTypes.string,
        appendTo: PropTypes.any,
        itemTemplate: PropTypes.func,
        onItemClick: PropTypes.func,
        scrollHeight: PropTypes.string
    };

    renderElement() {
        let items;

        if (this.props.suggestions) {
            items = this.props.suggestions.map((suggestion, index) => {
                let itemContent = this.props.itemTemplate ? this.props.itemTemplate(suggestion) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field) : suggestion;

                return (
                    <li key={index + '_item'} className="ui-autocomplete-list-item ui-corner-all" onClick={(e) => this.props.onItemClick(e, suggestion)}>{itemContent}</li>
                );
            });
        }

        return (
            <div ref={(el) => this.element = el} className="ui-autocomplete-panel ui-widget-content ui-corner-all ui-input-overlay ui-shadow" style={{ maxHeight: this.props.scrollHeight }}>
                <ul className="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                    {items}
                </ul>
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