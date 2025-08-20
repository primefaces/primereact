/**
 *
 * KnobText is a component that displays a text.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module knobtext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { KnobInstance } from './Knob.types';

/**
 * Defines passthrough(pt) options type in KnobText component.
 */
export type KnobTextPassThroughType<E> = PassThroughType<KnobTextInstance, E>;

/**
 * Defines passthrough(pt) options of KnobText component.
 */
export interface KnobTextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KnobTextPassThroughType<React.HTMLAttributes<SVGTextElement>>;
}

/**
 * Defines valid properties in KnobText component.
 */
export interface KnobTextProps extends BaseComponentProps<KnobTextInstance, unknown, KnobTextPassThrough> {
    /**
     * Width of the knob stroke.
     * @default 14
     */
    strokeWidth?: number | undefined;
    /**
     * Color of the text.
     * @default $dt('knob.text.color')
     */
    color?: string | undefined;
}

/**
 * Defines valid state in KnobText component.
 */
export interface KnobTextState {}

/**
 * Defines the methods and properties exposed by KnobText component.
 */
export interface KnobTextExposes {
    /**
     * The Knob component instance.
     */
    knob: KnobInstance | undefined | null;
}

/**
 * Instance of KnobText component.
 */
export type KnobTextInstance = ComponentInstance<KnobTextProps, KnobTextState, KnobTextExposes>;
