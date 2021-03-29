import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import {Button} from '../button/Button';
import ObjectUtils from '../utils/ObjectUtils';

export class PickListTransferControls extends Component {

    static defaultProps = {
        source: null,
        target: null,
        sourceSelection: null,
        targetSelection: null,
        onTransfer: null
    }

    static propTypes = {
        source: PropTypes.array,
        target: PropTypes.array,
        sourceSelection: PropTypes.array,
        targetSelection: PropTypes.array,
        onTransfer: PropTypes.func
    }

    constructor() {
        super();
        this.moveRight = this.moveRight.bind(this);
        this.moveAllRight = this.moveAllRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveAllLeft = this.moveAllLeft.bind(this);
    }

    moveRight(event) {
        let selection = this.props.sourceSelection;

        if(selection && selection.length) {
            let targetList = [...this.props.target];
            let sourceList = [...this.props.source];

            for(let i = 0; i < selection.length; i++) {
                let selectedItem = selection[i];

                if(ObjectUtils.findIndexInList(selectedItem, targetList) === -1) {
                    targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList), 1)[0]);
                }
            }

            if(this.props.onTransfer) {
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
        if(this.props.source) {
            let targetList = [...this.props.target, ...this.props.source];
            let sourceList = [];

            if(this.props.onTransfer) {
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

        if(selection && selection.length) {
            let targetList = [...this.props.target];
            let sourceList = [...this.props.source];

            for(let i = 0; i < selection.length; i++) {
                let selectedItem = selection[i];

                if(ObjectUtils.findIndexInList(selectedItem, sourceList) === -1) {
                    sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList), 1)[0]);
                }
            }

            if(this.props.onTransfer) {
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
        if(this.props.source) {
            let sourceList = [...this.props.source, ...this.props.target];
            let targetList = [];

            if(this.props.onTransfer) {
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
        let moveRightDisabled = !this.props.sourceSelection.length;
        let moveLeftDisabled = !this.props.targetSelection.length;
        let moveAllRightDisabled = !this.props.source.length;
        let moveAllLeftDisabled = !this.props.target.length;

        let className = classNames('p-picklist-buttons p-picklist-transfer-buttons', this.props.className);

        return <div className={className}>
                    <Button disabled={moveRightDisabled} type="button" icon="pi pi-angle-right" onClick={this.moveRight}></Button>
                    <Button disabled={moveAllRightDisabled} type="button" icon="pi pi-angle-double-right" onClick={this.moveAllRight}></Button>
                    <Button disabled={moveLeftDisabled} type="button" icon="pi pi-angle-left" onClick={this.moveLeft}></Button>
                    <Button disabled={moveAllLeftDisabled} type="button" icon="pi pi-angle-double-left" onClick={this.moveAllLeft}></Button>
                </div>;
    }
}
