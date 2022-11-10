import * as React from 'react';
import { Button } from '../button/Button';
import { ObjectUtils } from '../utils/Utils';

export const OrderListControls = React.memo((props) => {
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

    return (
        <div className="p-orderlist-controls">
            <Button type="button" icon="pi pi-angle-up" onClick={moveUp}></Button>
            <Button type="button" icon="pi pi-angle-double-up" onClick={moveTop}></Button>
            <Button type="button" icon="pi pi-angle-down" onClick={moveDown}></Button>
            <Button type="button" icon="pi pi-angle-double-down" onClick={moveBottom}></Button>
        </div>
    );
});

OrderListControls.displayName = 'OrderListControls';
