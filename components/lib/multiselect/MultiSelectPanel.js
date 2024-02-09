import * as React from 'react';
import { localeOption, PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { MultiSelectHeader } from './MultiSelectHeader';
import { MultiSelectItem } from './MultiSelectItem';

export const MultiSelectPanel = React.memo(
    React.forwardRef((props, ref) => {
        const virtualScrollerRef = React.useRef(null);
        const filterInputRef = React.useRef(null);
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const { ptm, cx, sx, isUnstyled } = props;

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
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
                if (props.filter && props.filterInputAutoFocus && filterInputRef.current) {
                    DomHandler.focus(filterInputRef.current, false);
                }
            });
        };

        const onFilterInputChange = (event) => {
            if (virtualScrollerRef.current) {
                virtualScrollerRef.current.scrollToIndex(0);
            }

            props.onFilterInputChange && props.onFilterInputChange(event);
        };

        const isEmptyFilter = () => {
            return !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
        };

        const createHeader = () => {
            return (
                <MultiSelectHeader
                    hostName={props.hostName}
                    id={props.id}
                    filter={props.filter}
                    filterRef={filterInputRef}
                    filterValue={props.filterValue}
                    filterTemplate={props.filterTemplate}
                    onFilter={onFilterInputChange}
                    filterPlaceholder={props.filterPlaceholder}
                    onClose={props.onCloseClick}
                    showSelectAll={props.showSelectAll}
                    selectAll={props.isAllSelected()}
                    selectAllLabel={props.selectAllLabel}
                    onSelectAll={props.onSelectAll}
                    template={props.panelHeaderTemplate}
                    resetFilter={props.resetFilter}
                    closeIcon={props.closeIcon}
                    filterIcon={props.filterIcon}
                    itemCheckboxIcon={props.itemCheckboxIcon}
                    ptm={ptm}
                    cx={cx}
                    isUnstyled={isUnstyled}
                    metaData={props.metaData}
                />
            );
        };

        const createFooter = () => {
            if (props.panelFooterTemplate) {
                const content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);

                return <div className="p-multiselect-footer">{content}</div>;
            }

            return null;
        };

        const createGroupChildren = (optionGroup, style) => {
            const groupChildren = props.getOptionGroupChildren(optionGroup);

            return groupChildren.map((option, j) => {
                const optionLabel = props.getOptionLabel(option);
                const optionKey = j + '_' + props.getOptionRenderKey(option);
                const disabled = props.isOptionDisabled(option);
                const tabIndex = disabled ? null : props.tabIndex || 0;
                const selected = props.isSelected(option);

                return (
                    <MultiSelectItem
                        hostName={props.hostName}
                        index={j}
                        key={optionKey}
                        focusedOptionIndex={props.focusedOptionIndex}
                        label={optionLabel}
                        option={option}
                        style={style}
                        template={props.itemTemplate}
                        selected={selected}
                        onClick={props.onOptionSelect}
                        tabIndex={tabIndex}
                        disabled={disabled}
                        className={props.itemClassName}
                        checkboxIcon={props.checkboxIcon}
                        ptm={ptm}
                        cx={cx}
                    />
                );
            });
        };

        const createEmptyFilter = () => {
            const emptyFilterMessage = ObjectUtils.getJSXElement(props.emptyFilterMessage, props) || localeOption('emptyFilterMessage');

            const emptyMessageProps = mergeProps(
                {
                    className: cx('emptyMessage')
                },
                getPTOptions('emptyMessage')
            );

            return <li {...emptyMessageProps}>{emptyFilterMessage}</li>;
        };

        const createEmptyContent = () => {
            const emptyMessage = ObjectUtils.getJSXElement(props.emptyMessage, props) || localeOption('emptyMessage');

            const emptyMessageProps = mergeProps(
                {
                    className: cx('emptyMessage')
                },
                getPTOptions('emptyMessage')
            );

            return <li {...emptyMessageProps}>{emptyMessage}</li>;
        };

        const createItem = (option, index, scrollerOptions = {}) => {
            const style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            if (props.optionGroupLabel) {
                const groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
                const groupChildrenContent = createGroupChildren(option, style);
                const key = index + '_' + props.getOptionGroupRenderKey(option);
                const itemGroupProps = mergeProps(
                    {
                        className: cx('itemGroup'),
                        style: sx('itemGroup', { scrollerOptions })
                    },
                    getPTOptions('itemGroup')
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
                const tabIndex = disabled ? null : props.tabIndex || 0;
                const selected = props.isSelected(option);

                return (
                    <MultiSelectItem
                        hostName={props.hostName}
                        key={optionKey}
                        focusedOptionIndex={props.focusedOptionIndex}
                        label={optionLabel}
                        option={option}
                        style={style}
                        index={index}
                        template={props.itemTemplate}
                        selected={selected}
                        onClick={props.onOptionSelect}
                        tabIndex={tabIndex}
                        disabled={disabled}
                        className={props.itemClassName}
                        checkboxIcon={props.checkboxIcon}
                        ptm={ptm}
                        cx={cx}
                    />
                );
            }
        };

        const createItems = () => {
            if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
                return props.visibleOptions.map(createItem);
            } else {
                return props.hasFilter ? createEmptyFilter() : createEmptyContent();
            }
        };

        const createContent = () => {
            if (props.virtualScrollerOptions) {
                const virtualScrollerProps = {
                    ...props.virtualScrollerOptions,
                    ...{
                        style: { ...props.virtualScrollerOptions.style, ...{ height: props.scrollHeight } },
                        className: classNames('p-multiselect-items-wrapper', props.virtualScrollerOptions.className),
                        items: props.visibleOptions,
                        autoSize: true,
                        onLazyLoad: (event) => props.virtualScrollerOptions.onLazyLoad({ ...event, ...{ filter: props.filterValue } }),
                        itemTemplate: (item, options) => item && createItem(item, options.index, options),
                        contentTemplate: (options) => {
                            const content = isEmptyFilter() ? createEmptyFilter() : options.children;

                            const listProps = mergeProps(
                                {
                                    ref: options.contentRef,
                                    style: options.style,
                                    className: classNames(options.className, cx('list', { virtualScrollerProps: props.virtualScrollerOptions })),
                                    role: 'listbox',
                                    'aria-multiselectable': true
                                },
                                getPTOptions('list')
                            );

                            return <ul {...listProps}>{content}</ul>;
                        }
                    }
                };

                return <VirtualScroller ref={virtualScrollerRef} {...virtualScrollerProps} pt={ptm('virtualScroller')} __parentMetadata={{ parent: props.metaData }} />;
            } else {
                const items = createItems();

                const wrapperProps = mergeProps(
                    {
                        className: cx('wrapper'),
                        style: { maxHeight: props.scrollHeight }
                    },
                    getPTOptions('wrapper')
                );

                const listProps = mergeProps(
                    {
                        className: cx('list'),
                        role: 'listbox',
                        'aria-multiselectable': true
                    },
                    getPTOptions('list')
                );

                return (
                    <div {...wrapperProps}>
                        <ul {...listProps}>{items}</ul>
                    </div>
                );
            }
        };

        const createElement = () => {
            const allowOptionSelect = props.allowOptionSelect();
            const header = createHeader();
            const content = createContent();
            const footer = createFooter();

            const panelProps = mergeProps(
                {
                    className: classNames(props.panelClassName, cx('panel', { panelProps: props, context, allowOptionSelect })),
                    style: props.panelStyle,
                    onClick: props.onClick
                },
                getPTOptions('panel')
            );

            if (props.inline) {
                return (
                    <div ref={ref} {...panelProps}>
                        {content}
                        {footer}
                    </div>
                );
            }

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: props.in,
                    timeout: { enter: 120, exit: 100 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter,
                    onEntered,
                    onExit: props.onExit,
                    onExited: props.onExited
                },
                getPTOptions('transition')
            );

            const firstHiddenElementProps = mergeProps(
                {
                    ref: props.firstHiddenFocusableElementOnOverlay,
                    role: 'presentation',
                    'aria-hidden': 'true',
                    className: 'p-hidden-accessible p-hidden-focusable',
                    tabIndex: '0',
                    onFocus: props.onFirstHiddenFocus,
                    'data-p-hidden-accessible': true,
                    'data-p-hidden-focusable': true
                },
                ptm('hiddenFirstFocusableEl')
            );

            const lastHiddenElementProps = mergeProps(
                {
                    ref: props.lastHiddenFocusableElementOnOverlay,
                    role: 'presentation',
                    'aria-hidden': 'true',
                    className: 'p-hidden-accessible p-hidden-focusable',
                    tabIndex: '0',
                    onFocus: props.onLastHiddenFocus,
                    'data-p-hidden-accessible': true,
                    'data-p-hidden-focusable': true
                },
                ptm('hiddenLastFocusableEl')
            );

            return (
                <CSSTransition nodeRef={ref} {...transitionProps}>
                    <div ref={ref} {...panelProps}>
                        <span {...firstHiddenElementProps}></span>
                        {header}
                        {content}
                        {footer}
                        <span {...lastHiddenElementProps}></span>
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        if (props.inline) return element;

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

MultiSelectPanel.displayName = 'MultiSelectPanel';
