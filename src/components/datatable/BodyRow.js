import React, { Component } from 'react';
import classNames from 'classnames';
import {BodyCell} from './BodyCell';

export class BodyRow extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
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

    render() {
        var className = classNames('ui-widget-content', {'ui-datatable-odd': (this.props.rowIndex % 2 === 1)}, this.props.className);
        var cells = this.props.children.map((column,i) => {
                        return <BodyCell key={i} {...column.props} rowData={this.props.rowData} />;
                    });
        return (
            <tr className={className} onClick={this.onClick} onTouchEnd={this.onTouchEnd}>
                {cells}
            </tr>
        );
    }
}