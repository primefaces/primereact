import React = require("react");

interface PaginatorProps {
    totalRecords?: number;
    rows?: number;
    first?: number;
    pageLinkSize?: number;
    rowsPerPageOptions?: Array<any>;
    style?: object;
    className?: string;
    template?: string;
    onPageChange?(event: Event): void;
}

export class Paginator extends React.Component<PaginatorProps,any> {}