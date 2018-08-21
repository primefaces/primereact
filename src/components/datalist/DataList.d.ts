import React = require("react");

interface DataListProps {
    id?: string;
    value?: any[];
    rows?: number;
    first?:number;
    paginator?: boolean;
    totalRecords?: number;
    pageLinks?: number;
    rowsPerPageOptions?: any[];
    lazy?: boolean;
    style?: object;
    className?: string;
    paginatorPosition?: string;
    paginatorTemplate?: string;
    header?:string;
    footer?:string;
    onLazyLoad?(e: {first: number, rows:number}): void;
    itemTemplate?(item: any): JSX.Element | undefined;
}

export class DataList extends React.Component<DataListProps,any> {}
