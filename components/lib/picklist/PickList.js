import * as React from 'react';
import { useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { PickListControls } from './PickListControls';
import { PickListSubList } from './PickListSubList';
import { PickListTransferControls } from './PickListTransferControls';

export const PickList = React.memo(React.forwardRef((props, ref) => {
    const [sourceSelectionState, setSourceSelectionState] = React.useState([]);
    const [targetSelectionState, setTargetSelectionState] = React.useState([]);
    const sourceListElementRef = React.useRef(null);
    const targetListElementRef = React.useRef(null);
    const reorderedListElementRef = React.useRef(null);
    const reorderDirection = React.useRef(null);
    const sourceSelection = props.onSourceSelectionChange ? props.sourceSelection : sourceSelectionState;
    const targetSelection = props.onTargetSelectionChange ? props.targetSelection : targetSelectionState;

    const onSourceReorder = (event) => {
        handleChange(event, event.value, props.target);
        reorderedListElementRef.current = sourceListElementRef.current.listElementRef.current;
        reorderDirection.current = event.direction;
    }

    const onTargetReorder = (event) => {
        handleChange(event, props.source, event.value);
        reorderedListElementRef.current = targetListElementRef.current.listElementRef.current;
        reorderDirection.current = event.direction;
    }

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
                    setTimeout(() => list.scrollTop = list.scrollHeight, 100);
                    break;

                default:
                    break;
            }
        }
    }

    const handleChange = (event, source, target) => {
        if (props.onChange) {
            props.onChange({
                originalEvent: event.originalEvent,
                source,
                target,
            });
        }
    }

    const onTransfer = (event) => {
        const { originalEvent, source, target, direction } = event;

        switch (direction) {
            case 'toTarget':
                if (props.onMoveToTarget) {
                    props.onMoveToTarget({
                        originalEvent,
                        value: sourceSelection
                    })
                }
                break;

            case 'allToTarget':
                if (props.onMoveAllToTarget) {
                    props.onMoveAllToTarget({
                        originalEvent,
                        value: props.source
                    })
                }
                break;

            case 'toSource':
                if (props.onMoveToSource) {
                    props.onMoveToSource({
                        originalEvent,
                        value: targetSelection
                    })
                }
                break;

            case 'allToSource':
                if (props.onMoveAllToSource) {
                    props.onMoveAllToSource({
                        originalEvent,
                        value: props.target
                    })
                }
                break;

            default:
                break;
        }

        onSelectionChange({ originalEvent, value: [] }, 'sourceSelection', props.onSourceSelectionChange);
        onSelectionChange({ originalEvent, value: [] }, 'targetSelection', props.onTargetSelectionChange);
        handleChange(event, source, target);
    }

    const scrollInView = (listContainer, direction = 1) => {
        let selectedItems = listContainer.getElementsByClassName('p-highlight');
        if (ObjectUtils.isNotEmpty(selectedItems)) {
            DomHandler.scrollInView(listContainer, (direction === -1 ? selectedItems[0] : selectedItems[selectedItems.length - 1]));
        }
    }

    const onSelectionChange = (e, stateKey, callback) => {
        if (callback) {
            callback(e);
        }
        else {
            if (stateKey === 'sourceSelection')
                setSourceSelectionState(e.value);
            else
                setTargetSelectionState(e.value);
        }

        if (ObjectUtils.isNotEmpty(sourceSelection) && stateKey === 'targetSelection') {
            setSourceSelectionState([]);
        }
        else if (ObjectUtils.isNotEmpty(targetSelection) && stateKey === 'sourceSelection') {
            setTargetSelectionState([]);
        }
    }

    useUpdateEffect(() => {
        if (reorderedListElementRef.current) {
            handleScrollPosition(reorderedListElementRef.current, reorderDirection.current);
            reorderedListElementRef.current = null;
            reorderDirection.current = null;
        }
    });

    const otherProps = ObjectUtils.findDiffKeys(props, PickList.defaultProps);
    const className = classNames('p-picklist p-component', props.className);
    const sourceItemTemplate = props.sourceItemTemplate ? props.sourceItemTemplate : props.itemTemplate;
    const targetItemTemplate = props.targetItemTemplate ? props.targetItemTemplate : props.itemTemplate;

    return (
        <div id={props.id} className={className} style={props.style} {...otherProps}>
            {props.showSourceControls && <PickListControls list={props.source} selection={sourceSelection} onReorder={onSourceReorder} className="p-picklist-source-controls" dataKey={props.dataKey} />}

            <PickListSubList ref={sourceListElementRef} list={props.source} selection={sourceSelection} onSelectionChange={(e) => onSelectionChange(e, 'sourceSelection', props.onSourceSelectionChange)} itemTemplate={sourceItemTemplate}
                header={props.sourceHeader} style={props.sourceStyle} className="p-picklist-source-wrapper" listClassName="p-picklist-source" metaKeySelection={props.metaKeySelection} tabIndex={props.tabIndex} dataKey={props.dataKey} />

            <PickListTransferControls onTransfer={onTransfer} source={props.source} target={props.target} sourceSelection={sourceSelection} targetSelection={targetSelection} dataKey={props.dataKey} />

            <PickListSubList ref={targetListElementRef} list={props.target} selection={targetSelection} onSelectionChange={(e) => onSelectionChange(e, 'targetSelection', props.onTargetSelectionChange)} itemTemplate={targetItemTemplate}
                header={props.targetHeader} style={props.targetStyle} className="p-picklist-target-wrapper" listClassName="p-picklist-target" metaKeySelection={props.metaKeySelection} tabIndex={props.tabIndex} dataKey={props.dataKey} />

            {props.showTargetControls && <PickListControls list={props.target} selection={targetSelection} onReorder={onTargetReorder} className="p-picklist-target-controls" dataKey={props.dataKey} />}

        </div>
    );
}));

PickList.displayName = 'PickList';
PickList.defaultProps = {
    __TYPE: 'PickList',
    id: null,
    source: null,
    target: null,
    sourceHeader: null,
    targetHeader: null,
    style: null,
    className: null,
    sourceStyle: null,
    targetStyle: null,
    sourceSelection: null,
    targetSelection: null,
    showSourceControls: true,
    showTargetControls: true,
    metaKeySelection: true,
    tabIndex: 0,
    dataKey: null,
    itemTemplate: null,
    sourceItemTemplate: null,
    targetItemTemplate: null,
    onChange: null,
    onMoveToSource: null,
    onMoveAllToSource: null,
    onMoveToTarget: null,
    onMoveAllToTarget: null,
    onSourceSelectionChange: null,
    onTargetSelectionChange: null
}
