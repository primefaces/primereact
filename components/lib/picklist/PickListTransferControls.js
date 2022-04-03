import * as React from 'react';
import { Button } from '../button/Button';
import { classNames, ObjectUtils } from '../utils/Utils';

export const PickListTransferControls = React.memo((props) => {
    const moveRightDisabled = ObjectUtils.isEmpty(props.sourceSelection);
    const moveLeftDisabled = ObjectUtils.isEmpty(props.targetSelection);
    const moveAllRightDisabled = ObjectUtils.isEmpty(props.source);
    const moveAllLeftDisabled = ObjectUtils.isEmpty(props.target);

    const moveRight = (event) => {
        const selection = props.sourceSelection;

        if (ObjectUtils.isNotEmpty(selection)) {
            let targetList = [...props.target];
            let sourceList = [...props.source];

            for (let i = 0; i < selection.length; i++) {
                const selectedItem = selection[i];

                if (ObjectUtils.findIndexInList(selectedItem, targetList, props.dataKey) === -1) {
                    targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList, props.dataKey), 1)[0]);
                }
            }

            if (props.onTransfer) {
                props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'toTarget'
                });
            }
        }
    }

    const moveAllRight = (event) => {
        if (props.source) {
            let targetList = [...props.target, ...props.source];
            let sourceList = [];

            if (props.onTransfer) {
                props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'allToTarget'
                });
            }
        }
    }

    const moveLeft = (event) => {
        const selection = props.targetSelection;

        if (ObjectUtils.isNotEmpty(selection)) {
            let targetList = [...props.target];
            let sourceList = [...props.source];

            for (let i = 0; i < selection.length; i++) {
                let selectedItem = selection[i];

                if (ObjectUtils.findIndexInList(selectedItem, sourceList, props.dataKey) === -1) {
                    sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList, props.dataKey), 1)[0]);
                }
            }

            if (props.onTransfer) {
                props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'toSource'
                });
            }
        }
    }

    const moveAllLeft = (event) => {
        if (props.source) {
            let sourceList = [...props.source, ...props.target];
            let targetList = [];

            if (props.onTransfer) {
                props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'allToSource'
                })
            }
        }
    }

    const className = classNames('p-picklist-buttons p-picklist-transfer-buttons', props.className);

    return (
        <div className={className}>
            <Button disabled={moveRightDisabled} type="button" icon="pi pi-angle-right" onClick={moveRight}></Button>
            <Button disabled={moveAllRightDisabled} type="button" icon="pi pi-angle-double-right" onClick={moveAllRight}></Button>
            <Button disabled={moveLeftDisabled} type="button" icon="pi pi-angle-left" onClick={moveLeft}></Button>
            <Button disabled={moveAllLeftDisabled} type="button" icon="pi pi-angle-double-left" onClick={moveAllLeft}></Button>
        </div>
    )
});

PickListTransferControls.displayName = 'PickListTransferControls';
