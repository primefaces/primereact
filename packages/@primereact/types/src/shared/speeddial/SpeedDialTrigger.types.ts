/**
 *
 * SpeedDialTrigger is a component that displays a trigger button.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddialtrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SpeedDialRootInstance } from './SpeedDialRoot.types';

/**
 * Defines passthrough(pt) options type in SpeedDialTrigger component.
 */
export type SpeedDialTriggerPassThroughType<E> = PassThroughType<SpeedDialTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDialTrigger component.
 */
export interface SpeedDialTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in SpeedDialTrigger component.
 */
export interface SpeedDialTriggerProps extends BaseComponentProps<SpeedDialTriggerInstance, unknown, SpeedDialTriggerPassThrough> {
    /**
     * Whether to show the SpeedDialTrigger with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Whether to show the SpeedDialTrigger with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in SpeedDialTrigger component.
 */
export interface SpeedDialTriggerState {}

/**
 * Defines the methods and properties exposed by SpeedDialTrigger component.
 */
export interface SpeedDialTriggerExposes {
    /**
     * Instance of the SpeedDial component.
     */
    speeddial: SpeedDialRootInstance | undefined | null;
}

/**
 * Instance of SpeedDialTrigger component.
 */
export type SpeedDialTriggerInstance = ComponentInstance<SpeedDialTriggerProps, SpeedDialTriggerState, SpeedDialTriggerExposes>;
