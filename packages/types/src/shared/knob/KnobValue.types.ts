/**
 *
 * KnobValue is a component that displays a value.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module knobvalue
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { KnobInstance } from './Knob.types';

/**
 * Defines passthrough(pt) options type in KnobValue component.
 */
export type KnobValuePassThroughType<E> = PassThroughType<KnobValueInstance, E>;

/**
 * Defines passthrough(pt) options of KnobValue component.
 */
export interface KnobValuePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KnobValuePassThroughType<React.HTMLAttributes<SVGPathElement>>;
}

/**
 * Defines valid properties in KnobValue component.
 */
export interface KnobValueProps extends BaseComponentProps<KnobValueInstance, unknown, KnobValuePassThrough> {
    /**
     * Width of the knob stroke.
     * @default 14
     */
    strokeWidth?: number | undefined;
    /**
     * Background color of the value.
     * @default $dt('knob.value.background')
     */
    color?: string | undefined;
}

/**
 * Defines valid state in KnobValue component.
 */
export interface KnobValueState {}

/**
 * Defines the methods and properties exposed by KnobValue component.
 */
export interface KnobValueExposes {
    /**
     * The Knob component instance.
     */
    knob: KnobInstance | undefined | null;
}

/**
 * Instance of KnobValue component.
 */
export type KnobValueInstance = ComponentInstance<KnobValueProps, KnobValueState, KnobValueExposes>;
