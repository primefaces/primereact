import * as React from 'react';
import TreeNode from "../treenode/TreeNode";

interface TreeProps {
    id?: string;
    value?: TreeNode[];
    selectionMode?: string;
    selectionKeys?: any;
    onSelectionChange?(e: {originalEvent: Event, value: any}): void;
    contextMenuSelectionKey?: any;
    onContextMenuSelectionChange?(e: {originalEvent: Event, value: any}): void;
    expandedKeys?: any;
    style?: object;
    className?: string;
    metaKeySelection?: boolean;
    propagateSelectionUp?: boolean;
    propagateSelectionDown?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    dragdropScope?: string;
    nodeTemplate?(node: any): JSX.Element;
    onSelect?(e: {originalEvent: Event, value: TreeNode}): void;
    onUnselect?(e: {originalEvent: Event, value: TreeNode}): void;
    onExpand?(e: {originalEvent: Event, value: TreeNode}): void;
    onCollapse?(e: {originalEvent: Event, value: TreeNode}): void;
    onToggle?(e: {originalEvent: Event, value: TreeNode}): void;
    onDragDrop?(e: {originalEvent: Event, value: TreeNode}): void;
    onContextMenu?(e: {originalEvent: Event, value: TreeNode}): void;
}

export class Tree extends React.Component<TreeProps,any> {}
