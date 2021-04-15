import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from '../transition/CSSTransition';
import { Portal } from '../portal/Portal';

class AutoCompletePanelComponent extends Component {

    static defaultProps = {
        suggestions: null,
        field: null,
        appendTo: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        optionGroupTemplate: null,
        itemTemplate: null,
        onItemClick: null,
        scrollHeight: '200px',
        listId: null,
        ariaSelected: null,
        panelClassName: null,
        panelStyle: null,
        forwardRef: null,
        onClick: null,
        getOptionGroupLabel: null,
        getOptionGroupChildren: null
    }

    static propTypes = {
        suggestions: PropTypes.array,
        field: PropTypes.string,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.string,
        optionGroupTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        onItemClick: PropTypes.func,
        scrollHeight: PropTypes.string,
        listId: PropTypes.any,
        ariaSelected: PropTypes.any,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        forwardRef: PropTypes.any,
        onClick: PropTypes.func,
        getOptionGroupLabel: PropTypes.func,
        getOptionGroupChildren: PropTypes.func
    };

    getOptionGroupRenderKey(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
    }

    renderGroupChildren(optionGroup, i) {
        const groupChildren = this.props.getOptionGroupChildren(optionGroup);
        return (
            groupChildren.map((item, j) => {
                let itemContent = this.props.itemTemplate ? ObjectUtils.getJSXElement(this.props.itemTemplate, item, j) : this.props.field ? ObjectUtils.resolveFieldData(item, this.props.field) : item;

                return (
                    <li key={j + '_item'} role="option" aria-selected={this.props.ariaSelected === item} className="p-autocomplete-item" onClick={(e) => this.props.onItemClick(e, item)} data-group={i} data-index={j}>
                        {itemContent}
                        <Ripple />
                    </li>
                );
            })
        )
    }

    renderItems() {
        if (this.props.suggestions) {
            if (this.props.optionGroupLabel) {
                return this.props.suggestions.map((suggestion, i) => {
                    const groupContent = this.props.optionGroupTemplate ? ObjectUtils.getJSXElement(this.props.optionGroupTemplate, suggestion, i) : this.props.getOptionGroupLabel(suggestion);
                    const groupChildrenContent = this.renderGroupChildren(suggestion, i);
                    const key = i + '_' + this.getOptionGroupRenderKey(suggestion);

                    return (
                        <React.Fragment key={key}>
                            <li className="p-autocomplete-item-group">
                                {groupContent}
                            </li>
                            {groupChildrenContent}
                        </React.Fragment>
                    )
                });
            }
            else {
                return this.props.suggestions.map((suggestion, index) => {
                    let itemContent = this.props.itemTemplate ? ObjectUtils.getJSXElement(this.props.itemTemplate, suggestion, index) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field) : suggestion;

                    return (
                        <li key={index + '_item'} role="option" aria-selected={this.props.ariaSelected === suggestion} className="p-autocomplete-item" onClick={(e) => this.props.onItemClick(e, suggestion)}>
                            {itemContent}
                            <Ripple />
                        </li>
                    );
                });
            }
        }

        return null;
    }

    renderElement() {
        const panelClassName = classNames('p-autocomplete-panel p-component', this.props.panelClassName);
        const panelStyle = { maxHeight: this.props.scrollHeight, ...this.props.panelStyle };
        let items = this.renderItems();

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.props.onEnter} onEntering={this.props.onEntering} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={panelClassName} style={panelStyle} onClick={this.props.onClick}>
                    <ul className="p-autocomplete-items" role="listbox" id={this.props.listId} style={{ maxHeight: this.props.scrollHeight || 'auto' }}>
                        {items}
                    </ul>
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} />;
    }
}

export const AutoCompletePanel = React.forwardRef((props, ref) => <AutoCompletePanelComponent forwardRef={ref} {...props} />);
