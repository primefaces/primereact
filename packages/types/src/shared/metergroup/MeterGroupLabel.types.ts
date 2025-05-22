/**
 *
 * MeterGroupLabel is a component that displays a label.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergrouplabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupLabel component.
 */
export type MeterGroupLabelPassThroughOptionType<E> = PassThroughOptionType<MeterGroupLabelInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupLabel component.
 */
export interface MeterGroupLabelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupLabelPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupLabel component.
 */
export interface MeterGroupLabelProps extends BaseComponentProps<MeterGroupLabelInstance> {
    /**
     * Defines the color of the label.
     */
    color?: string | undefined;
}

/**
 * Defines valid state in MeterGroupLabel component.
 */
export interface MeterGroupLabelState {}

/**
 * Defines the methods and properties exposed by MeterGroupLabel component.
 */
export interface MeterGroupLabelExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupLabel component.
 */
export type MeterGroupLabelInstance = ComponentInstance<MeterGroupLabelProps, MeterGroupLabelState, MeterGroupLabelExposes>;
