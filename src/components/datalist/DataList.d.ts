import React = require("react");

interface DataListProps {
    id?: string;
    value?: Array<any>;
    rows?: number;
    first?:number;
    paginator?: boolean;
    totalRecords?: number;
    pageLinks?: number;
    rowsPerPageOptions?: Array<any>;
    lazy?: boolean;
    style?: object;
    className?: string;
    paginatorPosition?: string;
    paginatorTemplate?: string;
    onLazyLoad?({first: number, rows:number}): void;
    itemTemplate?(item: any): JSX.Element | undefined;
    header?:string;
    footer?:string;
}

export class DataList extends React.Component<DataListProps,any> {}