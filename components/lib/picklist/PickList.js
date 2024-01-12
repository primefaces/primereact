import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { PickListBase } from './PickListBase';
import { PickListControls } from './PickListControls';
import { PickListSubList } from './PickListSubList';
import { PickListTransferControls } from './PickListTransferControls';

export const PickList = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = PickListBase.getProps(inProps, context);

        const [sourceSelectionState, setSourceSelectionState] = React.useState([]);
        const [targetSelectionState, setTargetSelectionState] = React.useState([]);
        const [sourceFilterValueState, setSourceFilterValueState] = React.useState('');
        const [targetFilterValueState, setTargetFilterValueState] = React.useState('');
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(props.id);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
        const [focusedOptionId, setFocusedOptionId] = React.useState(null);
        const [focused, setFocused] = React.useState({ source: false, target: false });

        const metaData = {
            props,
            state: {
                sourceSelection: sourceSelectionState,
                targetSelection: targetSelectionState,
                sourceFilterValue: sourceFilterValueState,
                targetFilterValue: targetFilterValueState,
                attributeSelector: attributeSelectorState
            }
        };
        const { ptm, cx, isUnstyled } = PickListBase.setMetaData(metaData);

        useHandleStyle(PickListBase.css.styles, isUnstyled, { name: 'picklist' });
        const elementRef = React.useRef(null);
        const sourceListElementRef = React.useRef(null);
        const targetListElementRef = React.useRef(null);
        const reorderedListElementRef = React.useRef(null);
        const reorderDirection = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const sourceSelection = props.sourceSelection ? props.sourceSelection : sourceSelectionState;
        const targetSelection = props.targetSelection ? props.targetSelection : targetSelectionState;
        const sourceFilteredValue = props.onSourceFilterChange ? props.sourceFilterValue : sourceFilterValueState;
        const targetFilteredValue = props.onTargetFilterChange ? props.targetFilterValue : targetFilterValueState;
        const hasFilterBy = ObjectUtils.isNotEmpty(props.filterBy);
        const showSourceFilter = hasFilterBy && props.showSourceFilter;
        const showTargetFilter = hasFilterBy && props.showTargetFilter;

        const onSourceReorder = (event) => {
            handleChange(event, event.value, props.target);
            reorderedListElementRef.current = getListElement('source');
            reorderDirection.current = event.direction;
        };

        const onTargetReorder = (event) => {
            handleChange(event, props.source, event.value);
            reorderedListElementRef.current = getListElement('target');
            reorderDirection.current = event.direction;
        };

        const handleScrollPosition = (listElement, direction) => {
            if (listElement) {
                switch (direction) {
                    case 'up':
                        scrollInView(listElement, -1);
                        break;

                    case 'top':
                        listElement.scrollTop = 0;
                        break;

                    case 'down':
                        scrollInView(listElement, 1);
                        break;

                    case 'bottom':
                        /* TODO: improve this code block */
                        setTimeout(() => (listElement.scrollTop = listElement.scrollHeight), 100);
                        break;

                    default:
                        break;
                }
            }
        };

        const handleChange = (event, source, target) => {
            if (props.onChange) {
                props.onChange({
                    originalEvent: event.originalEvent,
                    source,
                    target
                });
            }
        };

        const onTransfer = (event) => {
            const { originalEvent, source, target, direction } = event;

            let selectedValue = [];

            switch (direction) {
                case 'toTarget':
                    selectedValue = sourceSelection;

                    if (props.onMoveToTarget) {
                        props.onMoveToTarget({
                            originalEvent,
                            value: selectedValue
                        });
                    }

                    break;

                case 'allToTarget':
                    selectedValue = props.source;

                    if (props.onMoveAllToTarget) {
                        props.onMoveAllToTarget({
                            originalEvent,
                            value: selectedValue
                        });
                    }

                    selectedValue = [];

                    break;

                case 'toSource':
                    selectedValue = targetSelection;

                    if (props.onMoveToSource) {
                        props.onMoveToSource({
                            originalEvent,
                            value: selectedValue
                        });
                    }

                    break;

                case 'allToSource':
                    selectedValue = props.target;

                    if (props.onMoveAllToSource) {
                        props.onMoveAllToSource({
                            originalEvent,
                            value: selectedValue
                        });
                    }

                    selectedValue = [];

                    break;

                default:
                    break;
            }

            onSelectionChange({ originalEvent, value: selectedValue }, 'sourceSelection', props.onSourceSelectionChange);
            onSelectionChange({ originalEvent, value: selectedValue }, 'targetSelection', props.onTargetSelectionChange);
            handleChange(event, source, target);
        };

        const scrollInView = (listContainer, direction = 1) => {
            let selectedItems = listContainer.getElementsByClassName('p-highlight');

            if (ObjectUtils.isNotEmpty(selectedItems)) {
                DomHandler.scrollInView(listContainer, direction === -1 ? selectedItems[0] : selectedItems[selectedItems.length - 1]);
            }
        };

        const onSelectionChange = (e, stateKey, callback) => {
            if (stateKey === 'sourceSelection') setSourceSelectionState(e.value);
            else setTargetSelectionState(e.value);

            if (callback) {
                callback(e);
            }

            if (ObjectUtils.isNotEmpty(sourceSelection) && stateKey === 'targetSelection') {
                setSourceSelectionState([]);
            } else if (ObjectUtils.isNotEmpty(targetSelection) && stateKey === 'sourceSelection') {
                setTargetSelectionState([]);
            }
        };

        const onFilter = (event) => {
            const { originalEvent, value, type } = event;
            const [setFilterState, onFilterChange] = type === 'source' ? [setSourceFilterValueState, props.onSourceFilterChange] : [setTargetFilterValueState, props.onTargetFilterChange];

            if (onFilterChange) {
                onFilterChange({ originalEvent, value });
            } else {
                setFilterState(value);
            }
        };

        const filterSource = (value = '') => {
            const filteredValue = value.trim().toLocaleLowerCase(props.filterLocale);

            return filter(props.source, filteredValue);
        };

        const filterTarget = (value = '') => {
            const filteredValue = value.trim().toLocaleLowerCase(props.filterLocale);

            return filter(props.target, filteredValue);
        };

        const filter = (list, filterValue) => {
            const searchFields = hasFilterBy ? props.filterBy.split(',') : [];

            return FilterService.filter(list, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
        };

        const getVisibleList = (list, type) => {
            const [filteredValue, filterCallback] = type === 'source' ? [sourceFilteredValue, filterSource] : [targetFilteredValue, filterTarget];

            return hasFilterBy && ObjectUtils.isNotEmpty(filteredValue) ? filterCallback(filteredValue) : list;
        };

        const sourceList = getVisibleList(props.source, 'source');
        const targetList = getVisibleList(props.target, 'target');

        const onListFocus = (event, type) => {
            const listElement = getListElement(type);
            const selectedFirstItem = DomHandler.findSingle(listElement, '[data-p-highlight="true"]') || DomHandler.findSingle(listElement, '[data-pc-section="item"]');
            const itemList = listElement && listElement.children ? [...listElement.children] : [];

            if (selectedFirstItem) {
                const findIndex = ObjectUtils.findIndexInList(selectedFirstItem, itemList);

                setFocused({ ...focused, [type]: true });

                const index = focusedOptionIndex !== -1 ? focusedOptionIndex : selectedFirstItem ? findIndex : -1;

                changeFocusedOptionIndex(index, type);
                props.onFocus && props.onFocus(event);
            }
        };

        const onListBlur = (event, type) => {
            setFocused({ ...focused, [type]: false });
            setFocusedOptionIndex(-1);
            props.onBlur && props.onBlur(event);
        };

        const onItemClick = (event, type, arrowKeyClick = false) => {
            let originalEvent = event.originalEvent;
            let item = event.value;
            let selectedId = event.id;
            let isSource = type === 'source';
            let selection = [...(isSource ? sourceSelection : targetSelection)];
            let index = ObjectUtils.findIndexInList(item, selection, props.dataKey);
            let selected = index !== -1;
            let metaSelection = props.metaKeySelection;

            if (!arrowKeyClick) setFocusedOptionIndex(selectedId);

            if (metaSelection) {
                const metaKey = originalEvent.metaKey || originalEvent.ctrlKey || originalEvent.shiftKey;

                if (selected && metaKey) {
                    selection.splice(index, 1);
                } else {
                    if (!metaKey) {
                        selection.length = 0;
                    }

                    selection.push(item);
                }
            } else {
                if (selected) selection.splice(index, 1);
                else selection.push(item);
            }

            if (isSource) {
                onSelectionChange({ originalEvent: originalEvent, value: selection }, 'sourceSelection', props.onSourceSelectionChange);
            } else {
                onSelectionChange({ originalEvent: originalEvent, value: selection }, 'targetSelection', props.onTargetSelectionChange);
            }
        };

        const onOptionMouseDown = ({ index, type }) => {
            setFocused({ ...focused, [type]: true });
            setFocusedOptionIndex(index);
        };

        const onListKeyDown = (event, type) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event, type);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event, type);
                    break;

                case 'Home':
                    onHomeKey(event, type);
                    break;

                case 'End':
                    onEndKey(event, type);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(event, type);
                    break;

                case 'Space':
                    onSpaceKey(event, type);
                    break;

                case 'KeyA':
                    if (event.ctrlKey) {
                        const isSource = type === 'source';

                        if (isSource) setSourceSelectionState([...sourceList]);
                        else setTargetSelectionState([...targetList]);

                        onSelectionChange({ originalEvent: event, value: [...sourceList] }, isSource ? 'sourceSelection' : 'targetSelection', isSource ? props.onSourceSelectionChange : props.onTargetSelectionChange);
                        event.preventDefault();
                    }

                default:
                    break;
            }
        };

        const onArrowDownKey = (event, type) => {
            const optionIndex = findNextOptionIndex(focusedOptionIndex, type);
            const visibleList = getVisibleList(type === 'source' ? props.source : props.target, type);

            changeFocusedOptionIndex(optionIndex, type);

            if (visibleList && visibleList.length > 0 && event.shiftKey) {
                onItemClick({ originalEvent: event, value: visibleList[optionIndex] }, type, true);
            }

            event.preventDefault();
        };

        const onArrowUpKey = (event, type) => {
            const optionIndex = findPrevOptionIndex(focusedOptionIndex, type);
            const visibleList = getVisibleList(type === 'source' ? props.source : props.target, type);

            changeFocusedOptionIndex(optionIndex, type);

            if (visibleList && visibleList.length > 0 && event.shiftKey) {
                onItemClick({ originalEvent: event, value: visibleList[optionIndex] }, type, true);
            }

            event.preventDefault();
        };

        const onEnterKey = (event, type) => {
            const listElement = getListElement(type);
            const visibleList = getVisibleList(type === 'source' ? props.source : props.target, type);
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');
            const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
            const id = focusedItem && focusedItem.getAttribute('id');
            const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);

            if (visibleList && visibleList.length > 0) {
                onItemClick({ originalEvent: event, value: visibleList[matchedOptionIndex], id }, type);
            }

            event.preventDefault();
        };

        const onSpaceKey = (event, type) => {
            event.preventDefault();

            const isSource = type === 'source';
            const selection = isSource ? sourceSelectionState : targetSelectionState;

            if (event.shiftKey && selection && selection.length > 0) {
                const listItems = isSource ? sourceList : targetList;
                const listElement = getListElement(type);
                const items = DomHandler.find(listElement, '[data-pc-section="item"]');
                const selectedItemIndex = ObjectUtils.findIndexInList(selection[0], [...listItems]);
                const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
                const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);

                selection = [...listItems].slice(Math.min(selectedItemIndex, matchedOptionIndex), Math.max(selectedItemIndex, matchedOptionIndex) + 1);

                if (isSource) {
                    onSelectionChange({ originalEvent: event, value: selection }, 'sourceSelection', props.onSourceSelectionChange);
                } else {
                    onSelectionChange({ originalEvent: event, value: selection }, 'targetSelection', props.onTargetSelectionChange);
                }
            } else {
                onEnterKey(event, type);
            }
        };

        const onHomeKey = (event, type) => {
            if (event.ctrlKey && event.shiftKey) {
                const isSource = type === 'source';
                const listItems = isSource ? sourceList : targetList;
                const listElement = getListElement(type);
                const items = DomHandler.find(listElement, '[data-pc-section="item"]');
                const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
                const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);
                const selection = [...listItems].slice(0, matchedOptionIndex + 1);

                if (isSource) {
                    onSelectionChange({ originalEvent: event, value: selection }, 'sourceSelection', props.onSourceSelectionChange);
                } else {
                    onSelectionChange({ originalEvent: event, value: selection }, 'targetSelection', props.onTargetSelectionChange);
                }
            } else {
                changeFocusedOptionIndex(0, type);
            }

            event.preventDefault();
        };

        const onEndKey = (event, type) => {
            const listElement = getListElement(type);
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');

            if (event.ctrlKey && event.shiftKey) {
                const isSource = type === 'source';
                const listItems = isSource ? sourceList : targetList;
                const focusedItem = DomHandler.findSingle(listElement, `[data-pc-section="item"][id=${focusedOptionIndex}]`);
                const matchedOptionIndex = [...items].findIndex((item) => item === focusedItem);
                const selection = [...listItems].slice(matchedOptionIndex, items.length);

                if (isSource) {
                    onSelectionChange({ originalEvent: event, value: selection }, 'sourceSelection', props.onSourceSelectionChange);
                } else {
                    onSelectionChange({ originalEvent: event, value: selection }, 'targetSelection', props.onTargetSelectionChange);
                }
            } else {
                changeFocusedOptionIndex(items.length - 1, type);
            }

            event.preventDefault();
        };

        const findNextOptionIndex = (index, type) => {
            const listElement = getListElement(type);
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');

            const matchedOptionIndex = [...items].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        };

        const findPrevOptionIndex = (index, type) => {
            const listElement = getListElement(type);
            const items = DomHandler.find(listElement, '[data-pc-section="item"]');
            const matchedOptionIndex = [...items].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        };

        const changeFocusedOptionIndex = (index, type) => {
            const listElement = getListElement(type);

            const items = DomHandler.find(listElement, '[data-pc-section="item"]');

            let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;

            setFocusedOptionIndex(items[order].getAttribute('id'));
            scrollInViewWithFocus(items[order].getAttribute('id'), type);
        };

        const scrollInViewWithFocus = (id, type) => {
            const listElement = getListElement(type);
            const element = DomHandler.findSingle(listElement, `[data-pc-section="item"][id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        };

        const getListElement = (type) => {
            return type === 'source' ? sourceListElementRef.current.getElement() : targetListElementRef.current.getElement();
        };

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

                let innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-picklist[${attributeSelectorState}] {
        flex-direction: column;
    }

    .p-picklist[${attributeSelectorState}] .p-picklist-buttons {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-picklist[${attributeSelectorState}] .p-picklist-buttons .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-picklist[${attributeSelectorState}] .p-picklist-buttons .p-button:last-child {
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
            if (!props.id && !attributeSelectorState) {
                setAttributeSelectorState(UniqueComponentId());
            }

            if (reorderedListElementRef.current) {
                handleScrollPosition(reorderedListElementRef.current, reorderDirection.current);
                reorderedListElementRef.current = null;
                reorderDirection.current = null;
            }
        });

        useUpdateEffect(() => {
            let _focusedOptionId = focusedOptionIndex !== -1 ? focusedOptionIndex : null;

            setFocusedOptionId(_focusedOptionId);
        }, [focusedOptionIndex]);

        const sourceItemTemplate = props.sourceItemTemplate ? props.sourceItemTemplate : props.itemTemplate;
        const targetItemTemplate = props.targetItemTemplate ? props.targetItemTemplate : props.itemTemplate;

        const rootProps = mergeProps(
            {
                id: attributeSelectorState,
                ref: elementRef,
                className: classNames(props.className, cx('root')),
                style: props.style
            },
            PickListBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {props.showSourceControls && (
                    <PickListControls
                        hostName="PickList"
                        list={props.source}
                        selection={sourceSelection}
                        onReorder={onSourceReorder}
                        className={cx('sourceControls')}
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
                )}

                <PickListSubList
                    hostName="PickList"
                    ref={sourceListElementRef}
                    type="source"
                    list={sourceList}
                    parentId={attributeSelectorState}
                    selection={sourceSelection}
                    onSelectionChange={(e) => onSelectionChange(e, 'sourceSelection', props.onSourceSelectionChange)}
                    onListKeyDown={(e) => onListKeyDown(e, 'source')}
                    onListFocus={(e) => onListFocus(e, 'source')}
                    onListBlur={(e) => onListBlur(e, 'source')}
                    onOptionMouseDown={(index) => onOptionMouseDown(index, 'source')}
                    onItemClick={(e) => onItemClick(e, 'source')}
                    focusedOptionId={focused['source'] ? focusedOptionId : null}
                    ariaActivedescendant={focused['source'] ? focusedOptionId : null}
                    itemTemplate={sourceItemTemplate}
                    header={props.sourceHeader}
                    style={props.sourceStyle}
                    className={cx('listSourceWrapper')}
                    listClassName={cx('listSource')}
                    metaKeySelection={props.metaKeySelection}
                    tabIndex={props.tabIndex}
                    dataKey={props.dataKey}
                    filterValue={sourceFilteredValue}
                    onFilter={onFilter}
                    showFilter={showSourceFilter}
                    placeholder={props.sourceFilterPlaceholder}
                    filterTemplate={props.sourceFilterTemplate}
                    sourceFilterIcon={props.sourceFilterIcon}
                    ptm={ptm}
                    cx={cx}
                />

                <PickListTransferControls
                    hostName="PickList"
                    onTransfer={onTransfer}
                    source={props.source}
                    visibleSourceList={sourceList}
                    target={props.target}
                    breakpoint={props.breakpoint}
                    visibleTargetList={targetList}
                    sourceSelection={sourceSelection}
                    targetSelection={targetSelection}
                    dataKey={props.dataKey}
                    moveToTargetIcon={props.moveToTargetIcon}
                    moveAllToTargetIcon={props.moveAllToTargetIcon}
                    moveToSourceIcon={props.moveToSourceIcon}
                    moveAllToSourceIcon={props.moveAllToSourceIcon}
                    ptm={ptm}
                    cx={cx}
                    unstyled={props.unstyled}
                    metaData={metaData}
                />

                <PickListSubList
                    hostName="PickList"
                    ref={targetListElementRef}
                    type="target"
                    list={targetList}
                    selection={targetSelection}
                    parentId={attributeSelectorState}
                    onSelectionChange={(e) => onSelectionChange(e, 'targetSelection', props.onTargetSelectionChange)}
                    onListKeyDown={(e) => onListKeyDown(e, 'target')}
                    onListFocus={(e) => onListFocus(e, 'target')}
                    onListBlur={(e) => onListBlur(e, 'target')}
                    onOptionMouseDown={(index) => onOptionMouseDown(index, 'target')}
                    onItemClick={(e) => onItemClick(e, 'target')}
                    focusedOptionId={focused['target'] ? focusedOptionId : null}
                    ariaActivedescendant={focused['target'] ? focusedOptionId : null}
                    itemTemplate={targetItemTemplate}
                    header={props.targetHeader}
                    style={props.targetStyle}
                    className={cx('listTargetWrapper')}
                    listClassName={cx('listWrapper')}
                    metaKeySelection={props.metaKeySelection}
                    tabIndex={props.tabIndex}
                    dataKey={props.dataKey}
                    filterValue={targetFilteredValue}
                    onFilter={onFilter}
                    showFilter={showTargetFilter}
                    placeholder={props.targetFilterPlaceholder}
                    filterTemplate={props.targetFilterTemplate}
                    targetFilterIcon={props.targetFilterIcon}
                    ptm={ptm}
                    cx={cx}
                />

                {props.showTargetControls && (
                    <PickListControls
                        hostName="PickList"
                        list={props.target}
                        selection={targetSelection}
                        onReorder={onTargetReorder}
                        className={cx('targetControls')}
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
                )}
            </div>
        );
    })
);

PickList.displayName = 'PickList';
