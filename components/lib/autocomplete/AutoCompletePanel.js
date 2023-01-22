import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { ObjectUtils, classNames } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';

export const AutoCompletePanel = React.memo(
    React.forwardRef((props, ref) => {
        const getOptionGroupRenderKey = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
        };

        const createGroupChildren = (optionGroup, i, style) => {
            const groupChildren = props.getOptionGroupChildren(optionGroup);

            return groupChildren.map((item, j) => {
                const key = i + '_' + j;
                const selected = props.selectedItem === item;
                const content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, item, j) : props.field ? ObjectUtils.resolveFieldData(item, props.field) : item;
                const className = classNames('p-autocomplete-item', { 'p-disabled': item.disabled });

                return (
                    <li key={key} role="option" aria-selected={selected} className={className} style={style} onClick={(e) => props.onItemClick(e, item)} data-group={i} data-index={j}>
                        {content}
                        <Ripple />
                    </li>
                );
            });
        };

        const createItem = (suggestion, index, scrollerOptions = {}) => {
            const style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            if (props.optionGroupLabel) {
                const content = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, suggestion, index) : props.getOptionGroupLabel(suggestion);
                const childrenContent = createGroupChildren(suggestion, index, style);
                const key = index + '_' + getOptionGroupRenderKey(suggestion);

                return (
                    <React.Fragment key={key}>
                        <li className="p-autocomplete-item-group" style={style}>
                            {content}
                        </li>
                        {childrenContent}
                    </React.Fragment>
                );
            } else {
                const content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, suggestion, index) : props.field ? ObjectUtils.resolveFieldData(suggestion, props.field) : suggestion;
                const className = classNames('p-autocomplete-item', { 'p-disabled': suggestion.disabled });

                return (
                    <li key={index} role="option" aria-selected={props.selectedItem === suggestion} className={className} style={style} onClick={(e) => props.onItemClick(e, suggestion)}>
                        {content}
                        <Ripple />
                    </li>
                );
            }
        };

        const createItems = () => {
            return props.suggestions ? props.suggestions.map(createItem) : null;
        };

        const createContent = () => {
            if (props.showEmptyMessage && ObjectUtils.isEmpty(props.suggestions)) {
                const emptyMessage = props.emptyMessage || localeOption('emptyMessage');

                return (
                    <ul className="p-autocomplete-items">
                        <li className="p-autocomplete-item">{emptyMessage}</li>
                    </ul>
                );
            }

            if (props.virtualScrollerOptions) {
                const virtualScrollerProps = {
                    ...props.virtualScrollerOptions,
                    ...{
                        style: { ...props.virtualScrollerOptions.style, ...{ height: props.scrollHeight } },
                        autoSize: true,
                        items: props.suggestions,
                        itemTemplate: (item, options) => item && createItem(item, options.index, options),
                        contentTemplate: (options) => {
                            const className = classNames('p-autocomplete-items', options.className);

                            return (
                                <ul ref={options.contentRef} className={className} role="listbox" id={props.listId}>
                                    {options.children}
                                </ul>
                            );
                        }
                    }
                };

                return <VirtualScroller ref={props.virtualScrollerRef} {...virtualScrollerProps} />;
            } else {
                const items = createItems();

                return (
                    <ul className="p-autocomplete-items" role="listbox" id={props.listId}>
                        {items}
                    </ul>
                );
            }
        };

        const createElement = () => {
            const className = classNames('p-autocomplete-panel p-component', props.panelClassName, {
                'p-input-filled': PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': PrimeReact.ripple === false
            });
            const style = { maxHeight: props.scrollHeight, ...(props.panelStyle || {}) };
            const content = createContent();

            return (
                <CSSTransition
                    nodeRef={ref}
                    classNames="p-connected-overlay"
                    in={props.in}
                    timeout={{ enter: 120, exit: 100 }}
                    options={props.transitionOptions}
                    unmountOnExit
                    onEnter={props.onEnter}
                    onEntering={props.onEntering}
                    onEntered={props.onEntered}
                    onExit={props.onExit}
                    onExited={props.onExited}
                >
                    <div ref={ref} className={className} style={style} onClick={props.onClick}>
                        {content}
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

AutoCompletePanel.displayName = 'AutoCompletePanel';
