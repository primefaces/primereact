/**
 *
 * MeterGroupLabels is a component that displays a group of labels.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergrouplabels
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupLabels component.
 */
export type MeterGroupLabelsPassThroughOptionType<E> = PassThroughOptionType<MeterGroupLabelsInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupLabels component.
 */
export interface MeterGroupLabelsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupLabelsPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupLabels component.
 */
export interface MeterGroupLabelsProps extends BaseComponentProps<MeterGroupLabelsInstance> {
    /**
     * Specifies the label orientation of the component.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

/**
 * Defines valid state in MeterGroupLabels component.
 */
export interface MeterGroupLabelsState {}

/**
 * Defines the methods and properties exposed by MeterGroupLabels component.
 */
export interface MeterGroupLabelsExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupLabels component.
 */
export type MeterGroupLabelsInstance = ComponentInstance<MeterGroupLabelsProps, MeterGroupLabelsState, MeterGroupLabelsExposes>;
