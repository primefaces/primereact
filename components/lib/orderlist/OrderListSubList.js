import * as React from 'react';
import { SearchIcon } from '../icons/search';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';

export const OrderListSubList = React.memo((props) => {
    const getPTOptions = (item, key) => {
        return props.ptm(key, {
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
        dragging.current = true;
        draggedItemIndex.current = index;

        if (props.dragdropScope) {
            event.dataTransfer.setData('text', 'orderlist');
        }
    };

    const onDragOver = (event, index) => {
        if (draggedItemIndex.current !== index && draggedItemIndex.current + 1 !== index) {
            dragOverItemIndex.current = index;
            DomHandler.addClass(event.target, 'p-orderlist-droppoint-highlight');
            event.preventDefault();
        }
    };

    const onDragLeave = (event) => {
        dragOverItemIndex.current = null;
        DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');
    };

    const onDrop = (event) => {
        let dropIndex = draggedItemIndex.current > dragOverItemIndex.current ? dragOverItemIndex.current : dragOverItemIndex.current === 0 ? 0 : dragOverItemIndex.current - 1;
        let value = [...props.value];

        ObjectUtils.reorderArray(value, draggedItemIndex.current, dropIndex);
        dragOverItemIndex.current = null;
        DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');

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
                className: 'p-orderlist-droppoint',
                onDragOver: (e) => onDragOver(e, index + 1),
                onDragLeave: onDragLeave,
                onDrop: onDrop
            },
            props.ptm('droppoint')
        );

        return <li key={key} {...droppointProps}></li>;
    };

    const createHeader = () => {
        const headerProps = mergeProps(
            {
                className: 'p-orderlist-header'
            },
            props.ptm('header')
        );

        return props.header ? <div {...headerProps}>{props.header}</div> : null;
    };

    const createItems = () => {
        if (props.value) {
            return props.value.map((item, i) => {
                const content = props.itemTemplate ? props.itemTemplate(item) : item;
                const itemClassName = classNames('p-orderlist-item', { 'p-highlight': isSelected(item) }, props.className);
                const key = JSON.stringify(item);

                const itemProps = mergeProps(
                    {
                        className: itemClassName,
                        onClick: (e) => props.onItemClick({ originalEvent: e, value: item, index: i }),
                        onKeyDown: (e) => props.onItemKeyDown({ originalEvent: e, value: item, index: i }),
                        role: 'option',
                        'aria-selected': isSelected(item),
                        draggable: 'true',
                        onDragStart: (e) => onDragStart(e, i),
                        onDragEnd: onDragEnd,
                        tabIndex: props.tabIndex
                    },
                    getPTOptions(item, 'item')
                );

                if (props.dragdrop) {
                    let items = [];

                    if (i === 0) {
                        items.push(createDropPoint(item, i, key + '_droppoint_start'));
                    }

                    items.push(
                        <li key={key} {...itemProps}>
                            {content}
                            <Ripple />
                        </li>
                    );

                    items.push(createDropPoint(i, key + '_droppoint'));

                    return items;
                } else {
                    const itemProps = mergeProps(
                        {
                            className: itemClassName,
                            onClick: (e) => props.onItemClick({ originalEvent: e, value: item, index: i }),
                            onKeyDown: (e) => props.onItemKeyDown({ originalEvent: e, value: item, index: i }),
                            role: 'option',
                            'aria-selected': isSelected(item),
                            tabIndex: props.tabIndex
                        },
                        getPTOptions(item, 'item')
                    );

                    return (
                        <li key={key} {...itemProps}>
                            {content}
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
                className: 'p-orderlist-list',
                style: props.listStyle,
                onDragOver: onListMouseMove,
                role: 'listbox',
                'aria-multiselectable': true
            },
            props.ptm('list')
        );

        return <ul {...listProps}>{items}</ul>;
    };

    const createFilter = () => {
        const iconClassName = 'p-orderlist-filter';
        const searchIconProps = mergeProps(
            {
                className: iconClassName
            },
            props.ptm('icon')
        );
        const icon = props.filterIcon || <SearchIcon {...searchIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...searchIconProps }, { props });

        if (props.filter) {
            const filterProps = mergeProps(
                {
                    className: 'p-orderlist-filter'
                },
                props.ptm('filter')
            );

            const filterInputProps = mergeProps(
                {
                    type: 'text',
                    value: props.filterValue,
                    onChange: props.onFilter,
                    onKeyDown: onFilterInputKeyDown,
                    placeholder: props.placeholder,
                    className: 'p-orderlist-filter-input p-inputtext p-component'
                },
                props.ptm('filterInput')
            );

            const filterIconProps = mergeProps(
                {
                    className: 'p-orderlist-filter-icon'
                },
                props.ptm('filterIcon')
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
                    className: 'p-orderlist-filter-container'
                },
                props.ptm('filterContainer')
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
            className: 'p-orderlist-list-container'
        },
        props.ptm('container')
    );

    return (
        <div {...containerProps}>
            {header}
            {filter}
            {list}
        </div>
    );
});

OrderListSubList.displayName = 'OrderListSubList';
