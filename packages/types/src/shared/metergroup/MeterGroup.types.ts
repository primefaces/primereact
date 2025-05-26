/**
 *
 * MeterGroup displays scalar measurements within a known range.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useMeterGroupExposes, useMeterGroupProps, useMeterGroupState } from './useMeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroup component.
 */
export type MeterGroupPassThroughType<E> = PassThroughType<MeterGroupInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroup component.
 */
export interface MeterGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the meters' DOM element.
     */
    meters?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the meter's DOM element.
     */
    meter?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the labels' DOM element.
     */
    labels?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLOListElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the label icon's DOM element.
     */
    icon?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the label marker's DOM element.
     */
    marker?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    text?: MeterGroupPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in MeterGroup component.
 */
export interface MeterGroupProps extends BaseComponentProps<MeterGroupInstance, useMeterGroupProps> {
    /**
     * Specifies the layout of the component.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

/**
 * Defines valid state in MeterGroup component.
 * @extends useMeterGroupState
 */
export interface MeterGroupState extends useMeterGroupState {}

/**
 * Defines the methods and properties exposed by MeterGroup component.
 * @extends useMeterGroupExposes
 */
export interface MeterGroupExposes extends useMeterGroupExposes {}

/**
 * Defines the CSS class names used in the MeterGroup component.
 */
export const MeterGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-metergroup',
    /**
     * Class name of the meters element
     */
    meters: 'p-metergroup-meters',
    /**
     * Class name of the meter element
     */
    meter: 'p-metergroup-meter',
    /**
     * Class name of the label list element
     */
    labelList: 'p-metergroup-label-list',
    /**
     * Class name of the label element
     */
    label: 'p-metergroup-label',
    /**
     * Class name of the label icon element
     */
    labelIcon: 'p-metergroup-label-icon',
    /**
     * Class name of the label marker element
     */
    labelMarker: 'p-metergroup-label-marker',
    /**
     * Class name of the label text element
     */
    labelText: 'p-metergroup-label-text'
} as const;

/**
 * Type representing the CSS class names used in the MeterGroup component.
 */
export type MeterGroupClassNamesType = (typeof MeterGroupClassNames)[keyof typeof MeterGroupClassNames];

/**
 * Instance of MeterGroup component.
 */
export type MeterGroupInstance = ComponentInstance<MeterGroupProps, MeterGroupState, MeterGroupExposes, MeterGroupPassThrough>;
