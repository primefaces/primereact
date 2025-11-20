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
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { useOrgChartExposes, useOrgChartProps, useOrgChartState } from './useOrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChart component.
 */
export type OrgChartPassThroughType<E> = PassThroughType<OrgChartInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChart component.
 */
export interface OrgChartPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the node's DOM element.
     */
    node?: OrgChartPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the subtree's DOM element.
     */
    subtree?: OrgChartPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the tree's DOM element.
     */
    tree?: OrgChartPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in OrgChart component.
 */
export interface OrgChartProps extends BaseComponentProps<OrgChartInstance, useOrgChartProps, OrgChartPassThrough> {}

/**
 * Defines valid state in OrgChart component.
 * @extends useOrgChartState
 */
export interface OrgChartState extends useOrgChartState {}

/**
 * Defines the methods and properties exposed by OrgChart component.
 * @extends useOrgChartExposes
 */
export interface OrgChartExposes extends useOrgChartExposes {
    /**
     * The state of the OrgChart component.
     */
    state: OrgChartState;
}

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

/**
 * Instance of OrgChart component.
 */
export type OrgChartInstance = ComponentInstance<OrgChartProps, OrgChartState, OrgChartExposes>;
