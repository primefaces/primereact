import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeTableRow } from './TreeTableRow'; 

export class TreeTableBody extends Component {

    static defaultProps = {
        value: null,
        columns: null,
        expandedKeys: null,
        contextMenuSelectionKey: null,
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
        emptyMessage: "No records found",
        loading: false,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onRowClick: null,
        onSelect: null,
        onUnselect: null,
        onSelectionChange: null,
        onContextMenuSelectionChange: null,
        onContextMenu: null
    }

    static propTypes = {
        value: PropTypes.array,
        columns: PropTypes.array,
        expandedKeys: PropTypes.object,
        contextMenuSelectionKey: PropTypes.any,
        paginator: PropTypes.bool,
        first: PropTypes.number,
        rows: PropTypes.number,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.any,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        lazy: PropTypes.bool,
        rowClassName: PropTypes.func,
        emptyMessage: PropTypes.string,
        loading: PropTypes.bool,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onRowClick: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onSelectionChange: PropTypes.func,
        onContextMenuSelectionChange: PropTypes.func,
        onContextMenu: PropTypes.func
    }

    createRow(node) {
        return (
            <TreeTableRow key={node.key||JSON.stringify(node.data)} level={0}
                            node={node} columns={this.props.columns} expandedKeys={this.props.expandedKeys} 
                            onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse}
                            selectionMode={this.props.selectionMode} selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange}
                            metaKeySelection={this.props.metaKeySelection} onRowClick={this.props.onRowClick} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                            propagateSelectionUp={this.props.propagateSelectionUp} propagateSelectionDown={this.props.propagateSelectionDown}
                            rowClassName={this.props.rowClassName}
                            contextMenuSelectionKey={this.props.contextMenuSelectionKey} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange} onContextMenu={this.props.onContextMenu} />
        );
    }

    renderRows() {
        if (this.props.paginator && !this.props.lazy) {
            let rpp = this.props.rows||0;
            let startIndex = this.props.first||0;
            let endIndex = (startIndex + rpp);
            let rows = [];

            for (let i = startIndex; i < endIndex; i++) {
                let rowData = this.props.value[i];
                if (rowData)
                    rows.push(this.createRow(this.props.value[i]));
                else
                    break;
            }

            return rows;
        }
        else {
            return this.props.value.map(node => this.createRow(node));
        } 
    }

    renderEmptyMessage() {
        if (this.props.loading) {
            return null;
        }
        else {
            const colSpan = this.props.columns ? this.props.columns.length : null;
            return (
                <tr>
                    <td className="p-treetable-emptymessage" colSpan={colSpan}>{this.props.emptyMessage}</td>
                </tr>
            );
        }
    }

    render() {
        const content = (this.props.value && this.props.value.length) ? this.renderRows() : this.renderEmptyMessage();

        return (
            <tbody className="p-treetable-tbody">
                {content}
            </tbody>
        );
    }
}