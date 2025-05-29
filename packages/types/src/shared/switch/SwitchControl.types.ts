/**
 *
 * SwitchControl is a component that displays a container for thumb.
 *
 * [Live Demo](https://www.primereact.org/switch/)
 *
 * @module switchcontrol
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SwitchInstance } from './Switch.types';

/**
 * Defines passthrough(pt) options type in SwitchControl component.
 */
export type SwitchControlPassThroughType<E> = PassThroughType<SwitchControlInstance, E>;

/**
 * Defines passthrough(pt) options of SwitchControl component.
 */
export interface SwitchControlPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SwitchControlPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SwitchControl component.
 */
export interface SwitchControlProps extends BaseComponentProps<SwitchControlInstance> {}

/**
 * Defines valid state in SwitchControl component.
 */
export interface SwitchControlState {}

/**
 * Defines the methods and properties exposed by SwitchControl component.
 */
export interface SwitchControlExposes {
    /**
     * The Switch component instance.
     */
    switch: SwitchInstance | undefined | null;
}

/**
 * Instance of SwitchControl component.
 */
export type SwitchControlInstance = ComponentInstance<SwitchControlProps, SwitchControlState, SwitchControlExposes, SwitchControlPassThrough>;
