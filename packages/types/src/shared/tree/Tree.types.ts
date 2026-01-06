/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module tree
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Tree component.
 */
export const TreeClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-tree',
    /**
     * Class name of the wrapper element
     */
    wrapper: 'p-tree-root',
    /**
     * Class name of the root children element
     */
    rootChildren: 'p-tree-root-children',
    /**
     * Class name of the node element
     */
    node: 'p-tree-node',
    /**
     * Class name of the node content element
     */
    content: 'p-tree-node-content',
    /**
     * Class name of the toggle button element
     */
    toggle: 'p-tree-node-toggle-button',
    /**
     * Class name of the toggle icon element
     */
    toggleIcon: 'p-tree-node-toggle-icon',
    /**
     * Class name of the label element
     */
    label: 'p-tree-node-label',
    /**
     * Class name of the node children element
     */
    nodeChildren: 'p-tree-node-children'
} as const;

/**
 * Type representing the CSS class names used in the Tree component.
 */
export type TreeClassNamesType = (typeof TreeClassNames)[keyof typeof TreeClassNames];
