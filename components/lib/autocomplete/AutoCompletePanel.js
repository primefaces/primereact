import * as React from 'react';
import { localeOption, PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';

export const AutoCompletePanel = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { ptm, cx } = props;
        const context = React.useContext(PrimeReactContext);

        const _ptm = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

        const getPTOptions = (item, key) => {
            return _ptm(key, {
                context: {
                    selected: props.selectedItem.current === item,
                    disabled: item.disabled
                }
            });
        };

        const getOptionGroupRenderKey = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
        };

        const createFooter = () => {
            if (props.panelFooterTemplate) {
                const content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    _ptm('footer')
                );

                return <div {...footerProps}>{content}</div>;
            }

            return null;
        };

        const createGroupChildren = (optionGroup, i, style) => {
            const groupChildren = props.getOptionGroupChildren(optionGroup);

            return groupChildren.map((item, j) => {
                const key = i + '_' + j;
                const selected = props.selectedItem === item;
                const content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, item, j) : props.field ? ObjectUtils.resolveFieldData(item, props.field) : item;
                const itemProps = mergeProps(
                    {
                        role: 'option',
                        className: cx('item', { optionGroupLabel: props.optionGroupLabel, suggestion: item }),
                        style,
                        onClick: (e) => props.onItemClick(e, item),
                        'aria-selected': selected,
                        'data-group': i,
                        'data-index': j,
                        'data-p-disabled': item.disabled
                    },
                    getPTOptions(item, 'item')
                );

                return (
                    <li key={key} {...itemProps}>
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
                const itemGroupProps = mergeProps(
                    {
                        className: cx('itemGroup'),
                        style,
                        'data-p-highlight': false
                    },
                    _ptm('itemGroup')
                );

                return (
                    <React.Fragment key={key}>
                        <li {...itemGroupProps}>{content}</li>
                        {childrenContent}
                    </React.Fragment>
                );
            } else {
                const content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, suggestion, index) : props.field ? ObjectUtils.resolveFieldData(suggestion, props.field) : suggestion;
                const itemProps = mergeProps(
                    {
                        index,
                        role: 'option',
                        className: cx('item', { suggestion }),
                        style,
                        onClick: (e) => props.onItemClick(e, suggestion),
                        'aria-selected': props.selectedItem.current === suggestion,
                        'data-p-disabled': suggestion.disabled
                    },
                    getPTOptions(suggestion, 'item')
                );

                return (
                    <li key={index} {...itemProps}>
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
                const emptyMessageProps = mergeProps(
                    {
                        className: cx('emptyMessage')
                    },
                    _ptm('emptyMesage')
                );

                const listProps = mergeProps(
                    {
                        className: cx('list')
                    },
                    _ptm('list')
                );

                return (
                    <ul {...listProps}>
                        <li {...emptyMessageProps}>{emptyMessage}</li>
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
                            const listProps = mergeProps(
                                {
                                    id: props.listId,
                                    ref: options.contentRef,
                                    style: options.style,
                                    className: cx('list', { virtualScrollerProps, options }),
                                    role: 'listbox'
                                },
                                _ptm('list')
                            );

                            return <ul {...listProps}>{options.children}</ul>;
                        }
                    }
                };

                return <VirtualScroller ref={props.virtualScrollerRef} {...virtualScrollerProps} pt={_ptm('virtualScroller')} __parentMetadata={{ parent: props.metaData }} />;
            } else {
                const items = createItems();
                const listProps = mergeProps(
                    {
                        id: props.listId,
                        className: cx('list'),
                        role: 'listbox'
                    },
                    _ptm('list')
                );

                const listWrapperProps = mergeProps(
                    {
                        className: cx('listWrapper'),
                        style: { maxHeight: props.scrollHeight || 'auto' }
                    },
                    _ptm('listWrapper')
                );

                return (
                    <div {...listWrapperProps}>
                        <ul {...listProps}>{items}</ul>
                    </div>
                );
            }
        };

        const createElement = () => {
            const style = { ...(props.panelStyle || {}) };
            const content = createContent();
            const footer = createFooter();
            const panelProps = mergeProps(
                {
                    className: classNames(props.panelClassName, cx('panel', { context })),
                    style,
                    onClick: (e) => props.onClick(e)
                },
                _ptm('panel')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: props.in,
                    timeout: { enter: 120, exit: 100 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter: props.onEnter,
                    onEntering: props.onEntering,
                    onEntered: props.onEntered,
                    onExit: props.onExit,
                    onExited: props.onExited
                },
                _ptm('transition')
            );

            return (
                <CSSTransition nodeRef={ref} {...transitionProps}>
                    <div ref={ref} {...panelProps}>
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

AutoCompletePanel.displayName = 'AutoCompletePanel';
