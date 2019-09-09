import * as React from 'react';

interface ColumnProps {
    columnKey?: string;
    field?: string;
    sortField?: string;
    header?: any;
    body?: any;
    loadingBody?: any;
    footer?: any;
    sortable?: boolean;
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
    editorValidatorEvent?: string;
    rowEditor?: boolean;
    onEditorSubmit?(props: any): void;
    onEditorCancel?(props: any): void;
    excludeGlobalFilter?: boolean;
    sortFunction?(e: {field: string, order: number}): void;
    filterFunction?(value: any, filter: any): void;
    editor?(props: any): JSX.Element | undefined;
    editorValidator?(props: any): boolean;
}

export class Column extends React.Component<ColumnProps,any> {}
