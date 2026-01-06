/**
 *
 * OrgChart displays a tree structure.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgchartroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useOrgChartExposes, useOrgChartProps, useOrgChartState } from './useOrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChart component.
 */
export type OrgChartRootPassThroughType<E> = PassThroughType<OrgChartRootInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChart component.
 */
export interface OrgChartRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the node's DOM element.
     */
    node?: OrgChartRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the subtree's DOM element.
     */
    subtree?: OrgChartRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the tree's DOM element.
     */
    tree?: OrgChartRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in OrgChart component.
 */
export interface OrgChartRootProps extends BaseComponentProps<OrgChartRootInstance, useOrgChartProps, OrgChartRootPassThrough> {}

/**
 * Defines valid state in OrgChart component.
 * @extends useOrgChartState
 */
export interface OrgChartRootState extends useOrgChartState {}

/**
 * Defines the methods and properties exposed by OrgChart component.
 * @extends useOrgChartExposes
 */
export interface OrgChartRootExposes extends useOrgChartExposes {
    /**
     * The state of the OrgChart component.
     */
    state: OrgChartRootState;
}

/**
 * Instance of OrgChart component.
 */
export type OrgChartRootInstance = ComponentInstance<OrgChartRootProps, OrgChartRootState, OrgChartRootExposes>;
