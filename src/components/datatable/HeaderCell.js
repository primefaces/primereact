import React, { Component } from 'react';
import classNames from 'classnames';

export class HeaderCell extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onSort({
            originalEvent: e,
            sortField: this.props.field
        });
    }

    getMultiSortMetaData() {
        if(this.props.multiSortMeta) {
            for(var i = 0; i < this.props.multiSortMeta.length; i++) {
                if(this.props.multiSortMeta[i].field === this.props.field) {
                    return this.props.multiSortMeta[i];
                }
            }
        }

        return null;
    }

    render() {
        var multiSortMetaData = this.getMultiSortMetaData();
        var singleSorted = (this.props.field === this.props.sortField);
        var multipleSorted = multiSortMetaData !== null;
        var sortOrder = 0;

        if(singleSorted) 
            sortOrder = this.props.sortOrder;
        else if(multipleSorted) 
            sortOrder = multiSortMetaData.order;

        var sorted = (singleSorted || multipleSorted);
        var className = classNames('ui-state-default ui-unselectable-text', 
                    {'ui-sortable-column': this.props.sortable, 'ui-state-active': sorted}, this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? sortOrder < 0 ? 'fa-sort-desc' : 'fa-sort-asc': 'fa-sort';
            var sortIconClassName = classNames('ui-sortable-column-icon fa fa-fw', sortIcon);
        }

        return (
            <th className={className} style={this.props.style} onClick={this.onClick}>
               <span className="ui-column-title">{this.props.header}</span>
               <span className={sortIconClassName}></span>
            </th>
        );
    }
}