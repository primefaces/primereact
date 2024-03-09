import * as React from 'react';
import { ariaLabel } from '../api/Locale';
import { Button } from '../button/Button';
import { useMatchMedia, useMergeProps } from '../hooks/Hooks';
import { AngleDoubleDownIcon } from '../icons/angledoubledown';
import { AngleDoubleLeftIcon } from '../icons/angledoubleleft';
import { AngleDoubleRightIcon } from '../icons/angledoubleright';
import { AngleDoubleUpIcon } from '../icons/angledoubleup';
import { AngleDownIcon } from '../icons/angledown';
import { AngleLeftIcon } from '../icons/angleleft';
import { AngleRightIcon } from '../icons/angleright';
import { AngleUpIcon } from '../icons/angleup';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const PickListTransferControls = React.memo((props) => {
    const mergeProps = useMergeProps();
    const viewChanged = useMatchMedia(`(max-width: ${props.breakpoint})`, props.breakpoint);
    const { ptm, cx, unstyled } = props;

    function getIconComponent(iconType) {
        switch (iconType) {
            case 'moveToTargetIcon':
                return props.moveToTargetIcon || viewChanged ? props.moveToTargetIcon || <AngleDownIcon /> : props.moveToTargetIcon || <AngleRightIcon />;
            case 'moveAllToTargetIcon':
                return props.moveAllToTargetIcon || viewChanged ? props.moveAllToTargetIcon || <AngleDoubleDownIcon /> : props.moveAllToTargetIcon || <AngleDoubleRightIcon />;
            case 'moveToSourceIcon':
                return props.moveToSourceIcon || viewChanged ? props.moveToSourceIcon || <AngleUpIcon /> : props.moveToSourceIcon || <AngleLeftIcon />;
            case 'moveAllToSourceIcon':
                return props.moveAllToSourceIcon || viewChanged ? props.moveAllToSourceIcon || <AngleDoubleUpIcon /> : props.moveAllToSourceIcon || <AngleDoubleLeftIcon />;
            default:
                return null;
        }
    }

    const moveToTargetIcon = IconUtils.getJSXIcon(getIconComponent('moveToTargetIcon'), undefined, { props, viewChanged });
    const moveAllToTargetIcon = IconUtils.getJSXIcon(getIconComponent('moveAllToTargetIcon'), undefined, { props, viewChanged });
    const moveToSourceIcon = IconUtils.getJSXIcon(getIconComponent('moveToSourceIcon'), undefined, { props, viewChanged });
    const moveAllToSourceIcon = IconUtils.getJSXIcon(getIconComponent('moveAllToSourceIcon'), undefined, { props, viewChanged });

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

    const buttonsProps = mergeProps(
        {
            className: classNames(props.className, cx('buttons'))
        },
        ptm('buttons', { hostName: props.hostName })
    );

    return (
        <div {...buttonsProps}>
            <Button
                disabled={moveRightDisabled}
                type="button"
                icon={moveToTargetIcon}
                onClick={moveRight}
                pt={ptm('moveToTargetButton')}
                unstyled={unstyled}
                aria-label={ariaLabel('moveToTarget')}
                __parentMetadata={{ parent: props.metaData }}
            ></Button>
            <Button
                disabled={moveAllRightDisabled}
                type="button"
                icon={moveAllToTargetIcon}
                onClick={moveAllRight}
                pt={ptm('moveAllToTargetButton')}
                unstyled={unstyled}
                aria-label={ariaLabel('moveAllToTarget')}
                __parentMetadata={{ parent: props.metaData }}
            ></Button>
            <Button disabled={moveLeftDisabled} type="button" icon={moveToSourceIcon} onClick={moveLeft} pt={ptm('moveToSourceButton')} unstyled={unstyled} aria-label={ariaLabel('moveToSource')} __parentMetadata={{ parent: props.metaData }}></Button>
            <Button
                disabled={moveAllLeftDisabled}
                type="button"
                icon={moveAllToSourceIcon}
                onClick={moveAllLeft}
                pt={ptm('moveAllToSourceButton')}
                unstyled={unstyled}
                aria-label={ariaLabel('moveAllToSource')}
                __parentMetadata={{ parent: props.metaData }}
            ></Button>
        </div>
    );
});

PickListTransferControls.displayName = 'PickListTransferControls';
