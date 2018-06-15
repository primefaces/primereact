import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ObjectUtils from '../utils/ObjectUtils';
import { PickListItem } from './PickListItem';

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
        itemTemplate: null,
        onItemClick: null,
        onSelectionChange: null
    }

    static propsTypes = {
        list: PropTypes.array,
        selection: PropTypes.array,
        header: PropTypes.string,
        className: PropTypes.string,
        listClassName: PropTypes.string,
        style: PropTypes.object,
        showControls: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        itemTemplate: PropTypes.func,
        onItemClick: PropTypes.func,
        onSelectionChange: PropTypes.func
    }
    
    constructor() {
        super();
        this.onItemClick = this.onItemClick.bind(this);
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
        
    isSelected(item) {
        return ObjectUtils.findIndexInList(item, this.props.selection) !== -1;
    }
        
    render() {
        let header = null;
        let items = null;
        let wrapperClassName = classNames('ui-picklist-listwrapper', this.props.className, {
            'ui-picklist-listwrapper-nocontrols': !this.props.showControls
        });
        let listClassName = classNames('ui-widget-content ui-picklist-list ui-corner-bottom', this.props.listClassName);
        
        if(this.props.header) {
            header = <div className="ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr">{this.props.header}</div>
        }
        
        if(this.props.list) {
            items = this.props.list.map((item, i) => {
                return <PickListItem key={JSON.stringify(item)} value={item} template={this.props.itemTemplate} selected={this.isSelected(item)} onClick={this.onItemClick} />
            });
        }
        
        return <div className={wrapperClassName}>
                    {header}
                    <ul className={listClassName} style={this.props.style}>
                        {items}
                    </ul>
                 </div>;
    }
}