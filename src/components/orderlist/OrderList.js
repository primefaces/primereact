import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {OrderListControls} from './OrderListControls';
import {OrderListSubList} from './OrderListSubList';
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
        tabIndex: '0',
        onChange: null,
        itemTemplate: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        header: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        listStyle: PropTypes.object,
        responsive: PropTypes.bool,
        dragdrop: PropTypes.bool,
        tabIndex: PropTypes.string,
        onChange: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            selection: []
        };

        this.onItemClick = this.onItemClick.bind(this);
        this.onItemKeyDown = this.onItemKeyDown.bind(this);
        this.onReorder = this.onReorder.bind(this);
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

    onItemKeyDown(event) {
        let listItem = event.originalEvent.currentTarget;
        
        switch(event.originalEvent.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(listItem);
                if (nextItem) {
                    nextItem.focus();
                }
                
                event.originalEvent.preventDefault();
            break;
            
            //up
            case 38:
                var prevItem = this.findPrevItem(listItem);
                if (prevItem) {
                    prevItem.focus();
                }
                
                event.originalEvent.preventDefault();
            break;
            
            //enter
            case 13:
                this.onItemClick(event);
                event.originalEvent.preventDefault();
            break;

            default:
            break;
        }
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        if (nextItem)
            return !DomHandler.hasClass(nextItem, 'p-orderlist-item') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        
        if (prevItem)
            return !DomHandler.hasClass(prevItem, 'p-orderlist-item') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
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
        let listItems = DomHandler.find(this.subList.listElement, '.p-orderlist-item.p-highlight');

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
        let className = classNames('p-orderlist p-component', this.props.className, {
            'p-orderlist-responsive': this.props.responsive
        });

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                <OrderListControls value={this.props.value} selection={this.state.selection} onReorder={this.onReorder} />
                <OrderListSubList ref={(el) => this.subList = el} value={this.props.value} selection={this.state.selection} onItemClick={this.onItemClick} onItemKeyDown={this.onItemKeyDown} 
                            itemTemplate={this.props.itemTemplate} header={this.props.header} listStyle={this.props.listStyle}
                            dragdrop={this.props.dragdrop} onDragStart={this.onDragStart} onDragEnter={this.onDragEnter} onDragEnd={this.onDragEnd} onDragLeave={this.onDragEnter} onDrop={this.onDrop}
                            onChange={this.props.onChange} tabIndex={this.props.tabIndex} />
            </div>
        );
    }
}