/**
 *
 * OrgChart displays a tree structure.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgchart
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the OrgChart component.
 */
export const OrgChartClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-orgchart',
    /**
     * Class name of the node element
     */
    node: 'p-orgchart-node',
    /**
     * Class name of the node content element
     */
    nodeContent: 'p-orgchart-node-content',
    /**
     * Class name of the subtree element
     */
    subtree: 'p-orgchart-subtree',
    /**
     * Class name of the tree element
     */
    tree: 'p-orgchart-tree',
    /**
     * Class name of the collapse button element
     */
    collapseButton: 'p-orgchart-collapse-button'
} as const;

/**
 * Type representing the CSS class names used in the OrgChart component.
 */
export type OrgChartClassNamesType = (typeof OrgChartClassNames)[keyof typeof OrgChartClassNames];
