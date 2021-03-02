import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from 'react-transition-group';

class AutoCompletePanelComponent extends Component {

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
        panelStyle: null,
        forwardRef: null,
        onClick: null
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
        panelStyle: PropTypes.object,
        forwardRef: PropTypes.any,
        onClick: PropTypes.func
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
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.props.onEnter} onEntering={this.props.onEntering} onEntered={this.props.onEntered} onExit={this.props.onExit}>
                <div ref={this.props.forwardRef} className={panelClassName} style={panelStyle} onClick={this.props.onClick}>
                    <ul className="p-autocomplete-items" role="listbox" id={this.props.listId}>
                        {items}
                    </ul>
                </div>
            </CSSTransition>
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

export const AutoCompletePanel = React.forwardRef((props, ref) => <AutoCompletePanelComponent forwardRef={ref} {...props} />);
