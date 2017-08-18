import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames'

export class OrderList extends Component {

    static defaultProps = {
        value: null,
        header: null,
        style: null,
        className: null,
        listStyle: null,
        responsive: false,
        dragdrop: false,
        dragdropScope: null,
        onReorder: null,
        itemTemplate: null
    }

    static propsTypes = {
        value: PropTypes.array,
        header: PropTypes.string,
        style: PropTypes.string,
        className: PropTypes.string,
        listStyle: PropTypes.string,
        responsive: PropTypes.bool,
        dragdrop: PropTypes.func,
        dragdropScope: PropTypes.string,
        onReorder: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {values: this.props.value, selectedItems: []};
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onItemTouchEnd = this.onItemTouchEnd.bind(this);
        this.onListMouseMove = this.onListMouseMove.bind(this);
    }

    onItemClick(event, item) {
        let metaKey = (event.metaKey || event.ctrlKey);
        let index = this.findIndexInList(item, this.selectedItems);
        let selected = (index !== -1);

        if (selected && metaKey) {
            this.selectedItems.splice(index, 1);
        }
        else {
            this.selectedItems = (metaKey) ? this.selectedItems || [] : [];
            this.selectedItems.push(item);
        }

        this.setState({selectedItems: this.selectedItems});
    }

    isItemVisible(item){
        return true;
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

    moveUp(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = 0; i < this.selectedItems.length; i++) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== 0) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            
            this.setState({values: this.value});
            this.movedUp = true;
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
        }
    }

    moveTop(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = 0; i < this.selectedItems.length; i++) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== 0) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                    listElement.scrollTop = 0;
                }
                else {
                    break;
                }
            }
            this.setState({values: this.value});
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
            listElement.scrollTop = 0;
        }
    }

    moveDown(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = this.selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== (this.value.length - 1)) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }

            this.setState({values: this.value});
            this.movedDown = true;
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
        }
    }

    moveBottom(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = this.selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== (this.value.length - 1)) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }

            this.setState({values: this.value});
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
            listElement.scrollTop = listElement.scrollHeight;
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
        let dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1,
            _value = [...this.state.values];
        ObjectUtils.reorderArray(_value, this.draggedItemIndex, dropIndex);
        this.setState({values: _value});
        this.dragOverItemIndex = null;
        DomHandler.removeClass(event.target, 'ui-state-highlight');

        if(this.props.onReorder) {
            this.props.onReorder({
                originalEvent: event,
                value: _value
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
    
    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;
        if (newValue !== this.state.values) {
            this.setState({values: newValue});
        } 
    }    

    componentDidUpdate(prevProps, prevState) {
        if(prevState.values !== this.state.value) { 
            this.updateScrollView();
        }
    }

    render() {
        var className = classNames('ui-orderlist ui-widget', this.props.className, {
            'ui-orderlist-responsive': this.props.responsive
        });

        var upButton = <Button type="button" icon="fa-angle-up" onClick={(e) => this.moveUp(e, this.listContainer)}></Button>,
            topButton = <Button type="button" icon="fa-angle-double-up" onClick={(e) => this.moveTop(e, this.listContainer)}></Button>,
            downButton = <Button type="button" icon="fa-angle-down" onClick={(e) => this.moveDown(e, this.listContainer)}></Button>,
            bottomButton = <Button type="button" icon="fa-angle-double-down" onClick={(e) => this.moveBottom(e, this.listContainer)}></Button>;

        var controls = (
            <div className="ui-orderlist-controls">
                {upButton}
                {topButton}
                {downButton}
                {bottomButton}
            </div>
        );

        var valuesLength = this.state.values && this.state.values.length, 
        content = (
            <div className="ui-orderlist-list-container">
                {this.props.header && <div className="ui-orderlist-caption ui-widget-header ui-corner-top">{this.props.header}</div>}
                <ul ref={(el) => this.listContainer = el} className="ui-widget-content ui-orderlist-list ui-corner-bottom" style={this.props.listStyle} onDragOver={this.onListMouseMove}>
                    {
                        this.state.values && this.state.values.map((item, i) => {
                            
                            var listItemContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item,
                            listStyleClass = classNames('ui-orderlist-item', {
                                'ui-state-highlight': this.isSelected(item)
                            });

                            return [
                                this.props.dragdrop && this.isItemVisible(item) && <li key={i + '_orderlistfirstdroppoint'} className="ui-orderlist-droppoint" onDragOver={(e) => this.onDragOver(e, i)} onDrop={(e) => this.onDrop(e, i)} onDragLeave={this.onDragLeave}></li>
                                ,<li key={i + '_orderlistitem'} className={listStyleClass} onClick={(e) => this.onItemClick(e, item)} draggable={this.props.dragdrop} onDragStart={(e) => this.onDragStart(e, i)} onDragEnd={this.onDragEnd} onTouchEnd={this.onItemTouchEnd}>
                                    {listItemContent}
                                </li>
                                ,this.props.dragdrop && valuesLength === (i + 1) && <li key={i + '_orderlistdroppoint'} className="ui-orderlist-droppoint" onDragOver={(e) => this.onDragOver(e, i + 1)} onDrop={(e) => this.onDrop(e, i + 1)} onDragLeave={this.onDragLeave}></li>
                            ]
                            
                        })
                    }
                </ul>
            </div>
        );

        return (
            <div className={className} style={this.props.style}>
                {controls}
                {content}
            </div>
        );
    }
}