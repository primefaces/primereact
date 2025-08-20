/**
 *
 * KnobRange is a component that displays a range.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module knobrange
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { KnobInstance } from './Knob.types';

/**
 * Defines passthrough(pt) options type in KnobRange component.
 */
export type KnobRangePassThroughType<E> = PassThroughType<KnobRangeInstance, E>;

/**
 * Defines passthrough(pt) options of KnobRange component.
 */
export interface KnobRangePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KnobRangePassThroughType<React.HTMLAttributes<SVGPathElement>>;
}

/**
 * Defines valid properties in KnobRange component.
 */
export interface KnobRangeProps extends BaseComponentProps<KnobRangeInstance, unknown, KnobRangePassThrough> {
    /**
     * Width of the knob stroke.
     * @default 14
     */
    strokeWidth?: number | undefined;
    /**
     * Background color of the range.
     * @default $dt('knob.range.background')
     */
    color?: string | undefined;
}

/**
 * Defines valid state in KnobRange component.
 */
export interface KnobRangeState {}

/**
 * Defines the methods and properties exposed by KnobRange component.
 */
export interface KnobRangeExposes {
    /**
     * The Knob component instance.
     */
    knob: KnobInstance | undefined | null;
}

/**
 * Instance of KnobRange component.
 */
export type KnobRangeInstance = ComponentInstance<KnobRangeProps, KnobRangeState, KnobRangeExposes>;
