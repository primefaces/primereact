/**
 *
 * OrgChartCollapseButton component displays a collapse button in the org chart.
 *
 * [Live Demo](https://www.primereact.org/orgchart/)
 *
 * @module orgchartcollapsebutton
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

import type { OrgChartInstance } from './OrgChart.types';

/**
 * Defines passthrough(pt) options type in OrgChartCollapseButton component.
 */
export type OrgChartCollapseButtonPassThroughType<E> = PassThroughType<OrgChartCollapseButtonInstance, E>;

/**
 * Defines passthrough(pt) options of OrgChartCollapseButton component.
 */
export interface OrgChartCollapseButtonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrgChartCollapseButtonPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OrgChartCollapseButton component.
 */
export interface OrgChartCollapseButtonProps extends BaseComponentProps<OrgChartCollapseButtonInstance, unknown, OrgChartCollapseButtonPassThrough> {}

/**
 * Defines valid state in OrgChartCollapseButton component.
 */
export interface OrgChartCollapseButtonState {}

/**
 * Defines the methods and properties exposed by OrgChartCollapseButton component.
 */
export interface OrgChartCollapseButtonExposes {
    /**
     * The parent OrgChart instance.
     */
    orgchart: OrgChartInstance | undefined | null;
}

/**
 * Instance of OrgChartCollapseButton component.
 */
export type OrgChartCollapseButtonInstance = ComponentInstance<OrgChartCollapseButtonProps, OrgChartCollapseButtonState, OrgChartCollapseButtonExposes>;
