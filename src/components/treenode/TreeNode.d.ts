export default interface TreeNode {
    key?: any;
    label?: string;
    data?: any;
    icon?: string;
    children: TreeNode[];
    droppable?: boolean;
    draggable?: boolean;
    selectable?: boolean;
    defaultExpanded?: boolean;
}