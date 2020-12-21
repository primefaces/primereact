import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
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

    constructor(props) {
        super(props);

        this.onRowClick = this.onRowClick.bind(this);
    }

    createRow(node) {
        return (
            <TreeTableRow key={node.key||JSON.stringify(node.data)} level={0}
                            node={node} columns={this.props.columns} expandedKeys={this.props.expandedKeys}
                            onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse}
                            selectionMode={this.props.selectionMode} selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange}
                            metaKeySelection={this.props.metaKeySelection} onRowClick={this.onRowClick} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                            propagateSelectionUp={this.props.propagateSelectionUp} propagateSelectionDown={this.props.propagateSelectionDown}
                            rowClassName={this.props.rowClassName}
                            contextMenuSelectionKey={this.props.contextMenuSelectionKey} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange} onContextMenu={this.props.onContextMenu} />
        );
    }

    flattenizeTree(nodes) {
        let rows = [];
        nodes = nodes || this.props.value;

        for (let node of nodes) {
            rows.push(node.key);

            if (this.isExpandedKey(node.key)) {
                rows = rows.concat(this.flattenizeTree(node.children));
            }
        }

        return rows;
    }

    isExpandedKey(key) {
        return this.props.expandedKeys && !!this.props.expandedKeys[key];
    }

    onRowClick(event, node) {

        if (this.props.onRowClick) {
            this.props.onRowClick({
                originalEvent: event,
                node: node
            });
        }

        let targetNode = event.target.nodeName;
        if (targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || DomHandler.hasClass(event.target, 'p-clickable')
            || DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-treetable-toggler')) {
            return;
        }

        if ((this.isSingleSelectionMode() || this.isMultipleSelectionMode()) && node.selectable !== false) {
            let selectionKeys;
            const selected = this.isSelected(node);
            const metaSelection = this.nodeTouched ? false : this.props.metaKeySelection;
            const flatKeys = this.flattenizeTree();
            const rowIndex = flatKeys.findIndex(key => key === node.key);

            if(this.isMultipleSelectionMode() && event.shiftKey) {
                DomHandler.clearSelection();

                // find first selected row
                const anchorRowIndex = flatKeys.findIndex(key => this.props.selectionKeys[key]);
                const rangeStart = Math.min(rowIndex, anchorRowIndex);
                const rangeEnd = Math.max(rowIndex, anchorRowIndex);

                selectionKeys = {...this.props.selectionKeys};

                for (let i = rangeStart; i <= rangeEnd; i++) {
                    const rowKey = flatKeys[i];
                    selectionKeys[rowKey] = true;
                }
            }
            else {
                this.anchorRowIndex = rowIndex;

                if (metaSelection) {
                    let metaKey = (event.metaKey||event.ctrlKey);

                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            selectionKeys = null;
                        }
                        else {
                            selectionKeys = {...this.props.selectionKeys};
                            delete selectionKeys[node.key];
                        }

                        if (this.props.onUnselect) {
                            this.props.onUnselect({
                                originalEvent: event,
                                node: node
                            });
                        }
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            selectionKeys = node.key;
                        }
                        else if (this.isMultipleSelectionMode()) {
                            selectionKeys = !metaKey ? {} : (this.props.selectionKeys ? {...this.props.selectionKeys} : {});
                            selectionKeys[node.key] = true;
                        }

                        if (this.props.onSelect) {
                            this.props.onSelect({
                                originalEvent: event,
                                node: node
                            });
                        }
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            selectionKeys = null;

                            if (this.props.onUnselect) {
                                this.props.onUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                        else {
                            selectionKeys = node.key;

                            if (this.props.onSelect) {
                                this.props.onSelect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                    }
                    else {
                        if (selected) {
                            selectionKeys = {...this.props.selectionKeys};
                            delete selectionKeys[node.key];

                            if (this.props.onUnselect) {
                                this.props.onUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                        else {
                            selectionKeys = this.props.selectionKeys ? {...this.props.selectionKeys} : {};
                            selectionKeys[node.key] = true;

                            if (this.props.onSelect) {
                                this.props.onSelect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                    }
                }
            }

            if (this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent: event,
                    value: selectionKeys
                })
            }
        }
    }

    isSingleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'multiple';
    }

    isSelected(node) {
        if ((this.props.selectionMode === 'single' || this.props.selectionMode === 'multiple') && this.props.selectionKeys)
            return (this.props.selectionMode === 'single') ? this.props.selectionKeys === node.key : this.props.selectionKeys[node.key] !== undefined;
        else
            return false;
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
