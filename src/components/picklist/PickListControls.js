import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Button} from '../button/Button';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class PickListControls extends Component {
    
    static defaultProps = {
        className: null,
        list: null,
        selection: null,
        onReorder: null
    }

    static propTypes = {
        className: PropTypes.string,
        list: PropTypes.array,
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
        let selectedItems = this.props.selection;
        
        if(selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for(let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== 0) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex - 1];
                    list[selectedItemIndex - 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            
            if(this.props.onReorder) {
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
        
        if(selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for(let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== 0) {
                    let movedItem = list.splice(selectedItemIndex,1)[0];
                    list.unshift(movedItem);
                }
                else {
                    break;
                }
            }

            if(this.props.onReorder) {
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
        
        if(selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for(let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== (list.length - 1)) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex+1];
                    list[selectedItemIndex+1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }

            if(this.props.onReorder) {
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
        
        if(selectedItems && selectedItems.length) {
            let list = [...this.props.list];

            for(let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== (list.length - 1)) {
                    let movedItem = list.splice(selectedItemIndex,1)[0];
                    list.push(movedItem);
                }
                else {
                    break;
                }
            }

            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: list,
                    direction: 'bottom'
                });
            }
        }
    }
    
    render() {
        let className = classNames('p-picklist-buttons', this.props.className);
        
        return <div className={className}>
                    <div className="p-picklist-buttons-cell">
                        <Button type="button" icon="pi pi-angle-up" onClick={this.moveUp}></Button>
                        <Button type="button" icon="pi pi-angle-double-up" onClick={this.moveTop}></Button>
                        <Button type="button" icon="pi pi-angle-down" onClick={this.moveDown}></Button>
                        <Button type="button" icon="pi pi-angle-double-down" onClick={this.moveBottom}></Button>
                    </div>
                </div>;
    }
}