import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeTableRow } from './TreeTableRow'; 

export class TreeTableBody extends Component {

    static defaultProps = {
        value: null,
        columns: null,
        expandedKeys: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propsTypes = {
        value: PropTypes.array,
        columns: PropTypes.array,
        expandedKeys: PropTypes.array,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    }

    renderRows() {
        if (this.props.value) {
            return this.props.value.map(node => {
                return (
                    <TreeTableRow key={node.key||JSON.stringify(node.data)} level={0}
                        node={node} columns={this.props.columns} expandedKeys={this.props.expandedKeys} 
                        onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} />
                )
            });
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