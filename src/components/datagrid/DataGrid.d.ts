import React = require("react");

interface DataGridProps {
    id?: string,
    value?: Array<any>,
    rows?: number,
    first?:number,
    paginator?: boolean,
    totalRecords?: number,
    pageLinks?: number,
    rowsPerPageOptions?: Array<any>,
    lazy?: boolean,
    style?: string,
    className?: string,
    paginatorPosition?: string,
    paginatorTemplate?: string,
    onLazyLoad?(e: {first: number, rows:number}): void,
    itemTemplate?(): void,
    header?:string,
    footer?:string;
}

export class DataGrid extends React.Component<DataGridProps,any> {}