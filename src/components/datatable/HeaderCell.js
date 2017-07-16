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

    render() {
        var sorted = this.props.sortField === this.props.field;
        var className = classNames('ui-state-default ui-unselectable-text', 
                    {'ui-sortable-column': this.props.sortable, 'ui-state-active': sorted}, this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? this.props.sortOrder < 0 ? 'fa-sort-desc' : 'fa-sort-asc': 'fa-sort';
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