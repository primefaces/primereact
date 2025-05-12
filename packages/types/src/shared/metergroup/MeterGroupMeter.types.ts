/**
 *
 * MeterGroupMeter is a component that displays a meter.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergroupmeter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in MeterGroupMeter component.
 */
export type MeterGroupMeterPassThroughOptionType<E> = PassThroughOptionType<MeterGroupMeterInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupMeter component.
 */
export interface MeterGroupMeterPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupMeterPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupMeter component.
 */
export interface MeterGroupMeterProps extends BaseComponentProps {
    /**
     * Defines the value of the meter.
     */
    value?: number | undefined;
    /**
     * Defines the color of the meter.
     */
    color?: string | undefined;
}

/**
 * Defines valid state in MeterGroupMeter component.
 */
export interface MeterGroupMeterState {}

/**
 * Defines the methods and properties exposed by MeterGroupMeter component.
 */
export interface MeterGroupMeterExposes {}

/**
 * Instance of MeterGroupMeter component.
 */
export type MeterGroupMeterInstance = ComponentInstance<MeterGroupMeterProps, MeterGroupMeterState, MeterGroupMeterExposes>;
