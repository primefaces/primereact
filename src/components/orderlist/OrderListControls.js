import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import ObjectUtils from '../utils/ObjectUtils';

export class OrderListControls extends Component {
    
    static defaultProps = {
        value: null,
        selection: null,
        onReorder: null
    }

    static propTypes = {
        value: PropTypes.array,
        selection: PropTypes.array,
        onReorder: PropTypes.func
    }
    
    constructor() {
        super();
        this.moveUp = this.moveUp.bind(this);
        this.moveTop = this.moveTop.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveBottom = this.moveBottom.bind(this);
    }

    moveUp(event) {
        if(this.props.selection) {
            let value = [...this.props.value];
            
            for (let i = 0; i < this.props.selection.length; i++) {
                let selectedItem = this.props.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                if(selectedItemIndex !== 0) {
                    let movedItem = value[selectedItemIndex];
                    let temp = value[selectedItemIndex - 1];
                    value[selectedItemIndex - 1] = movedItem;
                    value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
                        
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: value,
                    direction: 'up'
                })
            }
        }
    }

    moveTop(event) {
        if(this.props.selection) {
            let value = [...this.props.value];
            
            for (let i = 0; i < this.props.selection.length; i++) {
                let selectedItem = this.props.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                if (selectedItemIndex !== 0) {
                    let movedItem = value.splice(selectedItemIndex, 1)[0];
                    value.unshift(movedItem);
                }
                else {
                    break;
                }
            }

            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: value,
                    direction: 'top'
                })
            }
        }
    }

    moveDown(event) {
        if(this.props.selection) {
            let value = [...this.props.value];
            
            for (let i = this.props.selection.length - 1; i >= 0; i--) {
                let selectedItem = this.props.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                if (selectedItemIndex !== (value.length - 1)) {
                    let movedItem = value[selectedItemIndex];
                    let temp = value[selectedItemIndex + 1];
                    value[selectedItemIndex + 1] = movedItem;
                    value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: value,
                    direction: 'down'
                })
            }
        }
    }

    moveBottom(event) {        
        if(this.props.selection) {
            let value = [...this.props.value];
            
            for (let i = this.props.selection.length - 1; i >= 0; i--) {
                let selectedItem = this.props.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                if (selectedItemIndex !== (value.length - 1)) {
                    let movedItem = value.splice(selectedItemIndex, 1)[0];
                    value.push(movedItem);
                }
                else {
                    break;
                }
            }

            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: value,
                    direction: 'bottom'
                })
            }
        }
    }
        
    render() {        
        return (
            <div className="p-orderlist-controls">
                <Button type="button" icon="pi pi-angle-up" onClick={this.moveUp}></Button>
                <Button type="button" icon="pi pi-angle-double-up" onClick={this.moveTop}></Button>
                <Button type="button" icon="pi pi-angle-down" onClick={this.moveDown}></Button>
                <Button type="button" icon="pi pi-angle-double-down" onClick={this.moveBottom}></Button>
            </div>
        );
    }
}