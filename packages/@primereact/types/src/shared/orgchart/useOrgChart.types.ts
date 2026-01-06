/**
 *
 * The useOrgChart manages the state and functionality of a org chart component.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module useorgchart
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines the tree node data.
 */
export interface TreeNode {
    /**
     * Unique identifier of the node. (required)
     */
    key: string;
    /**
     * Label of the node.
     */
    label?: string;
    /**
     * Custom content of the node.
     */
    render?: React.ReactNode | ((node: TreeNode) => React.ReactNode);
    /**
     * Children of the node.
     */
    children?: TreeNode[];
    /**
     * Whether node is collapsible when node expansion is enabled.
     * @default true
     */
    collapsible?: boolean;
    /**
     * Whether node is selectable when selection is enabled.
     * @default true
     */
    selectable?: boolean;
    /**
     * Whether node is collapsed by default.
     * @default false
     */
    collapsedByDefault?: boolean;
    /**
     * Whether node is selected by default.
     * @default false
     */
    selectedByDefault?: boolean;
    /**
     * Optional properties
     */
    [key: string]: unknown;
    /**
     * Optional HTML properties of the node.
     */
    htmlProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
}

/**
 * Defines valid properties in useOrgChart.
 */
export interface useOrgChartProps {
    /**
     * The data of the org chart.
     */
    value?: TreeNode[];
    /**
     * The gap of the org chart.
     */
    gap?: number | number[];
    /**
     * Whether the nodes of the org chart are selectable.
     * @default true
     */
    selectable?: boolean;
    /**
     * Whether the nodes of the org chart are collapsible.
     * @default false
     */
    collapsible?: boolean;
    /**
     * The selection mode of the org chart.
     */
    selectionMode?: 'single' | 'multiple';
}

/**
 * Defines valid state in useOrgChart.
 */
export interface useOrgChartState {
    /**
     * The selected nodes' ids of the org chart.
     */
    selectedNodes: string[];
    /**
     * The collapsed nodes' ids of the org chart.
     */
    collapsedNodes: string[];
}

/**
 * Defines the methods and properties exposed by useOrgChart.
 */
export interface useOrgChartExposes {
    /**
     * The state of the useOrgChart.
     */
    state: useOrgChartState;
    /**
     * Toggles the selection of a node.
     */
    toggleNodeSelect: (key?: string) => void;
    /**
     * Toggles the collapse state of a node.
     */
    toggleNodeCollapse: (key?: string) => void;
    /**
     * Checks if a node is collapsible.
     */
    isCollapsible: (node?: TreeNode) => boolean;
    /**
     * Checks if a node is collapsed.
     */
    isCollapsed: (node?: TreeNode) => boolean;
    /**
     * Checks if a node is selected.
     */
    isSelected: (node?: TreeNode) => boolean;
    /**
     * Checks if a node is selectable.
     */
    isSelectable: (node?: TreeNode) => boolean;
    /**
     * Handles the key down event of a node.
     */
    handleNodeKeyDown: (event: React.KeyboardEvent<HTMLDivElement>, key?: string) => void;
    /**
     * Handles the key down event of a collapse button.
     */
    handleCollapseKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>, key?: string) => void;
}

/**
 * Instance of useOrgChart headless.
 */
export type useOrgChartInstance = HeadlessInstance<useOrgChartProps, useOrgChartState, useOrgChartExposes>;
