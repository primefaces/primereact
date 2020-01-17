import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ObjectUtils from '../utils/ObjectUtils';
import { PickListItem } from './PickListItem';
import DomHandler from '../utils/DomHandler';

export class PickListSubList extends Component {

    static defaultProps = {
        list: null,
        selection: null,
        header: null,
        className: null,
        listClassName: null,
        style: null,
        showControls: true,
        metaKeySelection: true,
        tabIndex: null,
        itemTemplate: null,
        onItemClick: null,
        onSelectionChange: null
    }

    static propTypes = {
        list: PropTypes.array,
        selection: PropTypes.array,
        header: PropTypes.string,
        className: PropTypes.string,
        listClassName: PropTypes.string,
        style: PropTypes.object,
        showControls: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        tabIndex: PropTypes.string,
        itemTemplate: PropTypes.func,
        onItemClick: PropTypes.func,
        onSelectionChange: PropTypes.func
    }

    constructor() {
        super();
        this.onItemClick = this.onItemClick.bind(this);
        this.onItemKeyDown = this.onItemKeyDown.bind(this);
    }

    onItemClick(event) {
        let originalEvent = event.originalEvent;
        let item = event.value;
        let selection = [...this.props.selection];
        let index = ObjectUtils.findIndexInList(item, selection);
        let selected = (index !== -1);
        let metaSelection = this.props.metaKeySelection;

        if(metaSelection) {
            let metaKey = (originalEvent.metaKey||originalEvent.ctrlKey);

            if(selected && metaKey) {
                selection.splice(index, 1);
            }
            else {
                if(!metaKey) {
                    selection.length = 0;
                }
                selection.push(item);
            }
        }
        else {
            if(selected)
                selection.splice(index, 1);
            else
                selection.push(item);
        }

        if(this.props.onSelectionChange) {
            this.props.onSelectionChange({
                event: originalEvent,
                value: selection
            })
        }
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
            return !DomHandler.hasClass(nextItem, 'p-picklist-item') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return !DomHandler.hasClass(prevItem, 'p-picklist-item') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }

    isSelected(item) {
        return ObjectUtils.findIndexInList(item, this.props.selection) !== -1;
    }

    render() {
        let header = null;
        let items = null;
        let wrapperClassName = classNames('p-picklist-listwrapper', this.props.className, {
            'p-picklist-listwrapper-nocontrols': !this.props.showControls
        });
        let listClassName = classNames('p-picklist-list', this.props.listClassName);

        if(this.props.header) {
            header = <div className="p-picklist-caption">{this.props.header}</div>
        }

        if(this.props.list) {
            items = this.props.list.map((item, i) => {
                return <PickListItem key={JSON.stringify(item)} value={item} template={this.props.itemTemplate}
                    selected={this.isSelected(item)} onClick={this.onItemClick} onKeyDown={this.onItemKeyDown} tabIndex={this.props.tabIndex} />
            });
        }

        return <div className={wrapperClassName}>
                    {header}
                    <ul className={listClassName} style={this.props.style} role="listbox" aria-multiselectable={true}>
                        {items}
                    </ul>
                 </div>;
    }
}
