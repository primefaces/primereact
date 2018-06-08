import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class UITreeRow extends Component {

    static defaultProps = {
        node: null,
        level: null,
        treeTable: null,
        parentNode: null,
        labelExpand: "Expand",
        labelCollapse: "Collapse"
    }

    static propsTypes = {
        node: PropTypes.any,
        level: PropTypes.any,
        treeTable: PropTypes.any,
        parentNode: PropTypes.any,
        labelExpand: PropTypes.string,
        labelCollapse: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.node = this.props.node;
        this.node.parent = this.props.parentNode;
        this.treeTable = this.props.treeTable;
        this.state = { expanded: this.node.expanded };
    }

    toggle(event) {
        if (this.state.expanded && this.treeTable.props.onNodeCollapse)
            this.treeTable.props.onNodeCollapse({ originalEvent: event, node: this.node });
        else if (this.treeTable.props.onNodeExpand)
            this.treeTable.props.onNodeExpand({ originalEvent: event, node: this.node });

        this.node.expanded = !this.state.expanded;
        this.setState({ expanded: !this.state.expanded });

        event.preventDefault();
    }

    isLeaf() {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    }

    isSelected() {
        return this.treeTable.isSelected(this.node);
    }

    onRowClick(event) {
        this.treeTable.onRowClick(event, this.node);
    }

    onRowTouchEnd() {
        this.treeTable.onRowTouchEnd();
    }

    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let expanded = nextProps.node.expanded
        if(prevState.expanded !== expanded) {
            return {
                expanded: expanded
            };
        }
        return null;
    }

    render() {
        if(this.node !== this.props.node) {
            this.node = this.props.node;
            this.node.parent = this.props.node.parentNode;
        }

        var tableRowClass = classNames('ui-treetable-row', {
            'ui-state-highlight': this.isSelected(),
            'ui-treetable-row-selectable': this.treeTable.props.selectionMode && this.node.selectable !== false
        });

        var childTbody = this.node.children && this.node.children.map((childNode, index) => {
            return (<UITreeRow key={index} node={childNode} index={index} level={this.props.level + 1} labelExpand={this.props.labelExpand} labelCollapse={this.props.labelCollapse} treeTable={this.treeTable} parentNode={this.node} />)
        });

        return (
            <tbody>
                <tr className={tableRowClass}>
                    {
                        this.treeTable.columns && this.treeTable.columns.map((col, i) => {
                            var toggler = null,
                                checkbox = null;

                            if (i === 0) {
                                var togglerClass = classNames('ui-treetable-toggler pi pi-fw ui-c', {
                                    'pi-caret-down': this.state.expanded,
                                    'pi-caret-right': !this.state.expanded
                                }),
                                    togglerStyle = { 'marginLeft': this.props.level * 16 + 'px', 'visibility': this.isLeaf() ? 'hidden' : 'visible' };

                                toggler = (<a className={togglerClass} style={togglerStyle} onClick={this.toggle.bind(this)} title={this.state.expanded ? this.props.labelCollapse : this.props.labelExpand}><span></span></a>);

                                if (this.treeTable.props.selectionMode === 'checkbox') {
                                    var checkboxIconClass = classNames('ui-chkbox-icon ui-c pi', {
                                        'pi-check': this.isSelected(),
                                        'pi-minus': this.node.partialSelected
                                    });

                                    checkbox = (
                                        <div className="ui-chkbox ui-treetable-checkbox">
                                            <div className="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                                                <span className={checkboxIconClass}></span>
                                            </div>
                                        </div>
                                    );
                                }
                            }

                            var rowData = (<span>{ObjectUtils.resolveFieldData(this.node.data, col.props.field)}</span>);

                            return (
                                <td key={'col_' + i} style={col.props.style} className={col.props.className} onClick={this.onRowClick.bind(this)} onTouchEnd={this.onRowTouchEnd.bind(this)}>
                                    {toggler}
                                    {checkbox}
                                    {rowData}
                                </td>
                            );

                        })
                    }
                </tr>
                {
                    this.node.children && this.state.expanded && (<tr className="ui-treetable-row" style={{ 'display': 'table-row' }}>
                        <td colSpan={this.treeTable.columns.length} className="ui-treetable-child-table-container">
                            <table>
                                {childTbody}
                            </table>
                        </td>
                    </tr>)
                }
            </tbody>
        );
    }
}