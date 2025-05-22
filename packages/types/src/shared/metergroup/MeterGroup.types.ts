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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useMeterGroupExposes, useMeterGroupProps, useMeterGroupState } from './useMeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroup component.
 */
export type MeterGroupPassThroughOptionType<E> = PassThroughOptionType<MeterGroupInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroup component.
 */
export interface MeterGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
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
export type MeterGroupInstance = ComponentInstance<MeterGroupProps, MeterGroupState, MeterGroupExposes>;
