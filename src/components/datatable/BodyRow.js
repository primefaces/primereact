import React, { Component } from 'react';
import classNames from 'classnames';
import {BodyCell} from './BodyCell';

export class BodyRow extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    onTouchEnd(event) {
        if(this.props.onTouchEnd) {
            this.props.onTouchEnd(event);
        }
    }

    onRightClick(event) {
        if(this.props.onRightClick) {
            this.props.onRightClick({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    render() {
        let columns = React.Children.toArray(this.props.children);
        let conditionalStyles = {'ui-state-highlight': this.props.selected, 'ui-datatable-even': (this.props.rowIndex % 2 === 0), 'ui-datatable-odd': (this.props.rowIndex % 2 === 1)};
        if(this.props.rowClassName) {
            let rowClassNameCondition = this.props.rowClassName(this.props.rowData);
            conditionalStyles = {...conditionalStyles, ...rowClassNameCondition};
        }
        let className = classNames('ui-widget-content', conditionalStyles);
        let hasRowSpanGrouping = this.props.rowGroupMode === 'rowspan';
        let cells = [];
        
        for(let i = 0; i < columns.length; i++) {
            let column = columns[i];
            let rowSpan;
            if(hasRowSpanGrouping) {
                if(this.props.sortField === column.props.field) {
                    if(this.props.groupRowSpan)
                        rowSpan = this.props.groupRowSpan;
                    else
                        continue;
                }
            }
            
            let cell = <BodyCell key={i} {...column.props} rowSpan={rowSpan} rowData={this.props.rowData} rowIndex={this.props.rowIndex} onRowToggle={this.props.onRowToggle} expanded={this.props.expanded} 
                        onRadioClick={this.props.onRadioClick} onCheckboxClick={this.props.onCheckboxClick} responsive={this.props.responsive} selected={this.props.selected} />;
                        
            cells.push(cell);
        }
        
        return (
            <tr className={className} onClick={this.onClick} onTouchEnd={this.onTouchEnd} onContextMenu={this.onRightClick}>
                {cells}
            </tr>
        );
    }
}