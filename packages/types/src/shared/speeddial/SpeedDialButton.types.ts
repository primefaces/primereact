/**
 *
 * SpeedDialButton is a component that displays a button.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddialbutton
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SpeedDialInstance } from './SpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDialButton component.
 */
export type SpeedDialButtonPassThroughType<E> = PassThroughType<SpeedDialButtonInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDialButton component.
 */
export interface SpeedDialButtonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialButtonPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in SpeedDialButton component.
 */
export interface SpeedDialButtonProps extends BaseComponentProps<SpeedDialButtonInstance, unknown, SpeedDialButtonPassThrough> {
    /**
     * Whether to show the SpeedDialButton with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Whether to show the SpeedDialButton with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in SpeedDialButton component.
 */
export interface SpeedDialButtonState {}

/**
 * Defines the methods and properties exposed by SpeedDialButton component.
 */
export interface SpeedDialButtonExposes {
    /**
     * Instance of the SpeedDial component.
     */
    speeddial: SpeedDialInstance | undefined | null;
}

/**
 * Instance of SpeedDialButton component.
 */
export type SpeedDialButtonInstance = ComponentInstance<SpeedDialButtonProps, SpeedDialButtonState, SpeedDialButtonExposes>;
