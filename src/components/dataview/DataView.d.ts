import React = require("react");

interface DataViewLayoutOptionsProps {
    id?: string,
    layout?: string,
    style?: string,
    className?: string,
    onChange(e: {originalEvent: event, value: string}): void
}

export class DataViewLayoutOptions extends React.Component<DataViewLayoutOptionsProps,any> {}

interface DataViewProps {
    id?: string,
    header?: JSX.Element | string,
    footer?: JSX.Element | string,
    value?: Array<any>,
    layout?: string,
    paginator?: boolean,
    rows?: number,
    first?: number,
    totalRecords?: number,
    pageLinks?: number,
    rowsPerPageOptions?: Array<any>,
    paginatorPosition?: string,
    emptyMessage?: string,
    sortField?: string,
    sortOrder?: number,
    style?: string,
    className?: string,
    onPage?(e: {originalEvent: event, first: number, rows: number}): void,
    itemTemplate?(item: any, layout: "grid" | "list"): JSX.Element | undefined
}

export class DataView extends React.Component<DataViewProps,any> {}