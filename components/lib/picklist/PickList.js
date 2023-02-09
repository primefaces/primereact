import * as React from 'react';
import { FilterService } from '../api/Api';
import { useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { PickListBase } from './PickListBase';
import { PickListControls } from './PickListControls';
import { PickListSubList } from './PickListSubList';
import { PickListTransferControls } from './PickListTransferControls';

export const PickList = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = PickListBase.getProps(inProps);

        const [sourceSelectionState, setSourceSelectionState] = React.useState([]);
        const [targetSelectionState, setTargetSelectionState] = React.useState([]);
        const [sourceFilterValueState, setSourceFilterValueState] = React.useState('');
        const [targetFilterValueState, setTargetFilterValueState] = React.useState('');
        const elementRef = React.useRef(null);
        const sourceListElementRef = React.useRef(null);
        const targetListElementRef = React.useRef(null);
        const reorderedListElementRef = React.useRef(null);
        const reorderDirection = React.useRef(null);
        const sourceSelection = props.sourceSelection ? props.sourceSelection : sourceSelectionState;
        const targetSelection = props.targetSelection ? props.targetSelection : targetSelectionState;
        const sourceFilteredValue = props.onSourceFilterChange ? props.sourceFilterValue : sourceFilterValueState;
        const targetFilteredValue = props.onTargetFilterChange ? props.targetFilterValue : targetFilterValueState;
        const hasFilterBy = ObjectUtils.isNotEmpty(props.filterBy);
        const showSourceFilter = hasFilterBy && props.showSourceFilter;
        const showTargetFilter = hasFilterBy && props.showTargetFilter;

        const onSourceReorder = (event) => {
            handleChange(event, event.value, props.target);
            reorderedListElementRef.current = sourceListElementRef.current.listElementRef.current;
            reorderDirection.current = event.direction;
        };

        const onTargetReorder = (event) => {
            handleChange(event, props.source, event.value);
            reorderedListElementRef.current = targetListElementRef.current.listElementRef.current;
            reorderDirection.current = event.direction;
        };

        const handleScrollPosition = (listElement, direction) => {
            if (listElement) {
                let list = DomHandler.findSingle(listElement, '.p-picklist-list');

                switch (direction) {
                    case 'up':
                        scrollInView(list, -1);
                        break;

                    case 'top':
                        list.scrollTop = 0;
                        break;

                    case 'down':
                        scrollInView(list, 1);
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

        const getVisibleList = (list, type) => {
            const [filteredValue, filterCallback] = type === 'source' ? [sourceFilteredValue, filterSource] : [targetFilteredValue, filterTarget];

            return hasFilterBy && ObjectUtils.isNotEmpty(filteredValue) ? filterCallback(filteredValue) : list;
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

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useUpdateEffect(() => {
            if (reorderedListElementRef.current) {
                handleScrollPosition(reorderedListElementRef.current, reorderDirection.current);
                reorderedListElementRef.current = null;
                reorderDirection.current = null;
            }
        });

        const otherProps = PickListBase.getOtherProps(props);
        const className = classNames('p-picklist p-component', props.className);
        const sourceItemTemplate = props.sourceItemTemplate ? props.sourceItemTemplate : props.itemTemplate;
        const targetItemTemplate = props.targetItemTemplate ? props.targetItemTemplate : props.itemTemplate;
        const sourceList = getVisibleList(props.source, 'source');
        const targetList = getVisibleList(props.target, 'target');

        return (
            <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps}>
                {props.showSourceControls && <PickListControls list={props.source} selection={sourceSelection} onReorder={onSourceReorder} className="p-picklist-source-controls" dataKey={props.dataKey} />}

                <PickListSubList
                    ref={sourceListElementRef}
                    type="source"
                    list={sourceList}
                    selection={sourceSelection}
                    onSelectionChange={(e) => onSelectionChange(e, 'sourceSelection', props.onSourceSelectionChange)}
                    itemTemplate={sourceItemTemplate}
                    header={props.sourceHeader}
                    style={props.sourceStyle}
                    className="p-picklist-source-wrapper"
                    listClassName="p-picklist-source"
                    metaKeySelection={props.metaKeySelection}
                    tabIndex={props.tabIndex}
                    dataKey={props.dataKey}
                    filterValue={sourceFilteredValue}
                    onFilter={onFilter}
                    showFilter={showSourceFilter}
                    placeholder={props.sourceFilterPlaceholder}
                    template={props.sourceFilterTemplate}
                />

                <PickListTransferControls
                    onTransfer={onTransfer}
                    source={props.source}
                    visibleSourceList={sourceList}
                    target={props.target}
                    visibleTargetList={targetList}
                    sourceSelection={sourceSelection}
                    targetSelection={targetSelection}
                    dataKey={props.dataKey}
                />

                <PickListSubList
                    ref={targetListElementRef}
                    type="target"
                    list={targetList}
                    selection={targetSelection}
                    onSelectionChange={(e) => onSelectionChange(e, 'targetSelection', props.onTargetSelectionChange)}
                    itemTemplate={targetItemTemplate}
                    header={props.targetHeader}
                    style={props.targetStyle}
                    className="p-picklist-target-wrapper"
                    listClassName="p-picklist-target"
                    metaKeySelection={props.metaKeySelection}
                    tabIndex={props.tabIndex}
                    dataKey={props.dataKey}
                    filterValue={targetFilteredValue}
                    onFilter={onFilter}
                    showFilter={showTargetFilter}
                    placeholder={props.targetFilterPlaceholder}
                    template={props.targetFilterTemplate}
                />

                {props.showTargetControls && <PickListControls list={props.target} selection={targetSelection} onReorder={onTargetReorder} className="p-picklist-target-controls" dataKey={props.dataKey} />}
            </div>
        );
    })
);

PickList.displayName = 'PickList';
