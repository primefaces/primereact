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

        const getOptionRenderKey = (option) => {
            return ObjectUtils.resolveFieldData(option, props.field);
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

        const findKeyIndex = (array, key, value) => {
            return array.findIndex((obj) => obj[key] === value);
        };

        const latestKey = React.useRef({ key: null, index: 0, keyIndex: 0 });

        const createLabelItem = (item, key, index, labelItemProps) => {
            const content = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, item, index) : props.getOptionGroupLabel(item) || item;
            const itemGroupProps = mergeProps(
                {
                    index,
                    className: cx('itemGroup'),
                    'data-p-highlight': false,
                    ...labelItemProps
                },
                _ptm('itemGroup')
            );

            return (
                <li {...itemGroupProps} key={key ? key : null}>
                    {content}
                </li>
            );
        };

        const isOptionSelected = (item) => {
            if (props.selectedItem && props.selectedItem.current && Array.isArray(props.selectedItem.current)) {
                return props.selectedItem.current.some((selectedItem) => ObjectUtils.deepEquals(selectedItem, item));
            } else {
                return ObjectUtils.deepEquals(props.selectedItem.current, item);
            }
        };

        const createListItem = (item, key, index, listItemProps) => {
            const selected = isOptionSelected(item);
            const content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, item, index) : props.field ? ObjectUtils.resolveFieldData(item, props.field) : item;
            const itemProps = mergeProps(
                {
                    index: index,
                    role: 'option',
                    className: cx('item', { optionGroupLabel: props.optionGroupLabel, suggestion: item, selected: selected }),
                    onClick: (e) => props.onItemClick(e, item),
                    'aria-selected': selected,
                    ...listItemProps
                },
                getPTOptions(item, 'item')
            );

            return (
                <li key={key} {...itemProps}>
                    {content}
                    <Ripple />
                </li>
            );
        };

        const createGroupChildren = (optionGroup, i) => {
            const groupChildren = props.getOptionGroupChildren(optionGroup);

            return groupChildren.map((item, j) => {
                const key = i + '_' + j;
                const itemProps = mergeProps({
                    'data-group': i,
                    'data-index': j,
                    'data-p-disabled': item.disabled
                });

                return createListItem(item, key, j, itemProps);
            });
        };

        const createItem = (suggestion, index, scrollerOptions = {}) => {
            const style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            if (props.optionGroupLabel) {
                if (props.virtualScrollerOptions) {
                    const keyIndex = findKeyIndex(props.suggestions, props.optionGroupLabel, suggestion);

                    if (keyIndex !== -1) {
                        latestKey.current = { key: suggestion, index, keyIndex };
                        const key = index + '_' + getOptionGroupRenderKey(suggestion);

                        return createLabelItem(suggestion, key, index, { style });
                    }

                    const key = index + '_' + latestKey.current.keyIndex;
                    const itemProps = mergeProps({
                        style,
                        'data-group': latestKey.current.keyIndex,
                        'data-index': index - latestKey.current.index - 1,
                        'data-p-disabled': suggestion.disabled
                    });

                    return createListItem(suggestion, key, index, itemProps);
                }

                const childrenContent = createGroupChildren(suggestion, index, style);
                const key = index + '_' + getOptionGroupRenderKey(suggestion);

                return (
                    <React.Fragment key={key}>
                        {createLabelItem(suggestion, undefined, index, { style })}
                        {childrenContent}
                    </React.Fragment>
                );
            }

            const key = `${index}_${ObjectUtils.isObject(suggestion) ? getOptionRenderKey(suggestion) : suggestion}`;
            const itemProps = mergeProps(
                {
                    style,
                    'data-p-disabled': suggestion.disabled
                },
                getPTOptions(suggestion, 'item')
            );

            return createListItem(suggestion, key, index, itemProps);
        };

        const createItems = () => {
            return props.suggestions ? props.suggestions.map(createItem) : null;
        };

        const flattenGroupedItems = (items) => {
            try {
                return items?.map((item) => [item?.[props?.optionGroupLabel], ...item?.[props?.optionGroupChildren]]).flat();
            } catch (e) {}
        };

        const createContent = () => {
            if (props.showEmptyMessage && ObjectUtils.isEmpty(props.suggestions)) {
                const emptyMessage = props.emptyMessage || localeOption('emptyMessage');
                const emptyMessageProps = mergeProps(
                    {
                        className: cx('emptyMessage')
                    },
                    _ptm('emptyMessage')
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
                const items = props.suggestions ? (props.optionGroupLabel ? flattenGroupedItems(props?.suggestions) : props.suggestions) : null;
                const virtualScrollerProps = {
                    ...props.virtualScrollerOptions,
                    ...{
                        style: { ...props.virtualScrollerOptions.style, ...{ height: props.scrollHeight } },
                        autoSize: true,
                        items: items,
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
            }

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
        };

        const createElement = () => {
            const style = { ...(props.panelStyle || {}) };
            const content = createContent();
            const footer = createFooter();
            const panelProps = mergeProps(
                {
                    className: classNames(props.panelClassName, cx('panel', { context })),
                    style,
                    onClick: (e) => props.onClick(e),
                    'data-pr-is-overlay': true
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
