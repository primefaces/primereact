import * as React from 'react';
import { ariaLabel, localeOption, PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps } from '../hooks/Hooks';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { DropdownItem } from './DropdownItem';

export const DropdownPanel = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { ptm, cx, sx } = props;
        const context = React.useContext(PrimeReactContext);

        const filterInputRef = React.useRef(null);
        const isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
        const ariaSetSize = props.visibleOptions ? props.visibleOptions.length : 0;
        const filterOptions = {
            filter: (e) => onFilterInputChange(e),
            reset: () => props.resetFilter()
        };

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
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
            props.onFilterInputChange && props.onFilterInputChange(event);
        };

        const createFooter = () => {
            if (props.panelFooterTemplate) {
                const content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    getPTOptions('footer')
                );

                return <div {...footerProps}>{content}</div>;
            }

            return null;
        };

        const changeFocusedItemOnHover = (event, index) => {
            if (props.focusOnHover) {
                props?.changeFocusedOptionIndex?.(event, index);
            }
        };

        const createEmptyMessage = (emptyMessage, isFilter) => {
            const message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? 'emptyFilterMessage' : 'emptyMessage');
            const emptyMessageProps = mergeProps(
                {
                    className: cx('emptyMessage')
                },
                getPTOptions('emptyMessage')
            );

            return <li {...emptyMessageProps}>{message}</li>;
        };

        const createItem = (option, index, scrollerOptions = {}) => {
            let style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            style = { ...style, ...option.style };

            if (option.group && props.optionGroupLabel) {
                const { optionGroupLabel } = props;
                const groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
                const key = index + '_' + props.getOptionGroupRenderKey(option);
                const itemGroupProps = mergeProps(
                    {
                        className: cx('itemGroup', { optionGroupLabel }),
                        style,
                        'data-p-highlight': props.selected
                    },
                    getPTOptions('itemGroup')
                );
                const itemGroupLabelProps = mergeProps(
                    {
                        className: cx('itemGroupLabel')
                    },
                    getPTOptions('itemGroupLabel')
                );

                return (
                    <li key={key} {...itemGroupProps}>
                        <span {...itemGroupLabelProps}>{groupContent}</span>
                    </li>
                );
            }

            const optionKey = props.getOptionRenderKey(option) + '_' + index;
            const optionLabel = props.getOptionLabel(option);
            const disabled = props.isOptionDisabled(option);

            return (
                <DropdownItem
                    key={optionKey}
                    label={optionLabel}
                    index={index}
                    focusedOptionIndex={props.focusedOptionIndex}
                    option={option}
                    ariaSetSize={ariaSetSize}
                    onInputKeyDown={props.onInputKeyDown}
                    style={style}
                    template={props.itemTemplate}
                    selected={props.isSelected(option)}
                    highlightOnSelect={props.highlightOnSelect}
                    disabled={disabled}
                    onClick={props.onOptionClick}
                    onMouseMove={changeFocusedItemOnHover}
                    ptm={ptm}
                    cx={cx}
                    checkmark={props.checkmark}
                />
            );
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
                const ariaLabelFilterClear = localeOption('clear');
                const clearIconProps = mergeProps(
                    {
                        className: cx('filterClearIcon'),
                        'aria-label': ariaLabelFilterClear,
                        onClick: () => props.onFilterClearIconClick(() => DomHandler.focus(filterInputRef.current))
                    },
                    getPTOptions('filterClearIcon')
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
                const filterIconProps = mergeProps(
                    {
                        className: cx('filterIcon')
                    },
                    getPTOptions('filterIcon')
                );
                const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
                const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });
                const filterContainerProps = mergeProps(
                    {
                        className: cx('filterContainer', { clearIcon })
                    },
                    getPTOptions('filterContainer')
                );
                const filterInputProps = mergeProps(
                    {
                        ref: filterInputRef,
                        type: 'text',
                        autoComplete: 'off',
                        className: cx('filterInput', { context }),
                        placeholder: props.filterPlaceholder,
                        onKeyDown: props.onFilterInputKeyDown,
                        onChange: (e) => onFilterInputChange(e),
                        value: props.filterValue
                    },
                    getPTOptions('filterInput')
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
                        className: classNames('p-dropdown-filter-container', { 'p-dropdown-clearable-filter': !!clearIcon }),
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
                        className: cx('header')
                    },
                    getPTOptions('header')
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
                            const children = options.children || [];
                            const emptyMessage = props.hasFilter ? props.emptyFilterMessage : props.emptyMessage;
                            const content = isEmptyFilter || children?.length === 0 ? createEmptyMessage(emptyMessage) : children;
                            const listProps = mergeProps(
                                {
                                    ref: options.contentRef,
                                    style: options.style,
                                    className: classNames(options.className, cx('list', { virtualScrollerProps: props.virtualScrollerOptions })),
                                    role: 'listbox',
                                    'aria-label': ariaLabel('listLabel')
                                },
                                getPTOptions('list')
                            );

                            return <ul {...listProps}>{content}</ul>;
                        }
                    }
                };

                return <VirtualScroller ref={props.virtualScrollerRef} {...virtualScrollerProps} pt={ptm('virtualScroller')} />;
            }

            const items = createItems();
            const wrapperProps = mergeProps(
                {
                    className: cx('wrapper'),
                    style: sx('wrapper')
                },
                getPTOptions('wrapper')
            );

            const listProps = mergeProps(
                {
                    className: cx('list'),
                    role: 'listbox',
                    'aria-label': ariaLabel('listLabel')
                },
                getPTOptions('list')
            );

            return (
                <div {...wrapperProps}>
                    <ul {...listProps}>{items}</ul>
                </div>
            );
        };

        const createElement = () => {
            const filter = createFilter();
            const content = createContent();
            const footer = createFooter();
            const panelProps = mergeProps(
                {
                    className: classNames(props.panelClassName, cx('panel', { context })),
                    style: sx('panel'),
                    onClick: props.onClick,
                    'data-pr-is-overlay': true
                },
                getPTOptions('panel')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: props.in,
                    timeout: { enter: 120, exit: 100 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter: onEnter,
                    onEntered: onEntered,
                    onExit: props.onExit,
                    onExited: props.onExited
                },
                getPTOptions('transition')
            );

            return (
                <CSSTransition nodeRef={ref} {...transitionProps}>
                    <div ref={ref} {...panelProps}>
                        {props.firstFocusableElement}
                        {filter}
                        {content}
                        {footer}
                        {props.lastFocusableElement}
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

DropdownPanel.displayName = 'DropdownPanel';
