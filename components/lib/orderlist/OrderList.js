import * as React from 'react';
import { FilterService } from '../api/Api';
import { useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { OrderListBase } from './OrderListBase';
import { OrderListControls } from './OrderListControls';
import { OrderListSubList } from './OrderListSubList';

export const OrderList = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = OrderListBase.getProps(inProps);

        const [selectionState, setSelectionState] = React.useState([]);
        const [filterValueState, setFilterValueState] = React.useState('');
        const hasFilter = ObjectUtils.isNotEmpty(filterValueState);
        const elementRef = React.useRef(null);
        const reorderDirection = React.useRef(null);

        const onItemClick = (event) => {
            const metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
            const index = ObjectUtils.findIndexInList(event.value, selectionState, props.dataKey);
            const selected = index !== -1;
            let newSelection;

            if (selected) newSelection = metaKey ? selectionState.filter((_, i) => i !== index) : [event.value];
            else newSelection = metaKey ? [...selectionState, event.value] : [event.value];

            setSelectionState(newSelection);
        };

        const onItemKeyDown = (event) => {
            const originalEvent = event.originalEvent;
            const listItem = originalEvent.currentTarget;

            switch (originalEvent.which) {
                //down
                case 40:
                    const nextItem = findNextItem(listItem);

                    nextItem && nextItem.focus();
                    originalEvent.preventDefault();
                    break;

                //up
                case 38:
                    const prevItem = findPrevItem(listItem);

                    prevItem && prevItem.focus();
                    originalEvent.preventDefault();
                    break;

                //enter
                case 13:
                    onItemClick(event);
                    originalEvent.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const onFilter = (event) => {
            let _filterValue = event.target.value;

            setFilterValueState(_filterValue);

            if (props.onFilter) {
                props.onFilter({
                    originalEvent: event,
                    value: _filterValue
                });
            }
        };

        const resetFilter = () => {
            setFilterValueState('');
            props.onFilter && props.onFilter({ filter: '' });
        };

        const onFilterInputChange = (event) => {
            const filter = event.target.value;

            setFilterValueState(filter);

            if (props.onFilter) {
                props.onFilter({
                    originalEvent: event,
                    filter
                });
            }
        };

        const getVisibleList = () => {
            if (hasFilter) {
                const filterValue = filterValueState.trim().toLocaleLowerCase(props.filterLocale);
                const searchFields = props.filterBy ? props.filterBy.split(',') : [];

                return FilterService.filter(props.value, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            }

            return props.value;
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (!DomHandler.hasClass(nextItem, 'p-orderlist-item') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (!DomHandler.hasClass(prevItem, 'p-orderlist-item') ? findPrevItem(prevItem) : prevItem) : null;
        };

        const onReorder = (event) => {
            if (props.onChange) {
                props.onChange({
                    event: event.originalEvent,
                    value: event.value
                });
            }

            reorderDirection.current = event.direction;
        };

        const updateListScroll = () => {
            const list = DomHandler.findSingle(elementRef.current, '.p-orderlist-list');
            const listItems = DomHandler.find(list, '.p-orderlist-item.p-highlight');

            if (listItems && listItems.length) {
                switch (reorderDirection.current) {
                    case 'up':
                        DomHandler.scrollInView(list, listItems[0]);
                        break;

                    case 'top':
                        list.scrollTop = 0;
                        break;

                    case 'down':
                        DomHandler.scrollInView(list, listItems[listItems.length - 1]);
                        break;

                    case 'bottom':
                        /* TODO: improve this code block */
                        setTimeout(() => (list.scrollTop = list.scrollHeight), 100);
                        break;

                    default:
                        break;
                }
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useUpdateEffect(() => {
            if (reorderDirection.current) {
                updateListScroll();
                reorderDirection.current = null;
            }
        });

        const otherProps = OrderListBase.getOtherProps(props);
        const className = classNames('p-orderlist p-component', props.className);
        const visibleList = getVisibleList();

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                <OrderListControls value={visibleList} selection={selectionState} onReorder={onReorder} dataKey={props.dataKey} />
                <OrderListSubList
                    value={visibleList}
                    selection={selectionState}
                    onItemClick={onItemClick}
                    onItemKeyDown={onItemKeyDown}
                    onFilterInputChange={onFilterInputChange}
                    itemTemplate={props.itemTemplate}
                    filter={props.filter}
                    onFilter={onFilter}
                    resetFilter={resetFilter}
                    filterTemplate={props.filterTemplate}
                    header={props.header}
                    listStyle={props.listStyle}
                    dataKey={props.dataKey}
                    dragdrop={props.dragdrop}
                    onChange={props.onChange}
                    tabIndex={props.tabIndex}
                />
            </div>
        );
    })
);

OrderList.displayName = 'OrderList';
