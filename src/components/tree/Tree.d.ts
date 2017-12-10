import React = require("react");

interface TreeNodeProps {
    node?: any;
    index?: string;
    parentNode?: any;
    root?: boolean;
    isHorizontal?: boolean;
    selectionMode?: string;
    onNodeTouchEnd?(): void;
    onNodeClick?(): void;
    isSelected?(): void;
}

export class TreeNode extends React.Component<TreeNodeProps,any> {}

interface TreeProps {
    id?: string;
    value: any;
    selectionMode?: string;
    selection?: any;
    selectionChange(e: {originalEvent: Event, selection: any}): void;
    layout?: string;
    onNodeSelect?(e: {originalEvent: Event, node: any}): void;
    onNodeUnselect?(e: {originalEvent: Event, node: any}): void;
    onNodeExpand?(): void;
    onNodeCollapse?(): void;
    style?: object;
    className?: string;
    metaKeySelection?: boolean;
    propagateSelectionUp?: boolean;
    propagateSelectionDown?: boolean;
}

export class Tree extends React.Component<TreeProps,any> {}