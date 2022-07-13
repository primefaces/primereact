import * as React from 'react';

export const TreeTableFooter = React.memo((props) => {

    const createFooterCell = (column, index) => {
        return (
            <td key={column.field || index} className={column.props.footerClassName || column.props.className} style={column.props.footerStyle || column.props.style}
                rowSpan={column.props.rowSpan} colSpan={column.props.colSpan}>
                {column.props.footer}
            </td>
        )
    }

    const createFooterRow = (row, index) => {
        const rowColumns = React.Children.toArray(row.props.children);
        const rowFooterCells = rowColumns.map(createFooterCell);

        return (
            <tr key={index}>{rowFooterCells}</tr>
        )
    }

    const createColumnGroup = () => {
        let rows = React.Children.toArray(props.columnGroup.props.children);

        return rows.map(createFooterRow);
    }

    const createColumns = (columns) => {
        if (columns) {
            const headerCells = columns.map(createFooterCell);
            return <tr>{headerCells}</tr>
        }
        else {
            return null;
        }
    }

    const hasFooter = () => {
        if (props.columnGroup) {
            return true;
        }
        else {
            for (let i = 0; i < props.columns.length; i++) {
                if (props.columns[i].props.footer) {
                    return true;
                }
            }
        }

        return false;
    }

    const content = props.columnGroup ? createColumnGroup() : createColumns(props.columns);

    if (hasFooter()) {
        return (
            <tfoot className="p-treetable-tfoot">
                {content}
            </tfoot>
        )
    }
    else {
        return null;
    }
});

TreeTableFooter.displayName = 'TreeTableFooter';
