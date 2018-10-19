import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TreeTableHeader } from './TreeTableHeader'; 
import { TreeTableBody } from './TreeTableBody'; 
import { TreeTableFooter } from './TreeTableFooter'; 

export class TreeTable extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        style: null,
        className: null,
        tableStyle: null,
        tableClassName: null,
        expandedKeys: null,
        scrollable: false,
        reorderableColumns: false,
        headerColumnGroup: null,
        footerColumnGroup: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        tableStyle: PropTypes.any,
        tableClassName: PropTypes.string,
        expandedKeys: PropTypes.object,
        scrollable: PropTypes.bool,
        reorderableColumns: PropTypes.bool,
        headerColumnGroup: PropTypes.element,
        footerColumnGroup: PropTypes.element,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    }

    getColumns() {
        let columns = React.Children.toArray(this.props.children);
        
        if(this.props.reorderableColumns && this.state.columnOrder) {
            let orderedColumns = [];
            for(let i = 0; i < this.state.columnOrder.length; i++) {
                orderedColumns.push(this.findColumnByKey(columns, this.state.columnOrder[i]));
            }
                        
            return orderedColumns;
        }
        else {
            return columns;
        }
    }

    processValue() {
        let data = this.props.value;
        
        return data;
    }

    renderScrollableTable(value) {

    }

    renderRegularTable(value) {
        const columns = this.getColumns();

        return (
            <div className="p-treetable-tablewrapper">
                <table style={this.props.tableStyle} className={this.props.tableClassName}>
                    <TreeTableHeader columns={columns} columnGroup={this.props.headerColumnGroup} />                
                    <TreeTableFooter columns={columns} columnGroup={this.props.footerColumnGroup} />
                    <TreeTableBody value={value} columns={columns} expandedKeys={this.props.expandedKeys} 
                        onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} />
                </table>
            </div>
        );
    }

    renderData() {
        const value = this.processValue();

        if (this.props.scrollable)
            return this.renderScrollableTable(value);
        else
            return this.renderRegularTable(value);
    }

    render() {
        const className = classNames('p-treetable p-component');
        const data = this.renderData();
        const headerFacet = this.props.header && <div className="p-treetable-header">{this.props.header}</div>;
        const footerFacet = this.props.footer && <div className="p-treetable-footer">{this.props.footer}</div>;

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {headerFacet}
                {data}
                {footerFacet}
            </div>
        );
    }
}