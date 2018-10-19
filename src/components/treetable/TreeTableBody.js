import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeTableRow } from './TreeTableRow'; 

export class TreeTableBody extends Component {

    static defaultProps = {
        value: null,
        columns: null,
        expandedKeys: null,
        paginator: false,
        first: null,
        rows: null,
        lazy: false,
        virtualScroll: false,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propsTypes = {
        value: PropTypes.array,
        columns: PropTypes.array,
        expandedKeys: PropTypes.array,
        paginator: PropTypes.bool,
        first: PropTypes.number,
        rows: PropTypes.number,
        lazy: PropTypes.bool,
        virtualScroll: PropTypes.bool,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    }

    createRow(node) {
        return (
            <TreeTableRow key={node.key||JSON.stringify(node.data)} level={0}
                            node={node} columns={this.props.columns} expandedKeys={this.props.expandedKeys} 
                            onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} />
        );
    }

    renderRows() {
        if (this.props.value && this.props.value.length) {
            if (this.props.paginator && !this.props.lazy) {
                let rpp = this.props.rows||0;
                let startIndex = this.props.first||0;
                let endIndex = this.props.virtualScroll ? (startIndex + (rpp * 2)) : (startIndex + rpp);
                let rows = [];

                for (let i = startIndex; i < endIndex; i++) {
                    rows.push(this.createRow(this.props.value[i]));
                }

                return rows;
            }
            else {
                return this.props.value.map(node => this.createRow(node));
            }
        }
        else {
            return null;
        }  
    }

    render() {
        const rows = this.renderRows();

        return (
            <tbody className="p-treetable-tbody">
                {rows}
            </tbody>
        );
    }
}