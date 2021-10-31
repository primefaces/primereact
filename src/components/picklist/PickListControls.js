import React, { Component } from 'react';
import { Button } from '../button/Button';
import { ObjectUtils, classNames } from '../utils/Utils';

export class PickListControls extends Component {

    constructor(props) {
        super(props);
        this.moveUp = this.moveUp.bind(this);
        this.moveTop = this.moveTop.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveBottom = this.moveBottom.bind(this);
    }

    moveUp(event) {
        let selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

                if (selectedItemIndex !== 0) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex - 1];
                    list[selectedItemIndex - 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }

            if (this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'up'
                });
            }
        }
    }

    moveTop(event) {
        let selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

                if (selectedItemIndex !== 0) {
                    let movedItem = list.splice(selectedItemIndex, 1)[0];
                    list.unshift(movedItem);
                }
                else {
                    break;
                }
            }

            if (this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'top'
                });
            }
        }
    }

    moveDown(event) {
        let selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

                if (selectedItemIndex !== (list.length - 1)) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex + 1];
                    list[selectedItemIndex + 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }

            if (this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'down'
                });
            }

            this.movedDown = true;
        }
    }

    moveBottom(event) {
        let selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

                if (selectedItemIndex !== (list.length - 1)) {
                    let movedItem = list.splice(selectedItemIndex, 1)[0];
                    list.push(movedItem);
                }
                else {
                    break;
                }
            }

            if (this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'bottom'
                });
            }
        }
    }

    render() {
        let moveDisabled = !this.props.selection.length;
        let className = classNames('p-picklist-buttons', this.props.className);

        return <div className={className}>
            <Button disabled={moveDisabled} type="button" icon="pi pi-angle-up" onClick={this.moveUp}></Button>
            <Button disabled={moveDisabled} type="button" icon="pi pi-angle-double-up" onClick={this.moveTop}></Button>
            <Button disabled={moveDisabled} type="button" icon="pi pi-angle-down" onClick={this.moveDown}></Button>
            <Button disabled={moveDisabled} type="button" icon="pi pi-angle-double-down" onClick={this.moveBottom}></Button>
        </div>;
    }
}
