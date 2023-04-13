import * as React from 'react';
import { Button } from '../button/Button';
import { classNames, ObjectUtils, IconUtils } from '../utils/Utils';
import { AngleDownIcon } from '../icon/angledown';
import { AngleDoubleUpIcon } from '../icon/angledoubleup';
import { AngleUpIcon } from '../icon/angleup';
import { AngleDoubleDownIcon } from '../icon/angledoubledown';

export const PickListControls = React.memo((props) => {
    function getIconComponent(iconType) {
        switch (iconType) {
            case 'moveUpIcon':
                return props.moveUpIcon || <AngleUpIcon />;
            case 'moveTopIcon':
                return props.moveTopIcon || <AngleDoubleUpIcon />;
            case 'moveDownIcon':
                return props.moveDownIcon || <AngleDownIcon />;
            case 'moveBottomIcon':
                return props.moveBottomIcon || <AngleDoubleDownIcon />;
            default:
                return null;
        }
    }

    const moveUpIcon = IconUtils.getJSXIcon(getIconComponent('moveUpIcon'), undefined, { props });
    const moveTopIcon = IconUtils.getJSXIcon(getIconComponent('moveTopIcon'), undefined, { props });
    const moveDownIcon = IconUtils.getJSXIcon(getIconComponent('moveDownIcon'), undefined, { props });
    const moveBottomIcon = IconUtils.getJSXIcon(getIconComponent('moveBottomIcon'), undefined, { props });

    const moveDisabled = !props.selection || !props.selection.length;

    const moveUp = (event) => {
        const selectedItems = props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...props.list];

            for (let i = 0; i < selectedItems.length; i++) {
                const selectedItem = selectedItems[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, props.dataKey);

                if (selectedItemIndex !== 0) {
                    const movedItem = list[selectedItemIndex];
                    const temp = list[selectedItemIndex - 1];

                    list[selectedItemIndex - 1] = movedItem;
                    list[selectedItemIndex] = temp;
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'up'
                });
            }
        }
    };

    const moveTop = (event) => {
        const selectedItems = props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...props.list];

            for (let i = 0; i < selectedItems.length; i++) {
                const selectedItem = selectedItems[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, props.dataKey);

                if (selectedItemIndex !== 0) {
                    const movedItem = list.splice(selectedItemIndex, 1)[0];

                    list.unshift(movedItem);
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'top'
                });
            }
        }
    };

    const moveDown = (event) => {
        const selectedItems = props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...props.list];

            for (let i = selectedItems.length - 1; i >= 0; i--) {
                const selectedItem = selectedItems[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, props.dataKey);

                if (selectedItemIndex !== list.length - 1) {
                    const movedItem = list[selectedItemIndex];
                    const temp = list[selectedItemIndex + 1];

                    list[selectedItemIndex + 1] = movedItem;
                    list[selectedItemIndex] = temp;
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'down'
                });
            }
        }
    };

    const moveBottom = (event) => {
        const selectedItems = props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...props.list];

            for (let i = selectedItems.length - 1; i >= 0; i--) {
                const selectedItem = selectedItems[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, props.dataKey);

                if (selectedItemIndex !== list.length - 1) {
                    const movedItem = list.splice(selectedItemIndex, 1)[0];

                    list.push(movedItem);
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'bottom'
                });
            }
        }
    };

    const className = classNames('p-picklist-buttons', props.className);

    return (
        <div className={className}>
            <Button disabled={moveDisabled} type="button" icon={moveUpIcon} onClick={moveUp}></Button>
            <Button disabled={moveDisabled} type="button" icon={moveTopIcon} onClick={moveTop}></Button>
            <Button disabled={moveDisabled} type="button" icon={moveDownIcon} onClick={moveDown}></Button>
            <Button disabled={moveDisabled} type="button" icon={moveBottomIcon} onClick={moveBottom}></Button>
        </div>
    );
});

PickListControls.displayName = 'PickListControls';
