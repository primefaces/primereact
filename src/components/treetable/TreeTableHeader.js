import React, {Component} from 'react';
import {TreeTableHeaderCell} from './TreeTableHeaderCell';

export class TreeTableHeader extends Component {

    createHeaderCell() {
        return React.Children.map(this.props.columns, (column, i) => {
            return <TreeTableHeaderCell key={'headerCol_' + i} {...column.props} />;
        });
    }

    render() { 
        let content = <tr>{this.createHeaderCell(this)}</tr>;

        return (
            <thead>
                {content}
            </thead>
        );
    }
} 