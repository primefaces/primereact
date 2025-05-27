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
import type { BaseComponentProps, PassThroughType } from '..';
import type { METERGROUP_DEFAULT_COLORS_TYPE, MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupMeter component.
 */
export type MeterGroupMeterPassThroughType<E> = PassThroughType<MeterGroupMeterInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupMeter component.
 */
export interface MeterGroupMeterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupMeterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupMeter component.
 */
export interface MeterGroupMeterProps extends BaseComponentProps<MeterGroupMeterInstance> {
    /**
     * Defines the value of the meter.
     */
    value?: number | undefined;
    /**
     * Defines the color of the meter.
     */
    color?: METERGROUP_DEFAULT_COLORS_TYPE | (string & {}) | undefined;
    /**
     * Defines the index of the meter.
     */
    index?: number | undefined;
}

/**
 * Defines valid state in MeterGroupMeter component.
 */
export interface MeterGroupMeterState {}

/**
 * Defines the methods and properties exposed by MeterGroupMeter component.
 */
export interface MeterGroupMeterExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupMeter component.
 */
export type MeterGroupMeterInstance = ComponentInstance<MeterGroupMeterProps, MeterGroupMeterState, MeterGroupMeterExposes, MeterGroupMeterPassThrough>;
