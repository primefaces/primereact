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
        selectionMode: null,
        selectionKeys: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        lazy: false,
        rowClassName: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onRowClick: null,
        onSelect: null,
        onUnselect: null,
        onSelectionChange: null
    }

    static propsTypes = {
        value: PropTypes.array,
        columns: PropTypes.array,
        expandedKeys: PropTypes.array,
        paginator: PropTypes.bool,
        first: PropTypes.number,
        rows: PropTypes.number,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.array,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        lazy: PropTypes.bool,
        rowClassName: PropTypes.func,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onRowClick: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onSelectionChange: PropTypes.func
    }

    createRow(node) {
        return (
            <TreeTableRow key={node.key||JSON.stringify(node.data)} level={0}
                            node={node} columns={this.props.columns} expandedKeys={this.props.expandedKeys} 
                            onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse}
                            selectionMode={this.props.selectionMode} selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange}
                            metaKeySelection={this.props.metaKeySelection} onRowClick={this.props.onRowClick} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                            propagateSelectionUp={this.props.propagateSelectionDown} propagateSelectionDown={this.props.propagateSelectionDown} 
                            rowClassName={this.props.rowClassName} />
        );
    }

    renderRows() {
        if (this.props.value && this.props.value.length) {
            if (this.props.paginator && !this.props.lazy) {
                let rpp = this.props.rows||0;
                let startIndex = this.props.first||0;
                let endIndex = (startIndex + rpp);
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