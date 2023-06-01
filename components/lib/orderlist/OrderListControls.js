import * as React from 'react';
import { Button } from '../button/Button';
import { AngleDoubleDownIcon } from '../icons/angledoubledown';
import { AngleDoubleUpIcon } from '../icons/angledoubleup';
import { AngleDownIcon } from '../icons/angledown';
import { AngleUpIcon } from '../icons/angleup';
import { ObjectUtils, mergeProps } from '../utils/Utils';

export const OrderListControls = React.memo((props) => {
    const moveUpIcon = props.moveUpIcon || <AngleUpIcon />;
    const moveTopIcon = props.moveTopIcon || <AngleDoubleUpIcon />;
    const moveDownIcon = props.moveDownIcon || <AngleDownIcon />;
    const moveBottomIcon = props.moveBottomIcon || <AngleDoubleDownIcon />;

    const moveUp = (event) => {
        if (props.selection) {
            let value = [...props.value];

            for (let i = 0; i < props.selection.length; i++) {
                const selectedItem = props.selection[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value, props.dataKey);

                if (selectedItemIndex !== 0) {
                    const movedItem = value[selectedItemIndex];
                    const temp = value[selectedItemIndex - 1];

                    value[selectedItemIndex - 1] = movedItem;
                    value[selectedItemIndex] = temp;
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value: value,
                    direction: 'up'
                });
            }
        }
    };

    const moveTop = (event) => {
        if (props.selection) {
            let value = [...props.value];

            for (let i = 0; i < props.selection.length; i++) {
                const selectedItem = props.selection[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value, props.dataKey);

                if (selectedItemIndex !== 0) {
                    const movedItem = value.splice(selectedItemIndex, 1)[0];

                    value.unshift(movedItem);
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value: value,
                    direction: 'top'
                });
            }
        }
    };

    const moveDown = (event) => {
        if (props.selection) {
            let value = [...props.value];

            for (let i = props.selection.length - 1; i >= 0; i--) {
                const selectedItem = props.selection[i];
                const selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value, props.dataKey);

                if (selectedItemIndex !== value.length - 1) {
                    const movedItem = value[selectedItemIndex];
                    const temp = value[selectedItemIndex + 1];

                    value[selectedItemIndex + 1] = movedItem;
                    value[selectedItemIndex] = temp;
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value,
                    direction: 'down'
                });
            }
        }
    };

    const moveBottom = (event) => {
        if (props.selection) {
            let value = [...props.value];

            for (let i = props.selection.length - 1; i >= 0; i--) {
                let selectedItem = props.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value, props.dataKey);

                if (selectedItemIndex !== value.length - 1) {
                    const movedItem = value.splice(selectedItemIndex, 1)[0];

                    value.push(movedItem);
                } else {
                    break;
                }
            }

            if (props.onReorder) {
                props.onReorder({
                    originalEvent: event,
                    value,
                    direction: 'bottom'
                });
            }
        }
    };

    const controlProps = mergeProps(
        {
            className: 'p-orderlist-controls'
        },
        props.ptm('control')
    );

    return (
        <div {...controlProps}>
            <Button type="button" icon={moveUpIcon} onClick={moveUp} pt={props.ptm('moveUpButton')}></Button>
            <Button type="button" icon={moveTopIcon} onClick={moveTop} pt={props.ptm('moveTopButton')}></Button>
            <Button type="button" icon={moveDownIcon} onClick={moveDown} pt={props.ptm('moveDownButton')}></Button>
            <Button type="button" icon={moveBottomIcon} onClick={moveBottom} pt={props.ptm('moveBottomButton')}></Button>
        </div>
    );
});

OrderListControls.displayName = 'OrderListControls';
