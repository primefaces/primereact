import React = require("react");

interface UITreeRowProps {
    node?: any;
    level?: any;
    treeTable?: any;
    parentNode?: any;
    labelExpand?: string;
    labelCollapse?: string
}

export class UITreeRow extends React.Component<UITreeRowProps,any> {}

interface TreeTableProps {
    id?: string;
    value?: any;
    labelExpand?: string;
    labelCollapse?: string;
    selectionMode?: string;
    selection?: any;
    selectionChange(originalEvent: Event, selection: any): void;
    style?: object;
    className?: string;
    metaKeySelection?: boolean;
    header?: string;
    footer?: string;
    onNodeSelect?(originalEvent: Event, node: any): void;
    onNodeUnselect?(originalEvent: Event, node: any): void;
    onNodeExpand?(): void;
    onNodeCollapse?(): void;
}

export class TreeTable extends React.Component<TreeTableProps,any> {}