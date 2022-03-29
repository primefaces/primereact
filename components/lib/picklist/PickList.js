import React, { useState, useRef, memo, forwardRef } from 'react'
import PropTypes from 'prop-types';
import { PickListSubList } from './PickListSubList';
import { PickListControls } from './PickListControls';
import { PickListTransferControls } from './PickListTransferControls';
import { DomHandler, classNames, ObjectUtils } from '../utils/Utils';
import { useUpdateEffect } from '../hooks/Hooks';

export const PickList = memo(forwardRef((props, ref) => {
    const [sourceSelectionState, setSourceSelectionState] = useState([]);
    const [targetSelectionState, setTargetSelectionState] = useState([]);
    const sourceListElementRef = useRef(null);
    const targetListElementRef = useRef(null);
    const reorderedListElementRef = useRef(null);
    const reorderDirection = useRef(null);
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

    const className = classNames('p-picklist p-component', props.className);

    return (
        <div id={props.id} className={className} style={props.style}>
            {props.showSourceControls && <PickListControls list={props.source} selection={sourceSelection} onReorder={onSourceReorder} className="p-picklist-source-controls" dataKey={props.dataKey} />}

            <PickListSubList ref={sourceListElementRef} list={props.source} selection={sourceSelection} onSelectionChange={(e) => onSelectionChange(e, 'sourceSelection', props.onSourceSelectionChange)} itemTemplate={props.itemTemplate}
                header={props.sourceHeader} style={props.sourceStyle} className="p-picklist-source-wrapper" listClassName="p-picklist-source" metaKeySelection={props.metaKeySelection} tabIndex={props.tabIndex} dataKey={props.dataKey} />

            <PickListTransferControls onTransfer={onTransfer} source={props.source} target={props.target} sourceSelection={sourceSelection} targetSelection={targetSelection} dataKey={props.dataKey} />

            <PickListSubList ref={targetListElementRef} list={props.target} selection={targetSelection} onSelectionChange={(e) => onSelectionChange(e, 'targetSelection', props.onTargetSelectionChange)} itemTemplate={props.itemTemplate}
                header={props.targetHeader} style={props.targetStyle} className="p-picklist-target-wrapper" listClassName="p-picklist-target" metaKeySelection={props.metaKeySelection} tabIndex={props.tabIndex} dataKey={props.dataKey} />

            {props.showTargetControls && <PickListControls list={props.target} selection={targetSelection} onReorder={onTargetReorder} className="p-picklist-target-controls" dataKey={props.dataKey} />}

        </div>
    );
}));

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
    onChange: null,
    onMoveToSource: null,
    onMoveAllToSource: null,
    onMoveToTarget: null,
    onMoveAllToTarget: null,
    onSourceSelectionChange: null,
    onTargetSelectionChange: null
}

PickList.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    source: PropTypes.array,
    target: PropTypes.array,
    sourceHeader: PropTypes.any,
    targetHeader: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    sourcestyle: PropTypes.object,
    targetstyle: PropTypes.object,
    sourceSelection: PropTypes.any,
    targetSelection: PropTypes.any,
    showSourceControls: PropTypes.bool,
    showTargetControls: PropTypes.bool,
    metaKeySelection: PropTypes.bool,
    tabIndex: PropTypes.number,
    dataKey: PropTypes.string,
    itemTemplate: PropTypes.func,
    onChange: PropTypes.func,
    onMoveToSource: PropTypes.func,
    onMoveAllToSource: PropTypes.func,
    onMoveToTarget: PropTypes.func,
    onMoveAllToTarget: PropTypes.func,
    onSourceSelectionChange: PropTypes.func,
    onTargetSelectionChange: PropTypes.func
}
