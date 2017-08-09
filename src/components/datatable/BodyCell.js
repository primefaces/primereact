import React, { Component } from 'react';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import {RowRadioButton} from './RowRadioButton';
import {RowCheckbox} from './RowCheckbox';

export class BodyCell extends Component {

    constructor(props) {
        super(props);
        this.onExpanderClick = this.onExpanderClick.bind(this);
    }
    
    onExpanderClick(event) {
        if(this.props.onRowToggle) {
            this.props.onRowToggle({
                originalEvent: event,
                data: this.props.rowData
            });
        }
        
        event.preventDefault();
    }

    render() {
        let content, header;
        let cellClassName = classNames(this.props.className, {'ui-selection-column': this.props.selectionMode});

        if(this.props.expander) {
            let iconClassName = classNames('ui-row-toggler fa fa-fw ui-clickable', {'fa-chevron-circle-down': this.props.expanded, 'fa-chevron-circle-right': !this.props.expanded});
            content = <a href="#" onClick={this.onExpanderClick}>
                        <span className={iconClassName}></span>
                      </a>;
        }
        else if(this.props.selectionMode) {
            if(this.props.selectionMode === 'single')
                content = <RowRadioButton onClick={this.props.onRadioClick} rowData={this.props.rowData} selected={this.props.selected}/>;
            else
                content = <RowCheckbox onClick={this.props.onCheckboxClick} rowData={this.props.rowData} selected={this.props.selected}/>;
        }
        else {
            if(this.props.body)
                content = this.props.body(this.props.rowData, this.props);
            else
                content = ObjectUtils.resolveFieldData(this.props.rowData, this.props.field);
        }

        if(this.props.responsive) {
            header = <span className="ui-column-title">{this.props.header}</span>;
        }
       
        return (
            <td className={cellClassName} style={this.props.style}>
                {header}
                <span className="ui-cell-data">{content}</span>
            </td>
        );
    }
}