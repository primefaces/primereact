import React, {Component} from 'react';
import {TreeTableFooterCell} from './TreeTableFooterCell';

export class TreeTableFooter extends Component {

    createFooterCell() {
        return React.Children.map(this.props.columns, (column, i) => {
            return <TreeTableFooterCell key={'footerCol_' + i} {...column.props} />;
        });
    }

    render() { 
        let content = <tr>{this.createFooterCell(this)}</tr>;

        return (
            <tfoot>
                {content}
            </tfoot>
        );
    }
} 