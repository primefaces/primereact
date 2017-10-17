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
    style?: object;
    className?: string;
    expander?: boolean;
    frozen?: boolean;
    selectionMode?: string;
    colSpan?: number;
    rowSpan?: number;
    editor?(): void;
    editorValidator?(): void;
}

export class Column extends React.Component<ColumnProps,any> {}