/**
 *
 * SpeedDialAction is a component that displays a action button.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddialaction
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SpeedDialInstance } from './SpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDialAction component.
 */
export type SpeedDialActionPassThroughType<E> = PassThroughType<SpeedDialActionInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDialAction component.
 */
export interface SpeedDialActionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialActionPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in SpeedDialAction component.
 */
export interface SpeedDialActionProps extends BaseComponentProps<SpeedDialActionInstance, unknown, SpeedDialActionPassThrough> {
    /**
     * Whether to show the SpeedDialAction with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Severity type of the SpeedDialAction.
     * @default 'secondary'
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Whether to show the SpeedDialAction with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
    /**
     * Size of the Button.
     * @default 'small'
     */
    size?: 'small' | 'large' | undefined;
}

/**
 * Defines valid state in SpeedDialAction component.
 */
export interface SpeedDialActionState {}

/**
 * Defines the methods and properties exposed by SpeedDialAction component.
 */
export interface SpeedDialActionExposes {
    /**
     * Instance of the SpeedDial component.
     */
    speeddial: SpeedDialInstance | undefined | null;
}

/**
 * Instance of SpeedDialAction component.
 */
export type SpeedDialActionInstance = ComponentInstance<SpeedDialActionProps, SpeedDialActionState, SpeedDialActionExposes>;
