import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils, UniqueComponentId, classNames, mergeProps } from '../utils/Utils';
import { OrderListBase } from './OrderListBase';
import { OrderListControls } from './OrderListControls';
import { OrderListSubList } from './OrderListSubList';

export const OrderList = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = OrderListBase.getProps(inProps, context);

        const [selectionState, setSelectionState] = React.useState([]);
        const [filterValueState, setFilterValueState] = React.useState('');
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const hasFilter = ObjectUtils.isNotEmpty(filterValueState);
        const elementRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const reorderDirection = React.useRef(null);
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

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);

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
            if (reorderDirection.current) {
                updateListScroll();
                reorderDirection.current = null;
            }
        });

        const visibleList = getVisibleList();

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
                    hostName="OrderList"
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
