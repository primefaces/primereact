import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OrderListItem } from './OrderListItem';
import ObjectUtils from '../utils/ObjectUtils';

export class OrderListSubList extends Component {
    
    static defaultProps = {
        value: null,
        selection: null,
        header: null,
        listStyle: null,
        itemTemplate: null,
        onItemClick: null
    }

    static propsTypes = {
        value: PropTypes.array,
        selection: PropTypes.array,
        header: PropTypes.string,
        listStyle: PropTypes.object,
        itemTemplate: PropTypes.func,
        onItemClick: PropTypes.func
    }
         
    isSelected(item) {
        return ObjectUtils.findIndexInList(item, this.props.selection) !== -1;
    }
        
    render() {
        let header = null;
        let items = null;
        let listClassName = classNames('ui-widget-content ui-orderlist-list', {'ui-corner-bottom': this.props.header, 'ui-corner-all': !this.props.header});

        if (this.props.header) {
            header = <div className="ui-orderlist-caption ui-widget-header ui-corner-top">{this.props.header}</div>
        }
        
        if (this.props.value) {
            items = this.props.value.map((item, i) => {
                return <OrderListItem key={JSON.stringify(item)} index={i} value={item} template={this.props.itemTemplate} selected={this.isSelected(item)} onClick={this.props.onItemClick} />
            });
        }
        
        return (
            <div className="ui-orderlist-list-container">
                {header}
                <ul ref={(el) => this.listElement = el} className={listClassName} style={this.props.listStyle}>
                    {items}
                </ul>
            </div>
        );
    }
}