/**
 *
 * MeterGroupMarker is a component that represents a marker in a MeterGroup component.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergroupmarker
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupMarker component.
 */
export type MeterGroupMarkerPassThroughOptionType<E> = PassThroughOptionType<MeterGroupMarkerInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupMarker component.
 */
export interface MeterGroupMarkerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupMarkerPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupMarker component.
 */
export interface MeterGroupMarkerProps extends BaseComponentProps<MeterGroupMarkerInstance> {
    /**
     * Defines the color of the marker.
     */
    color?: string | undefined;
}

/**
 * Defines valid state in MeterGroupMarker component.
 */
export interface MeterGroupMarkerState {}

/**
 * Defines the methods and properties exposed by MeterGroupMarker component.
 */
export interface MeterGroupMarkerExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupMarker component.
 */
export type MeterGroupMarkerInstance = ComponentInstance<MeterGroupMarkerProps, MeterGroupMarkerState, MeterGroupMarkerExposes>;
