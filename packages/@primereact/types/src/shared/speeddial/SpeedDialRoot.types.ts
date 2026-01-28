/**
 *
 * SpeedDial is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddialroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSpeedDialExposes, useSpeedDialProps, useSpeedDialState } from './useSpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDial component.
 */
export type SpeedDialRootPassThroughType<E> = PassThroughType<SpeedDialRootInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDial component.
 */
export interface SpeedDialRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    button?: SpeedDialRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: SpeedDialRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: SpeedDialRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: SpeedDialRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Event fired when the speeddial's visibility changes.
 */
export interface SpeedDialRootVisibleChangeEvent {
    /**
     * The value of the speeddial.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in SpeedDial component.
 */
export interface SpeedDialRootProps extends BaseComponentProps<SpeedDialRootInstance, Omit<useSpeedDialProps, 'onVisibleChange'>, SpeedDialRootPassThrough> {
    /**
     * Whether the component is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback fired when the speeddial's visibility changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the speeddial.
     * @returns void
     */
    onVisibleChange?: (event: SpeedDialRootVisibleChangeEvent) => void;
}

/**
 * Defines valid state in SpeedDial component.
 * @extends useSpeedDialState
 */
export interface SpeedDialRootState extends useSpeedDialState {}

/**
 * Defines the methods and properties exposed by SpeedDial component.
 * @extends useSpeedDialExposes
 */
export interface SpeedDialRootExposes extends useSpeedDialExposes {}

/**
 * Instance of SpeedDial component.
 */
export type SpeedDialRootInstance = ComponentInstance<SpeedDialRootProps, SpeedDialRootState, SpeedDialRootExposes>;
