import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/ClassNames';

export class AutoCompletePanel extends Component {

    static defaultProps = {
        suggestions: null,
        field: null,
        appendTo: null,
        itemTemplate: null,
        onItemClick: null,
        scrollHeight: '200px',
        listId: null,
        ariaSelected: null,
        panelClassName: null,
        panelStyle: null
    }

    static propTypes = {
        suggestions: PropTypes.array,
        field: PropTypes.string,
        appendTo: PropTypes.any,
        itemTemplate: PropTypes.any,
        onItemClick: PropTypes.func,
        scrollHeight: PropTypes.string,
        listId: PropTypes.any,
        ariaSelected: PropTypes.any,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object
    };

    renderElement() {
        const panelClassName = classNames('p-autocomplete-panel p-component', this.props.panelClassName);
        const panelStyle = { maxHeight: this.props.scrollHeight, ...this.props.panelStyle };
        let items;

        if (this.props.suggestions) {
            items = this.props.suggestions.map((suggestion, index) => {
                let itemContent = this.props.itemTemplate ? ObjectUtils.getJSXElement(this.props.itemTemplate, suggestion) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field) : suggestion;

                return (
                    <li key={index + '_item'} role="option" aria-selected={this.props.ariaSelected === suggestion} className="p-autocomplete-item" onClick={(e) => this.props.onItemClick(e, suggestion)}>
                        {itemContent}
                        <Ripple />
                    </li>
                );
            });
        }

        return (
            <div ref={(el) => this.element = el} className={panelClassName} style={panelStyle}>
                <ul className="p-autocomplete-items" role="listbox" id={this.props.listId}>
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
