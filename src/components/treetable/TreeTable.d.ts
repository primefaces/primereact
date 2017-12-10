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
    selectionChange(e: {originalEvent: Event, selection: any}): void;
    style?: object;
    className?: string;
    metaKeySelection?: boolean;
    header?: string;
    footer?: string;
    onNodeSelect?(e: {originalEvent: Event, node: any}): void;
    onNodeUnselect?(e: {originalEvent: Event, node: any}): void;
    onNodeExpand?(e: {originalEvent: Event, node: any}): void;
    onNodeCollapse?(e: {originalEvent: Event, node: any}): void;
}

export class TreeTable extends React.Component<TreeTableProps,any> {}