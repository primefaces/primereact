import React, { Component } from 'react';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from '../transition/CSSTransition';
import { Portal } from '../portal/Portal';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';

class AutoCompletePanelComponent extends Component {

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

    renderItem(suggestion, index) {
        if (this.props.optionGroupLabel) {
            const groupContent = this.props.optionGroupTemplate ? ObjectUtils.getJSXElement(this.props.optionGroupTemplate, suggestion, index) : this.props.getOptionGroupLabel(suggestion);
            const groupChildrenContent = this.renderGroupChildren(suggestion, index);
            const key = index + '_' + this.getOptionGroupRenderKey(suggestion);

            return (
                <React.Fragment key={key}>
                    <li className="p-autocomplete-item-group">
                        {groupContent}
                    </li>
                    {groupChildrenContent}
                </React.Fragment>
            )
        }
        else {
            let itemContent = this.props.itemTemplate ? ObjectUtils.getJSXElement(this.props.itemTemplate, suggestion, index) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field) : suggestion;

            return (
                <li key={index + '_item'} role="option" aria-selected={this.props.ariaSelected === suggestion} className="p-autocomplete-item" onClick={(e) => this.props.onItemClick(e, suggestion)}>
                    {itemContent}
                    <Ripple />
                </li>
            );
        }
    }

    renderItems() {
        if (this.props.suggestions) {
            return this.props.suggestions.map((suggestion, index) => this.renderItem(suggestion, index));
        }

        return null;
    }

    renderContent() {
        if (this.props.virtualScrollerOptions) {
            const virtualScrollerProps = { ...this.props.virtualScrollerOptions, ...{
                style: {...this.props.virtualScrollerOptions.style, ...{ height: this.props.scrollHeight || 'auto' }},
                items: this.props.suggestions,
                itemTemplate: (item, options) => item && this.renderItem(item, options.index),
                contentTemplate: (options) => {
                    const className = classNames('p-autocomplete-items', options.className);

                    return (
                        <ul ref={options.ref} className={className} role="listbox" id={this.props.listId}>
                            {options.children}
                        </ul>
                    );
                }
            }};

            return <VirtualScroller ref={this.props.virtualScrollerRef} {...virtualScrollerProps} />;
        }
        else {
            const items = this.renderItems();

            return (
                <ul className="p-autocomplete-items" role="listbox" id={this.props.listId}>
                    {items}
                </ul>
            );
        }
    }

    renderElement() {
        const panelClassName = classNames('p-autocomplete-panel p-component', this.props.panelClassName);
        const panelStyle = { maxHeight: this.props.scrollHeight, ...this.props.panelStyle };
        const content = this.renderContent();

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.props.onEnter} onEntering={this.props.onEntering} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={panelClassName} style={panelStyle} onClick={this.props.onClick}>
                    {content}
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
