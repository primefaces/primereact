import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { OrderListBase } from './OrderListBase';
import { OrderListControls } from './OrderListControls';
import { OrderListSubList } from './OrderListSubList';

export const OrderList = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = OrderListBase.getProps(inProps, context);

        const [selectionState, setSelectionState] = React.useState([]);
        const [filterValueState, setFilterValueState] = React.useState('');
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const [focused, setFocused] = React.useState(false);
        const [focusedOptionId, setFocusedOptionId] = React.useState(null);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
        const hasFilter = ObjectUtils.isNotEmpty(filterValueState);
        const elementRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const reorderDirection = React.useRef(null);
        const listElementRef = React.useRef(null);
        const metaData = {
            props,
            state: {
                selection: selectionState,
                filterValue: filterValueState,
                attributeSelector: attributeSelectorState
            }
        };
        const { ptm, cx, isUnstyled } = OrderListBase.setMetaData(metaData);

        useHandleStyle(OrderListBase.css.styles, isUnstyled, { name: 'orderlist' });

        const getVisibleList = () => {
            if (hasFilter) {
                const filterValue = filterValueState.trim().toLocaleLowerCase(props.filterLocale);
                const searchFields = props.filterBy ? props.filterBy.split(',') : [];

                return FilterService.filter(props.value, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            }

            return props.value;
        };

        const visibleList = getVisibleList();

        const getListElement = () => {
            return listElementRef.current && listElementRef.current.getElement();
        };

        const onItemClick = (event) => {
            const { originalEvent, value, index } = event;
            const selectedIndex = ObjectUtils.findIndexInList(value, selectionState);
            const listElement = getListElement();
            const selectedId = DomHandler.find(listElement, '[data-pc-section="item"]')[index].getAttribute('id');

            setFocusedOptionIndex(selectedId);

            const metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            const selected = selectedIndex !== -1;
            let newSelection;

            if (selected) newSelection = metaKey ? selectionState.filter((_, i) => i !== selectedIndex) : [value];
            else newSelection = metaKey ? [...selectionState, value] : [value];

            setSelectionState(newSelection);
        };

        const setSelectionStateWithIndex = (index) => {
            const item = visibleList[index];
            const selected = ObjectUtils.findIndexInList(item, selectionState) !== -1;

            if (selected) setSelectionState(selectionState.filter((selectedItem) => selectedItem !== item));
            else setSelectionState([...selectionState, item]);
        };

        const onListFocus = (event) => {
            const listElement = getListElement();
            const selectedFirstItem = DomHandler.findSingle(listElement, '[data-p-highlight="true"]') || DomHandler.findSingle(listElement, '[data-pc-section="item"]');
            const itemList = listElement && listElement.children ? [...listElement.children] : [];

            if (selectedFirstItem && itemList.length > 0) {
                const findIndex = ObjectUtils.findIndexInList(selectedFirstItem, itemList);

                setFocused(true);

                const index = focusedOptionIndex !== -1 ? focusedOptionIndex : selectedFirstItem ? findIndex : -1;

                changeFocusedOptionIndex(index);
                props.onFocus && props.onFocus(event);
            }
        };

        const onListBlur = (event) => {
            setFocused(false);
            setFocusedOptionIndex(-1);
            props.onBlur && props.onBlur(event);
        };

        const onListKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'Home':
                    onHomeKey(event);
                    break;

                case 'End':
                    onEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(event);
                    break;

                case 'Space':
                    onSpaceKey(event);
                    break;

                case 'KeyA':
                    if (event.ctrlKey) {
                        setSelectionState(visibleList);
                        event.preventDefault();
                    }

                default:
                    break;
            }
        };

        const onOptionMouseDown = (index) => {
            setFocused(true);
            setFocusedOptionIndex(index);
        };

        const onArrowDownKey = (event) => {
            const optionIndex = findNextOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);

            if (event.shiftKey) {
                setSelectionStateWithIndex(optionIndex);
            }

            event.preventDefault();
        };

        const onArrowUpKey = (event) => {
            const optionIndex = findPrevOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);

            if (event.shiftKey) {
                setSelectionStateWithIndex(optionIndex);
            }

            event.preventDefault();
        };

        const onHomeKey = (event) => {
            if (event.ctrlKey && event.shiftKey) {
                const listElement = getListElement();
                const items = DomHandler.find(listElement, '[data-pc-section="item"]');
                const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
                const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);

                setSelectionState([...visibleList].slice(0, matchedOptionIndex + 1));
            } else {
                changeFocusedOptionIndex(0);
            }

            event.preventDefault();
        };

        const onEndKey = (event) => {
            const listElement = getListElement();

            if (event.ctrlKey && event.shiftKey) {
                const items = DomHandler.find(listElement, '[data-pc-section="item"]');
                const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
                const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);

                setSelectionState([...visibleList].slice(matchedOptionIndex, items.length));
            } else {
                changeFocusedOptionIndex(DomHandler.find(listElement, '[data-pc-section="item"]').length - 1);
            }

            event.preventDefault();
        };

        const onEnterKey = (event) => {
            const listElement = getListElement();
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');
            const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
            const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);

            onItemClick({ originalEvent: event, value: visibleList[matchedOptionIndex], index: matchedOptionIndex });

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            event.preventDefault();

            const listElement = getListElement();

            if (event.shiftKey && selectionState && selectionState.length > 0) {
                const items = DomHandler.find(listElement, '[data-pc-section="item"]');
                const selectedItemIndex = ObjectUtils.findIndexInList(selectionState[0], [...visibleList]);
                const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
                const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);

                setSelectionState([...visibleList].slice(Math.min(selectedItemIndex, matchedOptionIndex), Math.max(selectedItemIndex, matchedOptionIndex) + 1));
            } else {
                onEnterKey(event);
            }
        };

        const findNextOptionIndex = (index) => {
            const listElement = getListElement();
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');
            const matchedOptionIndex = [...items].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        };

        const findPrevOptionIndex = (index) => {
            const listElement = getListElement();
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');
            const matchedOptionIndex = [...items].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        };

        const changeFocusedOptionIndex = (index) => {
            const listElement = getListElement();
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');

            let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;

            const _focusedOptionIndex = items[order] ? items[order].getAttribute('id') : -1;

            setFocusedOptionIndex(_focusedOptionIndex);

            scrollInView(_focusedOptionIndex);
        };

        const scrollInView = (id) => {
            const listElement = getListElement();
            const element = DomHandler.findSingle(listElement, `[data-pc-section="item"][id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
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

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (!DomHandler.getAttribute(nextItem, 'data-pc-section') === 'item' ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (!DomHandler.getAttribute(prevItem, 'data-pc-section') === 'item' ? findPrevItem(prevItem) : prevItem) : null;
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

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

                let innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-orderlist[${attributeSelectorState}] {
        flex-direction: column;
    }

    .p-orderlist[${attributeSelectorState}] .p-orderlist-controls {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-orderlist[${attributeSelectorState}] .p-orderlist-controls .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-orderlist[${attributeSelectorState}] .p-orderlist-controls .p-button:last-child {
        margin-right: 0;
    }
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            !attributeSelectorState && setAttributeSelectorState(UniqueComponentId());
        });

        useUpdateEffect(() => {
            if (attributeSelectorState) {
                elementRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

        useUpdateEffect(() => {
            const _focusedOptionId = focusedOptionIndex !== -1 ? focusedOptionIndex : null;

            setFocusedOptionId(_focusedOptionId);
        }, [focusedOptionIndex]);

        useUpdateEffect(() => {
            if (reorderDirection.current) {
                reorderDirection.current = null;
            }
        });

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: classNames(props.className, cx('root')),
                style: props.style
            },
            OrderListBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                <OrderListControls
                    hostName="OrderList"
                    value={visibleList}
                    selection={selectionState}
                    onReorder={onReorder}
                    dataKey={props.dataKey}
                    moveUpIcon={props.moveUpIcon}
                    moveTopIcon={props.moveTopIcon}
                    moveDownIcon={props.moveDownIcon}
                    moveBottomIcon={props.moveBottomIcon}
                    ptm={ptm}
                    cx={cx}
                    unstyled={props.unstyled}
                    metaData={metaData}
                />
                <OrderListSubList
                    ref={listElementRef}
                    hostName="OrderList"
                    focused={focused}
                    ariaLabel={props.ariaLabel}
                    ariaLabelledBy={props.ariaLabelledBy}
                    value={visibleList}
                    selection={selectionState}
                    onItemClick={onItemClick}
                    onOptionMouseDown={onOptionMouseDown}
                    focusedOptionId={focusedOptionId}
                    onListKeyDown={onListKeyDown}
                    onListFocus={onListFocus}
                    onListBlur={onListBlur}
                    onFilterInputChange={onFilterInputChange}
                    itemTemplate={props.itemTemplate}
                    filter={props.filter}
                    onFilter={onFilter}
                    resetFilter={resetFilter}
                    filterTemplate={props.filterTemplate}
                    header={props.header}
                    parentId={attributeSelectorState}
                    listStyle={props.listStyle}
                    dataKey={props.dataKey}
                    dragdrop={props.dragdrop}
                    onChange={props.onChange}
                    tabIndex={props.tabIndex}
                    filterIcon={props.filterIcon}
                    isUnstyled={isUnstyled}
                    ptm={ptm}
                    cx={cx}
                />
            </div>
        );
    })
);

OrderList.displayName = 'OrderList';
