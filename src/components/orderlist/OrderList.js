import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames'

export class OrderList extends Component {

    static defaultProps = {
        id: null,
        value: null,
        header: null,
        style: null,
        className: null,
        listStyle: null,
        responsive: false,
        dragdrop: false,
        dragdropScope: null,
        onChange: null,
        itemTemplate: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        header: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        liststyle: PropTypes.object,
        responsive: PropTypes.bool,
        dragdrop: PropTypes.func,
        dragdropScope: PropTypes.string,
        onChange: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: []
        };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onItemTouchEnd = this.onItemTouchEnd.bind(this);
        this.onListMouseMove = this.onListMouseMove.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveTop = this.moveTop.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveBottom = this.moveBottom.bind(this);
    }

    onItemClick(event, item) {
        let metaKey = (event.metaKey || event.ctrlKey);
        let selection = this.state.selectedItems;
        let index = this.findIndexInList(item, selection);
        let selected = (index !== -1);
        
        if(selected && metaKey) {
            selection = selection.filter((val, i) => i !== index);
        }
        else {
            selection = (metaKey) ? selection || [] : [];
            selection.push(item);
        }

        this.setState({selectedItems: selection});
    }
    
    onItemTouchEnd(event) {
        this.itemTouched = true;
    }

    isSelected(item) {
        return this.findIndexInList(item, this.state.selectedItems) !== -1;
    }

    findIndexInList(item, list) {
        let index = -1;

        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === item) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    moveUp(event) {
        let selectedItems = this.state.selectedItems;
        
        if(selectedItems) {
            let value = [...this.props.value];
            
            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, value);

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
            
            this.movedUp = true;
            
            if(this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: value
                })
            }
        }
    }

    moveTop(event) {
        let selectedItems = this.state.selectedItems;
        
        if(selectedItems) {
            let value = [...this.props.value];
            
            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, value);

                if (selectedItemIndex !== 0) {
                    let movedItem = value.splice(selectedItemIndex, 1)[0];
                    value.unshift(movedItem);
                    this.listContainer.scrollTop = 0;
                }
                else {
                    break;
                }
            }

            if(this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: value
                })
            }
            
            this.listContainer.scrollTop = 0;
        }
    }

    moveDown(event) {
        let selectedItems = this.state.selectedItems;
        
        if(selectedItems) {
            let value = [...this.props.value];
            
            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, value);

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

            this.movedDown = true;
            
            if(this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: value
                })
            }
        }
    }

    moveBottom(event) {
        let selectedItems = this.state.selectedItems;
        
        if(selectedItems) {
            let value = [...this.props.value];
            
            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, value);

                if (selectedItemIndex !== (value.length - 1)) {
                    let movedItem = value.splice(selectedItemIndex, 1)[0];
                    value.push(movedItem);
                }
                else {
                    break;
                }
            }

            if(this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: value
                })
            }
            
            this.listContainer.scrollTop = this.listContainer.scrollHeight;
        }
    }

    onDragStart(event, index) {
        this.dragging = true;
        this.draggedItemIndex = index;
        if(this.props.dragdropScope) {
            event.dataTransfer.setData("text", this.props.dragdropScope);
        }
    }
    
    onDragOver(event, index) {
        if(this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
            this.dragOverItemIndex = index;
            DomHandler.addClass(event.target, 'ui-state-highlight');
            event.preventDefault();
        }
    }
    
    onDragLeave(event, index) {
        this.dragOverItemIndex = null;
        DomHandler.removeClass(event.target, 'ui-state-highlight');
    }
    
    onDrop(event, index) {
        let dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1;
        let value = [...this.props.value];
        ObjectUtils.reorderArray(value, this.draggedItemIndex, dropIndex);
        this.dragOverItemIndex = null;
        DomHandler.removeClass(event.target, 'ui-state-highlight');

        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            })
        }
    }
    
    onDragEnd(event) {
        this.dragging = false;
    }
    
    onListMouseMove(event) {
        if(this.dragging) {
            let offsetY = this.listContainer.getBoundingClientRect().top + document.body.scrollTop;
            let bottomDiff = (offsetY + this.listContainer.clientHeight) - event.pageY;
            let topDiff = (event.pageY - offsetY);
            if(bottomDiff < 25 && bottomDiff > 0)
                this.listContainer.scrollTop += 15;
            else if(topDiff < 25 && topDiff > 0)
                this.listContainer.scrollTop -= 15;
        }
    }

    updateScrollView() {
        if(this.movedUp||this.movedDown) {
            let listItems = this.listContainer.getElementsByClassName('ui-state-highlight');
            let listItem;
            
            if(this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            
            DomHandler.scrollInView(this.listContainer, listItem);
            this.movedUp = false;
            this.movedDown = false;
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.value !== this.props.value) { 
            this.updateScrollView();
        }
    }

    render() {
        let className = classNames('ui-orderlist ui-widget', this.props.className, {
            'ui-orderlist-responsive': this.props.responsive
        });

        let upButton = <Button type="button" icon="fa-angle-up" onClick={this.moveUp}></Button>;
        let topButton = <Button type="button" icon="fa-angle-double-up" onClick={this.moveTop}></Button>;
        let downButton = <Button type="button" icon="fa-angle-down" onClick={this.moveDown}></Button>;
        let bottomButton = <Button type="button" icon="fa-angle-double-down" onClick={this.moveBottom}></Button>;
        let controls = (
            <div className="ui-orderlist-controls">
                {upButton}
                {topButton}
                {downButton}
                {bottomButton}
            </div>
        );

        let listLength = this.props.value ? this.props.value.length: null;
        let header = this.props.header && <div className="ui-orderlist-caption ui-widget-header ui-corner-top">{this.props.header}</div>;
        let list = <ul ref={(el) => this.listContainer = el} className="ui-widget-content ui-orderlist-list ui-corner-bottom" style={this.props.listStyle} onDragOver={this.onListMouseMove}>
                    {
                        this.props.value && this.props.value.map((item, i) => {
                            let listItemContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item;
                            let listStyleClass = classNames('ui-orderlist-item', {'ui-state-highlight': this.isSelected(item)});

                            return [
                                this.props.dragdrop && <li key={i + '_orderlistfirstdroppoint'} className="ui-orderlist-droppoint" onDragOver={(e) => this.onDragOver(e, i)} onDrop={(e) => this.onDrop(e, i)} onDragLeave={this.onDragLeave}></li>
                                ,<li key={i + '_orderlistitem'} className={listStyleClass} onClick={(e) => this.onItemClick(e, item)} draggable={this.props.dragdrop} onDragStart={(e) => this.onDragStart(e, i)} onDragEnd={this.onDragEnd} onTouchEnd={this.onItemTouchEnd}>
                                    {listItemContent}
                                </li>
                                ,this.props.dragdrop && listLength === (i + 1) && <li key={i + '_orderlistdroppoint'} className="ui-orderlist-droppoint" onDragOver={(e) => this.onDragOver(e, i + 1)} onDrop={(e) => this.onDrop(e, i + 1)} onDragLeave={this.onDragLeave}></li>
                            ];
                        })
                    }
                </ul>;
        
        let content = (
            <div className="ui-orderlist-list-container">
                {header}
                {list}
            </div>
        );

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {controls}
                {content}
            </div>
        );
    }
}