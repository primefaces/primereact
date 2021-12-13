import React, { Component } from 'react';
import { ObjectUtils, classNames } from '../utils/Utils';
import { Button } from '../button/Button';

export class PickListTransferControls extends Component {

    constructor(props) {
        super(props);

        this.moveRight = this.moveRight.bind(this);
        this.moveAllRight = this.moveAllRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveAllLeft = this.moveAllLeft.bind(this);
    }

    moveRight(event) {
        let selection = this.props.sourceSelection;

        if (ObjectUtils.isNotEmpty(selection)) {
            let targetList = [...this.props.target];
            let sourceList = [...this.props.source];

            for (let i = 0; i < selection.length; i++) {
                let selectedItem = selection[i];

                if (ObjectUtils.findIndexInList(selectedItem, targetList, this.props.dataKey) === -1) {
                    targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList, this.props.dataKey), 1)[0]);
                }
            }

            if (this.props.onTransfer) {
                this.props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'toTarget'
                })
            }
        }
    }

    moveAllRight(event) {
        if (this.props.source) {
            let targetList = [...this.props.target, ...this.props.source];
            let sourceList = [];

            if (this.props.onTransfer) {
                this.props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'allToTarget'
                })
            }
        }
    }

    moveLeft(event) {
        let selection = this.props.targetSelection;

        if (ObjectUtils.isNotEmpty(selection)) {
            let targetList = [...this.props.target];
            let sourceList = [...this.props.source];

            for (let i = 0; i < selection.length; i++) {
                let selectedItem = selection[i];

                if (ObjectUtils.findIndexInList(selectedItem, sourceList, this.props.dataKey) === -1) {
                    sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList, this.props.dataKey), 1)[0]);
                }
            }

            if (this.props.onTransfer) {
                this.props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'toSource'
                })
            }
        }
    }

    moveAllLeft(event) {
        if (this.props.source) {
            let sourceList = [...this.props.source, ...this.props.target];
            let targetList = [];

            if (this.props.onTransfer) {
                this.props.onTransfer({
                    originalEvent: event,
                    source: sourceList,
                    target: targetList,
                    direction: 'allToSource'
                })
            }
        }
    }



    render() {
        let moveRightDisabled = ObjectUtils.isEmpty(this.props.sourceSelection);
        let moveLeftDisabled = ObjectUtils.isEmpty(this.props.targetSelection);
        let moveAllRightDisabled = ObjectUtils.isEmpty(this.props.source);
        let moveAllLeftDisabled = ObjectUtils.isEmpty(this.props.target);

        let className = classNames('p-picklist-buttons p-picklist-transfer-buttons', this.props.className);

        return <div className={className}>
            <Button disabled={moveRightDisabled} type="button" icon="pi pi-angle-right" onClick={this.moveRight}></Button>
            <Button disabled={moveAllRightDisabled} type="button" icon="pi pi-angle-double-right" onClick={this.moveAllRight}></Button>
            <Button disabled={moveLeftDisabled} type="button" icon="pi pi-angle-left" onClick={this.moveLeft}></Button>
            <Button disabled={moveAllLeftDisabled} type="button" icon="pi pi-angle-double-left" onClick={this.moveAllLeft}></Button>
        </div>;
    }
}
