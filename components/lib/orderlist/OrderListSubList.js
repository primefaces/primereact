import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { SearchIcon } from '../icons/search';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';

export const OrderListSubList = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { ptm, cx } = props;

        const _ptm = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

        const getPTOptions = (item, key) => {
            return _ptm(key, {
                context: {
                    selected: isSelected(item)
                }
            });
        };

        const dragging = React.useRef(null);
        const draggedItemIndex = React.useRef(null);
        const dragOverItemIndex = React.useRef(null);
        const listElementRef = React.useRef(null);
        const filterOptions = {
            filter: (e) => props.onFilterInputChange(e),
            reset: () => props.resetFilter()
        };

        const isSelected = (item) => {
            return ObjectUtils.findIndexInList(item, props.selection, props.dataKey) !== -1;
        };

        const onDragStart = (event, index) => {
            event.dataTransfer.setData('text', 'orderlist');
            dragging.current = true;
            draggedItemIndex.current = index;
        };

        const onDragOver = (event, index) => {
            if (draggedItemIndex.current !== index && draggedItemIndex.current + 1 !== index) {
                dragOverItemIndex.current = index;
                !props.isUnstyled() && DomHandler.addClass(event.target, 'p-orderlist-droppoint-highlight');
                event.target.setAttribute('data-p-orderlist-droppoint-highlight', true);
                event.preventDefault();
            }
        };

        const onDragLeave = (event) => {
            dragOverItemIndex.current = null;
            !props.isUnstyled() && DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');
            event.target.setAttribute('data-p-orderlist-droppoint-highlight', false);
        };

        const onDrop = (event) => {
            let dropIndex = draggedItemIndex.current > dragOverItemIndex.current ? dragOverItemIndex.current : dragOverItemIndex.current === 0 ? 0 : dragOverItemIndex.current - 1;
            let value = [...props.value];

            ObjectUtils.reorderArray(value, draggedItemIndex.current, dropIndex);
            dragOverItemIndex.current = null;
            !props.isUnstyled() && DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');
            event.target.setAttribute('data-p-orderlist-droppoint-highlight', false);

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: value
                });
            }
        };

        const onDragEnd = (event) => {
            dragging.current = false;
        };

        const onListMouseMove = (event) => {
            if (dragging.current) {
                const offsetY = listElementRef.current.getBoundingClientRect().top + DomHandler.getWindowScrollTop();
                const bottomDiff = offsetY + listElementRef.current.clientHeight - event.pageY;
                const topDiff = event.pageY - offsetY;

                if (bottomDiff < 25 && bottomDiff > 0) listElementRef.current.scrollTop += 15;
                else if (topDiff < 25 && topDiff > 0) listElementRef.current.scrollTop -= 15;
            }
        };

        const onFilterInputKeyDown = (event) => {
            //enter
            if (event.which === 13) {
                event.preventDefault();
            }
        };

        const createDropPoint = (index, key) => {
            const droppointProps = mergeProps(
                {
                    className: cx('droppoint'),
                    onDragOver: (e) => onDragOver(e, index + 1),
                    onDragLeave: onDragLeave,
                    onDrop: onDrop
                },
                _ptm('droppoint')
            );

            return <li key={key} {...droppointProps}></li>;
        };

        const createHeader = () => {
            const headerProps = mergeProps(
                {
                    className: cx('header')
                },
                _ptm('header')
            );

            return props.header ? <div {...headerProps}>{props.header}</div> : null;
        };

        React.useImperativeHandle(ref, () => ({
            getElement: () => listElementRef.current
        }));

        const createItems = () => {
            if (props.value) {
                return props.value.map((item, i) => {
                    const content = props.itemTemplate ? props.itemTemplate(item) : item;
                    const key = props.parentId + '_' + i;
                    const focused = props.focused && props.focusedOptionId === key;
                    const selected = isSelected(item);

                    if (props.dragdrop) {
                        const itemProps = mergeProps(
                            {
                                id: key,
                                role: 'option',
                                draggable: 'true',
                                onClick: (e) => props.onItemClick({ originalEvent: e, value: item, index: i }),
                                onMouseDown: props.onOptionMouseDown,
                                onDragStart: (e) => onDragStart(e, i),
                                onDragEnd: onDragEnd,
                                className: classNames(props.className, cx('item', { selected, focused })),
                                'aria-selected': selected,
                                'data-p-highlight': selected,
                                'data-p-focused': focused
                            },
                            getPTOptions(item, 'item')
                        );

                        let items = [];

                        if (i === 0) {
                            items.push(createDropPoint(item, i, key + '_droppoint_start'));
                        }

                        items.push(
                            <li key={key} {...itemProps}>
                                {content}
                                {/*<Ripple />*/}
                            </li>
                        );

                        items.push(createDropPoint(i, key + '_droppoint'));

                        return items;
                    } else {
                        const itemProps = mergeProps(
                            {
                                id: key,
                                role: 'option',
                                onClick: (e) => props.onItemClick({ originalEvent: e, value: item, index: i }),
                                onMouseDown: props.onOptionMouseDown,
                                className: classNames(props.className, cx('item', { selected, focused })),
                                'aria-selected': selected,
                                'data-p-highlight': selected,
                                'data-p-focused': focused
                            },
                            getPTOptions(item, 'item')
                        );

                        return (
                            <li key={key} {...itemProps}>
                                {content}
                                <Ripple />
                            </li>
                        );
                    }
                });
            }

            return null;
        };

        const createList = () => {
            const items = createItems();
            const listProps = mergeProps(
                {
                    ref: listElementRef,
                    className: cx('list'),
                    style: props.listStyle,
                    onDragOver: onListMouseMove,
                    role: 'listbox',
                    onFocus: props.onListFocus,
                    onBlur: props.onListBlur,
                    onKeyDown: props.onListKeyDown,
                    tabIndex: props.tabIndex,
                    'aria-activedescendant': props.focused ? props.focusedOptionId : null,
                    'aria-label': props.ariaLabel,
                    'aria-labelledby': props.ariaLabelledBy,
                    'aria-multiselectable': true
                },
                _ptm('list')
            );

            return <ul {...listProps}>{items}</ul>;
        };

        const createFilter = () => {
            const searchIconProps = mergeProps(
                {
                    className: cx('icon')
                },
                _ptm('icon')
            );
            const icon = props.filterIcon || <SearchIcon {...searchIconProps} />;
            const filterIcon = IconUtils.getJSXIcon(icon, { ...searchIconProps }, { props });

            if (props.filter) {
                const filterProps = mergeProps(
                    {
                        className: cx('filter')
                    },
                    _ptm('filter')
                );

                const filterInputProps = mergeProps(
                    {
                        type: 'text',
                        value: props.filterValue,
                        onChange: props.onFilter,
                        onKeyDown: onFilterInputKeyDown,
                        placeholder: props.placeholder,
                        className: cx('filterInput')
                    },
                    _ptm('filterInput')
                );

                const filterIconProps = mergeProps(
                    {
                        className: cx('filterIcon')
                    },
                    _ptm('filterIcon')
                );

                let content = (
                    <div {...filterProps}>
                        <input {...filterInputProps} />
                        <span {...filterIconProps}>{filterIcon}</span>
                    </div>
                );

                if (props.filterTemplate) {
                    const defaultContentOptions = {
                        className: 'p-orderlist-filter',
                        inputProps: {
                            inputClassName: 'p-orderlist-filter-input p-inputtext p-component',
                            onChange: props.onFilter,
                            onKeyDown: onFilterInputKeyDown
                        },
                        filterOptions: filterOptions,
                        iconClassName: 'p-orderlist-filter-icon',
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                const filterContainerProps = mergeProps(
                    {
                        className: cx('filterContainer')
                    },
                    _ptm('filterContainer')
                );

                return <div {...filterContainerProps}>{content}</div>;
            }

            return null;
        };

        const header = createHeader();
        const filter = createFilter();
        const list = createList();

        const containerProps = mergeProps(
            {
                className: cx('container')
            },
            _ptm('container')
        );

        return (
            <div {...containerProps}>
                {header}
                {filter}
                {list}
            </div>
        );
    })
);

OrderListSubList.displayName = 'OrderListSubList';
