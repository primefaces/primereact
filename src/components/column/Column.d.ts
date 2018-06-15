import React = require("react");

interface ColumnProps {
    columnKey?: string;
    field?: string;
    sortField?: string;
    header?: any;
    body?: any;
    footer?: any;
    sortable?: boolean;
    sortFunction?(): void;
    filter?: boolean;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterType?: string;
    filterMaxLength?: number;
    filterElement?: object;
    filterFunction?(value: any, filter: any): void;
    style?: object;
    className?: string;
    expander?: boolean;
    frozen?: boolean;
    selectionMode?: string;
    colSpan?: number;
    rowSpan?: number;
    editor?(props: any): void;
    editorValidator?(props: any): boolean;
    rowReorder?: boolean;
    rowReorderIcon?: string;
}

export class Column extends React.Component<ColumnProps,any> {}