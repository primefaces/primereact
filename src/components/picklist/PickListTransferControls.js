import React, {Component} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
        let className = classNames('p-picklist-buttons', this.props.className);
        
        return <div className={className}>
                    <div className="p-picklist-buttons-cell">
                        <Button type="button" icon="pi pi-angle-right" onClick={this.moveRight}></Button>
                        <Button type="button" icon="pi pi-angle-double-right" onClick={this.moveAllRight}></Button>
                        <Button type="button" icon="pi pi-angle-left" onClick={this.moveLeft}></Button>
                        <Button type="button" icon="pi pi-angle-double-left" onClick={this.moveAllLeft}></Button>
                    </div>
                </div>;
    }
}