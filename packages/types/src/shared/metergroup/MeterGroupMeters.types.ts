/**
 *
 * MeterGroupMeters is a component that displays a group of meters.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergroupmeters
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in MeterGroupMeters component.
 */
export type MeterGroupMetersPassThroughOptionType<E> = PassThroughOptionType<MeterGroupMetersInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupMeters component.
 */
export interface MeterGroupMetersPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupMetersPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupMeters component.
 */
export interface MeterGroupMetersProps extends BaseComponentProps {}

/**
 * Defines valid state in MeterGroupMeters component.
 */
export interface MeterGroupMetersState {}

/**
 * Defines the methods and properties exposed by MeterGroupMeters component.
 */
export interface MeterGroupMetersExposes {}

/**
 * Instance of MeterGroupMeters component.
 */
export type MeterGroupMetersInstance = ComponentInstance<MeterGroupMetersProps, MeterGroupMetersState, MeterGroupMetersExposes>;
