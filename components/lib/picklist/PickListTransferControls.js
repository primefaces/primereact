import * as React from 'react';
import { Button } from '../button/Button';
import { classNames, ObjectUtils, IconUtils } from '../utils/Utils';
import { AngleLeftIcon } from '../icon/angleleft';
import { AngleDoubleLeftIcon } from '../icon/angledoubleleft';
import { AngleDoubleRightIcon } from '../icon/angledoubleright';
import { AngleRightIcon } from '../icon/angleright';
import { useMatchMedia } from '../hooks/Hooks';
import { AngleDownIcon } from '../icon/angledown';
import { AngleDoubleDownIcon } from '../icon/angledoubledown';
import { AngleUpIcon } from '../icon/angleup';
import { AngleDoubleUpIcon } from '../icon/angledoubleup';

export const PickListTransferControls = React.memo((props) => {
    const matches = useMatchMedia(`(max-width: ${props.breakpoint})`, props.breakpoint);

    function getIconComponent(iconType) {
        switch (iconType) {
            case 'moveToTargetIcon':
                return props.moveToTargetIcon || matches ? <AngleDownIcon /> : <AngleRightIcon />;
            case 'moveAllToTargetIcon':
                return props.moveAllToTargetIcon || matches ? <AngleDoubleDownIcon /> : <AngleDoubleRightIcon />;
            case 'moveToSourceIcon':
                return props.moveToSourceIcon || matches ? <AngleUpIcon /> : <AngleLeftIcon />;
            case 'moveAllToSourceIcon':
                return props.moveAllToSourceIcon || matches ? <AngleDoubleUpIcon /> : <AngleDoubleLeftIcon />;
            default:
                return null;
        }
    }

    const moveToTargetIcon = IconUtils.getJSXIcon(getIconComponent('moveToTargetIcon'), undefined, { props });
    const moveAllToTargetIcon = IconUtils.getJSXIcon(getIconComponent('moveAllToTargetIcon'), undefined, { props });
    const moveToSourceIcon = IconUtils.getJSXIcon(getIconComponent('moveToSourceIcon'), undefined, { props });
    const moveAllToSourceIcon = IconUtils.getJSXIcon(getIconComponent('moveAllToSourceIcon'), undefined, { props });

    const moveRightDisabled = ObjectUtils.isEmpty(props.sourceSelection) || ObjectUtils.isEmpty(props.visibleSourceList);
    const moveLeftDisabled = ObjectUtils.isEmpty(props.targetSelection) || ObjectUtils.isEmpty(props.visibleTargetList);
    const moveAllRightDisabled = ObjectUtils.isEmpty(props.visibleSourceList);
    const moveAllLeftDisabled = ObjectUtils.isEmpty(props.visibleTargetList);

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
    };

    const moveAllRight = (event) => {
        if (props.source) {
            let targetList = [...props.target, ...props.visibleSourceList];
            let sourceList = props.source.filter((s) => !props.visibleSourceList.some((vs) => vs === s));

            if (props.onTransfer) {
                props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'allToTarget'
                });
            }
        }
    };

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
    };

    const moveAllLeft = (event) => {
        if (props.source) {
            let sourceList = [...props.source, ...props.visibleTargetList];
            let targetList = props.target.filter((t) => !props.visibleTargetList.some((vt) => vt === t));

            if (props.onTransfer) {
                props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'allToSource'
                });
            }
        }
    };

    const className = classNames('p-picklist-buttons p-picklist-transfer-buttons', props.className);

    return (
        <div className={className}>
            <Button disabled={moveRightDisabled} type="button" icon={moveToTargetIcon} onClick={moveRight}></Button>
            <Button disabled={moveAllRightDisabled} type="button" icon={moveAllToTargetIcon} onClick={moveAllRight}></Button>
            <Button disabled={moveLeftDisabled} type="button" icon={moveToSourceIcon} onClick={moveLeft}></Button>
            <Button disabled={moveAllLeftDisabled} type="button" icon={moveAllToSourceIcon} onClick={moveAllLeft}></Button>
        </div>
    );
});

PickListTransferControls.displayName = 'PickListTransferControls';
