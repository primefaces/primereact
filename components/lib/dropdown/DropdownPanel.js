import * as React from 'react';
import PrimeReact, { localeOption, PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { DropdownItem } from './DropdownItem';

export const DropdownPanel = React.memo(
    React.forwardRef((props, ref) => {
        const ptm = props.ptm;
        const context = React.useContext(PrimeReactContext);
        const virtualScrollerRef = React.useRef(null);
        const filterInputRef = React.useRef(null);
        const isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
        const filterOptions = {
            filter: (e) => onFilterInputChange(e),
            reset: () => props.resetFilter()
        };

        const onEnter = () => {
            props.onEnter(() => {
                if (props.virtualScrollerRef.current) {
                    const selectedIndex = props.getSelectedOptionIndex();

                    if (selectedIndex !== -1) {
                        setTimeout(() => props.virtualScrollerRef.current.scrollToIndex(selectedIndex), 0);
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
            props.virtualScrollerRef.current && props.virtualScrollerRef.current.scrollToIndex(0);
            props.onFilterInputChange && props.onFilterInputChange(event);
        };

        const createFooter = () => {
            if (props.panelFooterTemplate) {
                const content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
                const footerProps = mergeProps(
                    {
                        className: 'p-dropdown-footer'
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{content}</div>;
            }

            return null;
        };

        const createGroupChildren = (optionGroup, style) => {
            const groupChildren = props.getOptionGroupChildren(optionGroup);

            return groupChildren.map((option, j) => {
                const optionLabel = props.getOptionLabel(option);
                const optionKey = j + '_' + props.getOptionRenderKey(option);
                const disabled = props.isOptionDisabled(option);

                return <DropdownItem key={optionKey} label={optionLabel} option={option} style={style} template={props.itemTemplate} selected={props.isSelected(option)} disabled={disabled} onClick={props.onOptionClick} ptm={ptm} />;
            });
        };

        const createEmptyMessage = (emptyMessage, isFilter) => {
            const message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? 'emptyFilterMessage' : 'emptyMessage');
            const emptyMessageProps = mergeProps(
                {
                    className: 'p-dropdown-empty-message'
                },
                ptm('emptyMessage')
            );

            return <li {...emptyMessageProps}>{message}</li>;
        };

        const createItem = (option, index, scrollerOptions = {}) => {
            let style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            style = { ...style, ...option.style };

            if (props.optionGroupLabel) {
                const groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
                const groupChildrenContent = createGroupChildren(option, style);
                const key = index + '_' + props.getOptionGroupRenderKey(option);
                const itemGroupProps = mergeProps(
                    {
                        className: 'p-dropdown-item-group',
                        style
                    },
                    ptm('itemGroup')
                );

                return (
                    <React.Fragment key={key}>
                        <li {...itemGroupProps}>{groupContent}</li>
                        {groupChildrenContent}
                    </React.Fragment>
                );
            } else {
                const optionLabel = props.getOptionLabel(option);
                const optionKey = index + '_' + props.getOptionRenderKey(option);
                const disabled = props.isOptionDisabled(option);

                return <DropdownItem key={optionKey} label={optionLabel} option={option} style={style} template={props.itemTemplate} selected={props.isSelected(option)} disabled={disabled} onClick={props.onOptionClick} ptm={ptm} />;
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
                const clearIconProps = mergeProps(
                    {
                        className: 'p-dropdown-filter-clear-icon',
                        'aria-label': ariaLabel,
                        onClick: () => props.onFilterClearIconClick(() => DomHandler.focus(filterInputRef.current))
                    },
                    ptm('clearIcon')
                );
                const icon = props.filterClearIcon || <TimesIcon {...clearIconProps} />;
                const filterClearIcon = IconUtils.getJSXIcon(icon, { ...clearIconProps }, { props });

                return filterClearIcon;
            }

            return null;
        };

        const createFilter = () => {
            if (props.filter) {
                const clearIcon = createFilterClearIcon();
                const containerClassName = classNames('p-dropdown-filter-container', { 'p-dropdown-clearable-filter': !!clearIcon });
                const iconClassName = 'p-dropdown-filter-icon';
                const filterIconProps = mergeProps(
                    {
                        className: iconClassName
                    },
                    ptm('filterIcon')
                );
                const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
                const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });
                const filterContainerProps = mergeProps(
                    {
                        className: containerClassName
                    },
                    ptm('filterContainer')
                );
                const filterInputProps = mergeProps(
                    {
                        ref: filterInputRef,
                        type: 'text',
                        autoComplete: 'off',
                        className: 'p-dropdown-filter p-inputtext p-component',
                        placeholder: props.filterPlaceholder,
                        onKeyDown: props.onFilterInputKeyDown,
                        onChange: (e) => onFilterInputChange(e),
                        value: props.filterValue
                    },
                    ptm('filterInput')
                );
                let content = (
                    <div {...filterContainerProps}>
                        <input {...filterInputProps} />
                        {clearIcon}
                        {filterIcon}
                    </div>
                );

                if (props.filterTemplate) {
                    const defaultContentOptions = {
                        className: containerClassName,
                        element: content,
                        filterOptions: filterOptions,
                        filterInputKeyDown: props.onFilterInputKeyDown,
                        filterInputChange: onFilterInputChange,
                        filterIconClassName: 'p-dropdown-filter-icon',
                        clearIcon: clearIcon,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                const headerProps = mergeProps(
                    {
                        className: 'p-dropdown-header'
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{content}</div>;
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
                            const emptyMessage = props.hasFilter ? props.emptyFilterMessage : props.emptyMessage;
                            const content = isEmptyFilter ? createEmptyMessage(emptyMessage) : options.children;
                            const listProps = mergeProps(
                                {
                                    ref: options.contentRef,
                                    style: options.style,
                                    className,
                                    role: 'listbox'
                                },
                                ptm('list')
                            );

                            return <ul {...listProps}>{content}</ul>;
                        }
                    }
                };

                return <VirtualScroller ref={props.virtualScrollerRef} {...virtualScrollerProps} pt={ptm('virtualScroller')} />;
            } else {
                const items = createItems();
                const wrapperProps = mergeProps(
                    {
                        className: 'p-dropdown-items-wrapper',
                        style: { maxHeight: props.scrollHeight || 'auto' }
                    },
                    ptm('wrapper')
                );

                const listProps = mergeProps(
                    {
                        className: 'p-dropdown-items',
                        role: 'listbox'
                    },
                    ptm('list')
                );

                return (
                    <div {...wrapperProps}>
                        <ul {...listProps}>{items}</ul>
                    </div>
                );
            }
        };

        const createElement = () => {
            const className = classNames('p-dropdown-panel p-component', props.panelClassName, {
                'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
            });
            const filter = createFilter();
            const content = createContent();
            const footer = createFooter();
            const panelProps = mergeProps(
                {
                    ref,
                    className,
                    style: props.panelStyle,
                    onClick: props.onClick
                },
                ptm('panel')
            );

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
                    <div {...panelProps}>
                        {filter}
                        {content}
                        {footer}
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

DropdownPanel.displayName = 'DropdownPanel';
