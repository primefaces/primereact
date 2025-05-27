/**
 *
 * SwitchThumb is a component that displays athumb.
 *
 * [Live Demo](https://www.primereact.org/switch/)
 *
 * @module switchthumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SwitchInstance } from './Switch.types';

/**
 * Defines passthrough(pt) options type in SwitchThumb component.
 */
export type SwitchThumbPassThroughType<E> = PassThroughType<SwitchThumbInstance, E>;

/**
 * Defines passthrough(pt) options of SwitchThumb component.
 */
export interface SwitchThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SwitchThumbPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SwitchThumb component.
 */
export interface SwitchThumbProps extends BaseComponentProps<SwitchThumbInstance> {}

/**
 * Defines valid state in SwitchThumb component.
 */
export interface SwitchThumbState {}

/**
 * Defines the methods and properties exposed by SwitchThumb component.
 */
export interface SwitchThumbExposes {
    /**
     * The Switch component instance.
     */
    switchContext: SwitchInstance | undefined | null;
}

/**
 * Instance of SwitchThumb component.
 */
export type SwitchThumbInstance = ComponentInstance<SwitchThumbProps, SwitchThumbState, SwitchThumbExposes, SwitchThumbPassThrough>;
