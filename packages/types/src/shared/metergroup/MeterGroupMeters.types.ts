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
import type { BaseComponentProps, PassThroughType } from '..';
import type { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupMeters component.
 */
export type MeterGroupMetersPassThroughType<E> = PassThroughType<MeterGroupMetersInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupMeters component.
 */
export interface MeterGroupMetersPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupMetersPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupMeters component.
 */
export interface MeterGroupMetersProps extends BaseComponentProps<MeterGroupMetersInstance> {}

/**
 * Defines valid state in MeterGroupMeters component.
 */
export interface MeterGroupMetersState {}

/**
 * Defines the methods and properties exposed by MeterGroupMeters component.
 */
export interface MeterGroupMetersExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupMeters component.
 */
export type MeterGroupMetersInstance = ComponentInstance<MeterGroupMetersProps, MeterGroupMetersState, MeterGroupMetersExposes, MeterGroupMetersPassThrough>;
