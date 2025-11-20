/**
 *
 * OrgChartNodeContent component displays the content of a node in the org chart.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgchartnodecontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

import type { OrgChartInstance } from './OrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChartNodeContent component.
 */
export type OrgChartNodeContentPassThroughType<E> = PassThroughType<OrgChartNodeContentInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChartNodeContent component.
 */
export interface OrgChartNodeContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartNodeContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OrgChartNodeContent component.
 */
export interface OrgChartNodeContentProps extends BaseComponentProps<OrgChartNodeContentInstance, unknown, OrgChartNodeContentPassThrough> {}

/**
 * Defines valid state in OrgChartNodeContent component.
 */
export interface OrgChartNodeContentState {}

/**
 * Defines the methods and properties exposed by OrgChartNodeContent component.
 */
export interface OrgChartNodeContentExposes {
    /**
     * The parent OrgChart instance.
     */
    orgchart: OrgChartInstance | undefined | null;
}

/**
 * Instance of OrgChartNodeContent component.
 */
export type OrgChartNodeContentInstance = ComponentInstance<OrgChartNodeContentProps, OrgChartNodeContentState, OrgChartNodeContentExposes>;
