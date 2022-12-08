import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { DropdownItem } from './DropdownItem';

export const DropdownPanel = React.memo(
    React.forwardRef((props, ref) => {
        const virtualScrollerRef = React.useRef(null);
        const filterInputRef = React.useRef(null);
        const isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
        const filterOptions = {
            filter: (e) => onFilterInputChange(e),
            reset: () => props.resetFilter()
        };

        const onEnter = () => {
            props.onEnter(() => {
                if (virtualScrollerRef.current) {
                    const selectedIndex = props.getSelectedOptionIndex();

                    if (selectedIndex !== -1) {
                        setTimeout(() => virtualScrollerRef.current.scrollToIndex(selectedIndex), 0);
                    }
                }
            });
        };

        const onEntered = () => {
            props.onEntered(() => {
                if (props.filter && props.filterInputAutoFocus) {
                    DomHandler.focus(filterInputRef.current, false);
                }
            });
        };

        const onFilterInputChange = (event) => {
            virtualScrollerRef.current && virtualScrollerRef.current.scrollToIndex(0);
            props.onFilterInputChange && props.onFilterInputChange(event);
        };

        const createGroupChildren = (optionGroup, style) => {
            const groupChildren = props.getOptionGroupChildren(optionGroup);

            return groupChildren.map((option, j) => {
                const optionLabel = props.getOptionLabel(option);
                const optionKey = j + '_' + props.getOptionRenderKey(option);
                const disabled = props.isOptionDisabled(option);

                return <DropdownItem key={optionKey} label={optionLabel} option={option} style={style} template={props.itemTemplate} selected={props.isSelected(option)} disabled={disabled} onClick={props.onOptionClick} />;
            });
        };

        const createEmptyMessage = (emptyMessage, isFilter) => {
            const message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? 'emptyFilterMessage' : 'emptyMessage');

            return <li className="p-dropdown-empty-message">{message}</li>;
        };

        const createItem = (option, index, scrollerOptions = {}) => {
            const style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            if (props.optionGroupLabel) {
                const groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
                const groupChildrenContent = createGroupChildren(option, style);
                const key = index + '_' + props.getOptionGroupRenderKey(option);

                return (
                    <React.Fragment key={key}>
                        <li className="p-dropdown-item-group" style={style}>
                            {groupContent}
                        </li>
                        {groupChildrenContent}
                    </React.Fragment>
                );
            } else {
                const optionLabel = props.getOptionLabel(option);
                const optionKey = index + '_' + props.getOptionRenderKey(option);
                const disabled = props.isOptionDisabled(option);

                return <DropdownItem key={optionKey} label={optionLabel} option={option} style={style} template={props.itemTemplate} selected={props.isSelected(option)} disabled={disabled} onClick={props.onOptionClick} />;
            }
        };

        const createItems = () => {
            if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
                return props.visibleOptions.map(createItem);
            } else if (props.hasFilter) {
                return createEmptyMessage(props.emptyFilterMessage, true);
            }

            return createEmptyMessage(props.emptyMessage);
        };

        const createFilterClearIcon = () => {
            if (props.showFilterClear && props.filterValue) {
                const ariaLabel = localeOption('clear');

                return <i className="p-dropdown-filter-clear-icon pi pi-times" aria-label={ariaLabel} onClick={() => props.onFilterClearIconClick(() => DomHandler.focus(filterInputRef.current))}></i>;
            }

            return null;
        };

        const createFilter = () => {
            if (props.filter) {
                const clearIcon = createFilterClearIcon();
                const containerClassName = classNames('p-dropdown-filter-container', { 'p-dropdown-clearable-filter': !!clearIcon });
                let content = (
                    <div className={containerClassName}>
                        <input
                            ref={filterInputRef}
                            type="text"
                            autoComplete="off"
                            className="p-dropdown-filter p-inputtext p-component"
                            placeholder={props.filterPlaceholder}
                            onKeyDown={props.onFilterInputKeyDown}
                            onChange={onFilterInputChange}
                            value={props.filterValue}
                        />
                        {clearIcon}
                        <i className="p-dropdown-filter-icon pi pi-search"></i>
                    </div>
                );

                if (props.filterTemplate) {
                    const defaultContentOptions = {
                        className: containerClassName,
                        element: content,
                        filterOptions: filterOptions,
                        filterInputKeyDown: props.onFilterInputKeyDown,
                        filterInputChange: onFilterInputChange,
                        filterIconClassName: 'p-dropdown-filter-icon pi pi-search',
                        clearIcon: clearIcon,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                return <div className="p-dropdown-header">{content}</div>;
            }

            return null;
        };

        const createContent = () => {
            if (props.virtualScrollerOptions) {
                const virtualScrollerProps = {
                    ...props.virtualScrollerOptions,
                    ...{
                        style: { ...props.virtualScrollerOptions.style, ...{ height: props.scrollHeight } },
                        className: classNames('p-dropdown-items-wrapper', props.virtualScrollerOptions.className),
                        items: props.visibleOptions,
                        autoSize: true,
                        onLazyLoad: (event) => props.virtualScrollerOptions.onLazyLoad({ ...event, ...{ filter: props.filterValue } }),
                        itemTemplate: (item, options) => item && createItem(item, options.index, options),
                        contentTemplate: (options) => {
                            const className = classNames('p-dropdown-items', options.className);
                            const content = isEmptyFilter ? createEmptyMessage() : options.children;

                            return (
                                <ul ref={options.contentRef} className={className} role="listbox">
                                    {content}
                                </ul>
                            );
                        }
                    }
                };

                return <VirtualScroller ref={virtualScrollerRef} {...virtualScrollerProps} />;
            } else {
                const items = createItems();

                return (
                    <div className="p-dropdown-items-wrapper" style={{ maxHeight: props.scrollHeight || 'auto' }}>
                        <ul className="p-dropdown-items" role="listbox">
                            {items}
                        </ul>
                    </div>
                );
            }
        };

        const createElement = () => {
            const className = classNames('p-dropdown-panel p-component', props.panelClassName, {
                'p-input-filled': PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': PrimeReact.ripple === false
            });
            const filter = createFilter();
            const content = createContent();

            return (
                <CSSTransition
                    nodeRef={ref}
                    classNames="p-connected-overlay"
                    in={props.in}
                    timeout={{ enter: 120, exit: 100 }}
                    options={props.transitionOptions}
                    unmountOnExit
                    onEnter={onEnter}
                    onEntering={props.onEntering}
                    onEntered={onEntered}
                    onExit={props.onExit}
                    onExited={props.onExited}
                >
                    <div ref={ref} className={className} style={props.panelStyle} onClick={props.onClick}>
                        {filter}
                        {content}
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

DropdownPanel.displayName = 'DropdownPanel';
