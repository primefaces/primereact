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
            if(DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title') || DomHandler.hasClass(targetNode, 'p-sortable-column-icon')) {
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
        let className = classNames('p-unselectable-text', 
                        {'p-sortable-column': this.props.sortable, 'p-highlight': sorted}, 
                        this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
            sortIconElement = <span className={classNames('p-sortable-column-icon pi pi-fw', sortIcon)}></span>;
        }

        return (
            <th className={className} style={this.props.style} onClick={this.onClick}>
                <span className="p-column-title">{this.props.header}</span>
                {sortIconElement}
            </th>
        );
    }
} 