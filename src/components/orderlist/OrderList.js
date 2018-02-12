import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrderListControls } from './OrderListControls';
import { OrderListSubList } from './OrderListSubList';
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
        listStyle: PropTypes.object,
        responsive: PropTypes.bool,
        dragdrop: PropTypes.func,
        dragdropScope: PropTypes.string,
        onChange: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            selection: []
        };

        this.onItemClick = this.onItemClick.bind(this);
        this.onReorder = this.onReorder.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onItemClick(event) {
        let metaKey = (event.originalEvent.metaKey || event.originalEvent.ctrlKey);
        let index = ObjectUtils.findIndexInList(event.value, this.state.selection);
        let selected = (index !== -1);
        let selection;
        
        if (selected) {
            if (metaKey)
                selection = this.state.selection.filter((val, i) => i !== index);
            else
                selection = [event.value];
        }
        else {
            if (metaKey)
                selection = [...this.state.selection, event.value];
            else
                selection = [event.value];
        }
            
        this.setState({selection: selection});
    }
    
    isSelected(item) {
        return this.findIndexInList(item, this.state.selection) !== -1;
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

    onReorder(event) {
        if (this.props.onChange) {
            this.props.onChange({
                event: event.originalEvent,
                value: event.value
            });
        }

        this.reorderDirection = event.direction;
    }

    componentDidUpdate() {
        if(this.reorderDirection) {
            this.updateListScroll();
            this.reorderDirection = null;
        }
    }

    updateListScroll() {
        let listItems = DomHandler.find(this.subList.listElement, '.ui-orderlist-item.ui-state-highlight');

        if(listItems && listItems.length) {
            switch(this.reorderDirection) {
                case 'up':
                    DomHandler.scrollInView(this.subList.listElement, listItems[0]);
                break;
                
                case 'top':
                    this.subList.listElement.scrollTop = 0;
                break;
                
                case 'down':
                    DomHandler.scrollInView(this.subList.listElement, listItems[listItems.length - 1]);
                break;
                
                case 'bottom':
                    this.subList.listElement.scrollTop = this.subList.listElement.scrollHeight;
                break;
                
                default:
                break;
            }
        }
    }

    render() {
        let className = classNames('ui-orderlist ui-widget', this.props.className, {
            'ui-orderlist-responsive': this.props.responsive
        });

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                <OrderListControls value={this.props.value} selection={this.state.selection} onReorder={this.onReorder} />
                <OrderListSubList ref={(el) => this.subList = el} value={this.props.value} selection={this.state.selection} onItemClick={this.onItemClick} 
                            itemTemplate={this.props.itemTemplate} header={this.props.header} listStyle={this.props.listStyle}/>
            </div>
        );
    }
}