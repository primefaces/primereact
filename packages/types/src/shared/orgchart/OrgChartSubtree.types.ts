/**
 *
 * OrgChartSubtree component displays a subtree in the org chart.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgchartsubtree
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { TreeNode } from './useOrgChart.types';

import type { OrgChartInstance } from './OrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChartSubtree component.
 */
export type OrgChartSubtreePassThroughType<E> = PassThroughType<OrgChartSubtreeInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChartSubtree component.
 */
export interface OrgChartSubtreePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartSubtreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OrgChartSubtree component.
 */
export interface OrgChartSubtreeProps extends BaseComponentProps<OrgChartSubtreeInstance, unknown, OrgChartSubtreePassThrough> {
    /**
     * The items of the org chart subtree.
     */
    items?: TreeNode[];
    /**
     * Whether the org chart subtree is the root.
     */
    root?: boolean;
}

/**
 * Defines valid state in OrgChartSubtree component.
 */
export interface OrgChartSubtreeState {}

/**
 * Defines the methods and properties exposed by OrgChartSubtree component.
 */
export interface OrgChartSubtreeExposes {
    /**
     * The parent OrgChart instance.
     */
    orgchart: OrgChartInstance | undefined | null;
}

/**
 * Instance of OrgChartSubtree component.
 */
export type OrgChartSubtreeInstance = ComponentInstance<OrgChartSubtreeProps, OrgChartSubtreeState, OrgChartSubtreeExposes>;
