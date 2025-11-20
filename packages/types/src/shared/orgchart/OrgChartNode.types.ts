/**
 *
 * OrgChartNode displays a node in the org chart.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgchartnode
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

import type { OrgChartInstance } from './OrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChartNode component.
 */
export type OrgChartNodePassThroughType<E> = PassThroughType<OrgChartNodeInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChartNode component.
 */
export interface OrgChartNodePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartNodePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OrgChartNode component.
 */
export interface OrgChartNodeProps extends BaseComponentProps<OrgChartNodeInstance, unknown, OrgChartNodePassThrough> {}

/**
 * Defines valid state in OrgChartNode component.
 */
export interface OrgChartNodeState {}

/**
 * Defines the methods and properties exposed by OrgChartNode component.
 */
export interface OrgChartNodeExposes {
    /**
     * The parent OrgChart instance.
     */
    orgchart: OrgChartInstance | undefined | null;
}

/**
 * Instance of OrgChartNode component.
 */
export type OrgChartNodeInstance = ComponentInstance<OrgChartNodeProps, OrgChartNodeState, OrgChartNodeExposes>;
