import React = require("react");

interface Node {
    data: any,
    children: Node[]
}

interface TreeTableProps {
    id?: string;
    value: Node | Node[];
    labelExpand?: string;
    labelCollapse?: string;
    selectionMode?: string;
    selection?: any;
    style?: object;
    className?: string;
    metaKeySelection?: boolean;
    header?: string;
    footer?: string;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: string;
    sortMode?: string;
    selectionChange?(e: { originalEvent: Event, selection: any }): void;
    onSort?(e: { sortField: string, sortOrder: number, multiSortMeta: any }): void;
    onNodeSelect?(e: { originalEvent: Event, node: any }): void;
    onNodeUnselect?(e: { originalEvent: Event, node: any }): void;
    onNodeExpand?(e: { originalEvent: Event, node: any }): void;
    onNodeCollapse?(e: { originalEvent: Event, node: any }): void;
}

export class TreeTable extends React.Component<TreeTableProps, any> {
}
