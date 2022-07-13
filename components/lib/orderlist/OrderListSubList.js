import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const OrderListSubList = React.memo((props) => {
    const dragging = React.useRef(null);
    const draggedItemIndex = React.useRef(null);
    const dragOverItemIndex = React.useRef(null);
    const listElementRef = React.useRef(null);

    const isSelected = (item) => {
        return ObjectUtils.findIndexInList(item, props.selection, props.dataKey) !== -1;
    }

    const onDragStart = (event, index) => {
        dragging.current = true;
        draggedItemIndex.current = index;
        if (props.dragdropScope) {
            event.dataTransfer.setData('text', 'orderlist');
        }
    }

    const onDragOver = (event, index) => {
        if (draggedItemIndex.current !== index && draggedItemIndex.current + 1 !== index) {
            dragOverItemIndex.current = index;
            DomHandler.addClass(event.target, 'p-orderlist-droppoint-highlight');
            event.preventDefault();
        }
    }

    const onDragLeave = (event) => {
        dragOverItemIndex.current = null;
        DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');
    }

    const onDrop = (event) => {
        let dropIndex = (draggedItemIndex.current > dragOverItemIndex.current) ? dragOverItemIndex.current : (dragOverItemIndex.current === 0) ? 0 : dragOverItemIndex.current - 1;
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
    }

    const onDragEnd = (event) => {
        dragging.current = false;
    }

    const onListMouseMove = (event) => {
        if (dragging.current) {
            const offsetY = listElementRef.current.getBoundingClientRect().top + DomHandler.getWindowScrollTop();
            const bottomDiff = (offsetY + listElementRef.current.clientHeight) - event.pageY;
            const topDiff = (event.pageY - offsetY);

            if (bottomDiff < 25 && bottomDiff > 0)
                listElementRef.current.scrollTop += 15;
            else if (topDiff < 25 && topDiff > 0)
                listElementRef.current.scrollTop -= 15;
        }
    }

    const createDropPoint = (index, key) => {
        return <li key={key} className="p-orderlist-droppoint" onDragOver={(e) => onDragOver(e, index + 1)} onDragLeave={onDragLeave} onDrop={onDrop}></li>
    }

    const createHeader = () => {
        return props.header ? <div className="p-orderlist-header">{props.header}</div> : null;
    }

    const createItems = () => {
        if (props.value) {
            return props.value.map((item, i) => {
                const content = props.itemTemplate ? props.itemTemplate(item) : item;
                const itemClassName = classNames('p-orderlist-item', { 'p-highlight': isSelected(item) }, props.className);
                const key = JSON.stringify(item);

                if (props.dragdrop) {
                    let items = [
                        createDropPoint(i, key + '_droppoint'),
                        <li key={key} className={itemClassName} onClick={(e) => props.onItemClick({ originalEvent: e, value: item, index: i })}
                            onKeyDown={(e) => props.onItemKeyDown({ originalEvent: e, value: item, index: i })} role="option" aria-selected={isSelected(item)}
                            draggable="true" onDragStart={(e) => onDragStart(e, i)} onDragEnd={onDragEnd} tabIndex={props.tabIndex}>
                            {content}
                            <Ripple />
                        </li>
                    ];

                    if (i === props.value.length - 1) {
                        items.push(createDropPoint(item, i, key + '_droppoint_end'));
                    }

                    return items;
                }
                else {
                    return (
                        <li key={key} className={itemClassName} role="option" aria-selected={isSelected(item)}
                            onClick={(e) => props.onItemClick({ originalEvent: e, value: item, index: i })}
                            onKeyDown={(e) => props.onItemKeyDown({ originalEvent: e, value: item, index: i })}
                            tabIndex={props.tabIndex}>{content}</li>
                    )
                }
            });
        }

        return null;
    }

    const createList = () => {
        const items = createItems();

        return (
            <ul ref={listElementRef} className="p-orderlist-list" style={props.listStyle} onDragOver={onListMouseMove} role="listbox" aria-multiselectable>
                {items}
            </ul>
        )
    }

    const header = createHeader();
    const list = createList();

    return (
        <div className="p-orderlist-list-container">
            {header}
            {list}
        </div>
    )
});

OrderListSubList.displayName = 'OrderListSubList';
