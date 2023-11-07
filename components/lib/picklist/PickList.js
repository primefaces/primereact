import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils, UniqueComponentId, classNames, mergeProps } from '../utils/Utils';
import { PickListBase } from './PickListBase';
import { PickListControls } from './PickListControls';
import { PickListSubList } from './PickListSubList';
import { PickListTransferControls } from './PickListTransferControls';

export const PickList = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = PickListBase.getProps(inProps, context);

        const [sourceSelectionState, setSourceSelectionState] = React.useState([]);
        const [targetSelectionState, setTargetSelectionState] = React.useState([]);
        const [sourceFilterValueState, setSourceFilterValueState] = React.useState('');
        const [targetFilterValueState, setTargetFilterValueState] = React.useState('');
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
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
                let list = DomHandler.findSingle(listElement, '[data-pc-section="list"]');

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

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);

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
            if (reorderedListElementRef.current) {
                handleScrollPosition(reorderedListElementRef.current, reorderDirection.current);
                reorderedListElementRef.current = null;
                reorderDirection.current = null;
            }
        });

        const sourceItemTemplate = props.sourceItemTemplate ? props.sourceItemTemplate : props.itemTemplate;
        const targetItemTemplate = props.targetItemTemplate ? props.targetItemTemplate : props.itemTemplate;
        const sourceList = getVisibleList(props.source, 'source');
        const targetList = getVisibleList(props.target, 'target');

        const rootProps = mergeProps(
            {
                id: props.id,
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
                    selection={sourceSelection}
                    onSelectionChange={(e) => onSelectionChange(e, 'sourceSelection', props.onSourceSelectionChange)}
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
                    onSelectionChange={(e) => onSelectionChange(e, 'targetSelection', props.onTargetSelectionChange)}
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
