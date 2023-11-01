import * as React from 'react';
import { Button } from '../button/Button';
import { AngleDoubleDownIcon } from '../icons/angledoubledown';
import { AngleDoubleUpIcon } from '../icons/angledoubleup';
import { AngleDownIcon } from '../icons/angledown';
import { AngleUpIcon } from '../icons/angleup';
import { classNames, useMergeProps, ObjectUtils } from '../utils/Utils';

export const PickListControls = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx, unstyled } = props;

    const moveUpIcon = props.moveUpIcon || <AngleUpIcon />;
    const moveTopIcon = props.moveTopIcon || <AngleDoubleUpIcon />;
    const moveDownIcon = props.moveDownIcon || <AngleDownIcon />;
    const moveBottomIcon = props.moveBottomIcon || <AngleDoubleDownIcon />;

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

    const controlsProps = mergeProps(
        {
            className: classNames(props.className, cx('controls'))
        },
        ptm('controls', { hostName: props.hostName })
    );

    return (
        <div {...controlsProps}>
            <Button disabled={moveDisabled} type="button" icon={moveUpIcon} onClick={moveUp} pt={ptm('moveUpButton')} unstyled={unstyled} __parentMetadata={{ parent: props.metaData }}></Button>
            <Button disabled={moveDisabled} type="button" icon={moveTopIcon} onClick={moveTop} pt={ptm('moveTopButton')} unstyled={unstyled} __parentMetadata={{ parent: props.metaData }}></Button>
            <Button disabled={moveDisabled} type="button" icon={moveDownIcon} onClick={moveDown} pt={ptm('moveDownButton')} unstyled={unstyled} __parentMetadata={{ parent: props.metaData }}></Button>
            <Button disabled={moveDisabled} type="button" icon={moveBottomIcon} onClick={moveBottom} pt={ptm('moveBottomButton')} unstyled={unstyled} __parentMetadata={{ parent: props.metaData }}></Button>
        </div>
    );
});

PickListControls.displayName = 'PickListControls';
