import * as React from 'react';
import TreeNode from '../treenode/TreeNode';

declare namespace Tree {

    type SelectionModeType = 'single' | 'multiple' | 'checkbox';

    type SelectionKeys = string | SelectionKeysType | undefined | null;

    type FilterModeType = 'lenient' | 'strict';

    interface SelectionKeysType {
        [key: string]: boolean;
    }

    interface ExpandedKeysType {
        [key: string]: boolean;
    }

    interface ExpandedParams {
        originalEvent: React.SyntheticEvent;
        value: ExpandedKeysType;
    }

    interface SelectionParams {
        originalEvent: React.SyntheticEvent;
        value: SelectionKeysType;
    }

    interface EventNodeParams {
        originalEvent: React.SyntheticEvent;
        node: TreeNode;
    }

    interface DragDropParams {
        originalEvent: React.SyntheticEvent,
        value: TreeNode[];
        dragNode: TreeNode;
        dropNode: TreeNode;
        dropIndex: number;
    }

    interface TreeProps {
        id?: string;
        value?: TreeNode[];
        disabled?: boolean;
        selectionMode?: SelectionModeType;
        selectionKeys?: SelectionKeys;
        contextMenuSelectionKey?: string;
        expandedKeys?: ExpandedKeysType;
        style?: object;
        className?: string;
        contentStyle?: object;
        contentClassName?: string;
        metaKeySelection?: boolean;
        propagateSelectionUp?: boolean;
        propagateSelectionDown?: boolean;
        loading?: boolean;
        loadingIcon?: string;
        dragdropScope?: string;
        filter?: boolean;
        filterBy?: string;
        filterMode?: FilterModeType;
        filterPlaceholder?: string;
        filterLocale?: string;
        onSelectionChange?(e: SelectionParams): void;
        onContextMenuSelectionChange?(e: SelectionParams): void;
        nodeTemplate?(node: TreeNode): React.ReactNode;
        onSelect?(e: EventNodeParams): void;
        onUnselect?(e: EventNodeParams): void;
        onExpand?(e: EventNodeParams): void;
        onCollapse?(e: EventNodeParams): void;
        onToggle?(e: ExpandedParams): void;
        onDragDrop?(e: DragDropParams): void;
        onContextMenu?(e: EventNodeParams): void;
    }
}

export declare class Tree extends React.Component<Tree.TreeProps, any> { }
