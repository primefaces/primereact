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
export interface MeterGroupProps extends BaseComponentProps<useMeterGroupProps> {
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
 * Instance of MeterGroup component.
 */
export type MeterGroupInstance = ComponentInstance<MeterGroupProps, MeterGroupState, MeterGroupExposes>;
