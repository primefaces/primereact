import React = require("react");

interface DataViewProps {
    id?: string,
    header?: any,
    footer?: any,
    value?: Array<any>,
    layout?: string,
    paginator?: boolean,
    rows?: number,
    totalRecords?: number,
    pageLinks?: number,
    rowsPerPageOptions?: Array<any>,
    paginatorPosition?: string,
    lazy?: boolean,
    emptyMessage?: string,
    sortField?:string,
    sortOrder?:number,
    style?: string,
    className?: string,
    filterBy?: string,
    onLazyLoad?(e: {first: number, rows:number}): void,
    onPage?(e: {first: number, rows:number}): void,
    onSort?(e: {field: number, order:number}): void,
    itemTemplate?(): void,
}

export class DataView extends React.Component<DataViewProps,any> {}