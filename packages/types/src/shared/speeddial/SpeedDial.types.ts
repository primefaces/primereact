/**
 *
 * SpeedDial is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddial
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSpeedDialExposes, useSpeedDialProps, useSpeedDialState } from './useSpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDial component.
 */
export type SpeedDialPassThroughType<E> = PassThroughType<SpeedDialInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDial component.
 */
export interface SpeedDialPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    button?: SpeedDialPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: SpeedDialPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: SpeedDialPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: SpeedDialPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Event fired when the speeddial's visibility changes.
 */
export interface SpeedDialChangeEvent {
    /**
     * The value of the speeddial.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in SpeedDial component.
 */
export interface SpeedDialProps extends BaseComponentProps<SpeedDialInstance, Omit<useSpeedDialProps, 'onVisibleChange'>, SpeedDialPassThrough> {
    /**
     * Whether the component is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Defined to rotate showIcon when hideIcon is not present.
     * @default true
     */
    rotateAnimation?: boolean | undefined;
    /**
     * Callback fired when the speeddial's visibility changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the speeddial.
     * @returns void
     */
    onVisibleChange?: (event: SpeedDialChangeEvent) => void;
}

/**
 * Defines valid state in SpeedDial component.
 * @extends useSpeedDialState
 */
export interface SpeedDialState extends useSpeedDialState {}

/**
 * Defines the methods and properties exposed by SpeedDial component.
 * @extends useSpeedDialExposes
 */
export interface SpeedDialExposes extends useSpeedDialExposes {}

/**
 * Defines the CSS class names used in the SpeedDial component.
 */
export const SpeedDialClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-speeddial',
    /**
     * Class name of the button element
     */
    button: 'p-speeddial-button',
    /**
     * Class name of the list element
     */
    list: 'p-speeddial-list',
    /**
     * Class name of the item element
     */
    item: 'p-speeddial-item',
    /**
     * Class name of the action element
     */
    action: 'p-speeddial-action',
    /**
     * Class name of the mask element
     */
    mask: 'p-speeddial-mask'
} as const;

/**
 * Type representing the CSS class names used in the SpeedDial component.
 */
export type SpeedDialClassNamesType = (typeof SpeedDialClassNames)[keyof typeof SpeedDialClassNames];

/**
 * Instance of SpeedDial component.
 */
export type SpeedDialInstance = ComponentInstance<SpeedDialProps, SpeedDialState, SpeedDialExposes>;
