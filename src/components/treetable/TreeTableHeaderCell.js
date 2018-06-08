import React, { Component } from 'react';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class TreeTableHeaderCell extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if(this.props.sortable) {
            let targetNode = e.target;
            if(DomHandler.hasClass(targetNode, 'ui-sortable-column') || DomHandler.hasClass(targetNode, 'ui-column-title') || DomHandler.hasClass(targetNode, 'ui-sortable-column-icon')) {
                this.props.onSort({
                    originalEvent: e,
                    sortField: this.props.field,
                    sortFunction: this.props.sortFunction,
                    sortable: this.props.sortable
                });
            }
        }
    }

    getMultiSortMetaData() {
        if(this.props.multiSortMeta) {
            for(let i = 0; i < this.props.multiSortMeta.length; i++) {
                if(this.props.multiSortMeta[i].field === this.props.field) {
                    return this.props.multiSortMeta[i];
                }
            }
        }

        return null;
    }

    render() {
        let multiSortMetaData = this.getMultiSortMetaData();
        let singleSorted = (this.props.field === this.props.sortField);
        let multipleSorted = multiSortMetaData !== null;
        let sortOrder = 0;
        let sortIconElement;

        if(singleSorted) 
            sortOrder = this.props.sortOrder;
        else if(multipleSorted) 
            sortOrder = multiSortMetaData.order;

        let sorted = this.props.sortable && (singleSorted || multipleSorted);
        let className = classNames('ui-state-default ui-unselectable-text', 
                        {'ui-sortable-column': this.props.sortable, 'ui-state-active': sorted}, 
                        this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
            sortIconElement = <span className={classNames('ui-sortable-column-icon pi pi-fw', sortIcon)}></span>;
        }

        return (
            <th className={className} style={this.props.style} onClick={this.onClick}>
                <span className="ui-column-title">{this.props.header}</span>
                {sortIconElement}
            </th>
        );
    }
} 