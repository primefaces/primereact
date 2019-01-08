import * as React from 'react';

interface ColumnProps {
    columnKey?: string;
    field?: string;
    sortField?: string;
    header?: any;
    body?: any;
    footer?: any;
    sortable?: boolean | 'custom';
    filter?: boolean;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterType?: string;
    filterMaxLength?: number;
    filterElement?: object;
    style?: object;
    className?: string;
    headerStyle?: object;
    headerClassName?: string;
    bodyStyle?: object;
    bodyClassName?: string;
    footerStyle?: object;
    footerClassName?: string;
    expander?: boolean;
    frozen?: boolean;
    selectionMode?: string;
    colSpan?: number;
    rowSpan?: number;
    rowReorder?: boolean;
    rowReorderIcon?: string;
    sortFunction?(): void;
    filterFunction?(value: any, filter: any): void;
    editor?(props: any): JSX.Element | undefined;
    editorValidator?(props: any): boolean;
}

export class Column extends React.Component<ColumnProps,any> {}
