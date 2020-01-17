import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';

export class OrderListSubList extends Component {

    static defaultProps = {
        value: null,
        selection: null,
        header: null,
        listStyle: null,
        itemTemplate: null,
        dragdrop: false,
        tabIndex: null,
        onItemClick: null,
        onItemKeyDown: null,
        onChange: null
    }

    static propTypes = {
        value: PropTypes.array,
        selection: PropTypes.array,
        header: PropTypes.string,
        listStyle: PropTypes.object,
        itemTemplate: PropTypes.func,
        dragdrop: PropTypes.bool,
        tabIndex: PropTypes.string,
        onItemClick: PropTypes.func,
        onItemKeyDown: PropTypes.func,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onListMouseMove = this.onListMouseMove.bind(this);
    }

    isSelected(item) {
        return ObjectUtils.findIndexInList(item, this.props.selection) !== -1;
    }

    onDragStart(event, index) {
        this.dragging = true;
        this.draggedItemIndex = index;
        if(this.props.dragdropScope) {
            event.dataTransfer.setData('text', 'orderlist');
        }
    }

    onDragOver(event, index) {
        if(this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
            this.dragOverItemIndex = index;
            DomHandler.addClass(event.target, 'p-orderlist-droppoint-highlight');
            event.preventDefault();
        }
    }

    onDragLeave(event) {
        this.dragOverItemIndex = null;
        DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');
    }

    onDrop(event) {
        let dropIndex = (this.draggedItemIndex > this.dragOverItemIndex) ? this.dragOverItemIndex : (this.dragOverItemIndex === 0) ? 0 : this.dragOverItemIndex - 1;
        let value = [...this.props.value];
        ObjectUtils.reorderArray(value, this.draggedItemIndex, dropIndex);
        this.dragOverItemIndex = null;
        DomHandler.removeClass(event.target, 'p-orderlist-droppoint-highlight');

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
            let offsetY = this.listElement.getBoundingClientRect().top + DomHandler.getWindowScrollTop();
            let bottomDiff = (offsetY + this.listElement.clientHeight) - event.pageY;
            let topDiff = (event.pageY - offsetY);

            if(bottomDiff < 25 && bottomDiff > 0)
                this.listElement.scrollTop += 15;
            else if(topDiff < 25 && topDiff > 0)
                this.listElement.scrollTop -= 15;
        }
    }

    renderDropPoint(index, key) {
        return (
            <li key={key} className="p-orderlist-droppoint"
                            onDragOver={(e) => this.onDragOver(e, index + 1)} onDragLeave={this.onDragLeave} onDrop={this.onDrop}></li>
        );
    }

    render() {
        let header = null;
        let items = null;

        if (this.props.header) {
            header = <div className="p-orderlist-caption">{this.props.header}</div>
        }

        if (this.props.value) {
            items = this.props.value.map((item, i) => {
                let content = this.props.itemTemplate ? this.props.itemTemplate(item) : item;
                let itemClassName = classNames('p-orderlist-item', this.props.className, {'p-highlight': this.isSelected(item)});
                let key = JSON.stringify(item);

                if(this.props.dragdrop) {
                    let items = [
                        this.renderDropPoint(i, key + '_droppoint'),
                        <li key={key} className={itemClassName} onClick={(e) => this.props.onItemClick({originalEvent: e, value: item, index: i})}
                            onKeyDown={(e) => this.props.onItemKeyDown({originalEvent: e, value: item, index: i})} role="option" aria-selected={this.isSelected(item)}
                            draggable="true" onDragStart={(e) => this.onDragStart(e, i)} onDragEnd={this.onDragEnd} tabIndex={this.props.tabIndex}>{content}</li>
                    ];

                    if(i === this.props.value.length - 1) {
                        items.push(this.renderDropPoint(item, i, key + '_droppoint_end'));
                    }

                    return items;
                }
                else {
                    return (
                        <li key={JSON.stringify(item)} className={itemClassName} role="option" aria-selected={this.isSelected(item)}
                            onClick={(e) => this.props.onItemClick({originalEvent: e, value: item, index: i})}
                            onKeyDown={(e) => this.props.onItemKeyDown({originalEvent: e, value: item, index: i})}
                            tabIndex={this.props.tabIndex}>{content}</li>
                    );
                }
            });
        }

        return (
            <div className="p-orderlist-list-container">
                {header}
                <ul ref={(el) => this.listElement = el} className="p-orderlist-list" style={this.props.listStyle} onDragOver={this.onListMouseMove} role="listbox" aria-multiselectable={true}>
                    {items}
                </ul>
            </div>
        );
    }
}
