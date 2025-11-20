/**
 *
 * OrgChartTree displays a tree in the org chart.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgcharttree
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

import type { OrgChartInstance } from './OrgChart.types';
import { TreeNode } from './useOrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChartTree component.
 */
export type OrgChartTreePassThroughType<E> = PassThroughType<OrgChartTreeInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChartTree component.
 */
export interface OrgChartTreePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartTreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OrgChartTree component.
 */
export interface OrgChartTreeProps extends BaseComponentProps<OrgChartTreeInstance, unknown, OrgChartTreePassThrough> {
    /**
     * The item of the org chart tree.
     */
    item?: TreeNode;
}

/**
 * Defines valid state in OrgChartTree component.
 */
export interface OrgChartTreeState {}

/**
 * Defines the methods and properties exposed by OrgChartTree component.
 */
export interface OrgChartTreeExposes {
    /**
     * The parent OrgChart instance.
     */
    orgchart: OrgChartInstance | undefined | null;
    /**
     * The level of the org chart tree.
     */
    level: number;
}

/**
 * Instance of OrgChartTree component.
 */
export type OrgChartTreeInstance = ComponentInstance<OrgChartTreeProps, OrgChartTreeState, OrgChartTreeExposes>;
