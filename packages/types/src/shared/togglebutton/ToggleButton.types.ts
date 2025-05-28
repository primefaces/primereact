/**
 *
 * ToggleButton is an extension to standard ToggleButton element with theming.
 *
 * [Live Demo](https://www.primereact.org/ToggleButton/)
 *
 * @module togglebutton
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToggleButtonGroupInstance } from './ToggleButtonGroup.types';
import type { useToggleButtonChangeEvent, useToggleButtonExposes, useToggleButtonProps, useToggleButtonState } from './useToggleButton.types';

/**
 * Defines passthrough(pt) options type in ToggleButton component.
 */
export type ToggleButtonPassThroughType<E> = PassThroughType<ToggleButtonInstance, E>;

/**
 * Defines passthrough(pt) options of ToggleButton component.
 */
export interface ToggleButtonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleButtonPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the indicator's DOM element.
     */
    indicator?: ToggleButtonPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the ToggleButton's checked state changes.
 * @extends useToggleButtonChangeEvent
 */
export interface ToggleButtonChangeEvent extends useToggleButtonChangeEvent<React.ChangeEvent<HTMLButtonElement>> {
    /**
     * Value of the ToggleButton.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in ToggleButton component.
 */
export interface ToggleButtonProps extends BaseComponentProps<ToggleButtonInstance, Omit<useToggleButtonProps, 'onPressedChange'>> {
    /**
     * Value of the ToggleButton.
     */
    value?: unknown | undefined;
    /**
     * Defines the size of the ToggleButton.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.pressed The pressed state of the ToggleButton.
     * @returns void
     */
    onPressedChange?: (event: ToggleButtonChangeEvent) => void;
}

/**
 * Defines valid state in ToggleButton component.
 * @extends useToggleButtonState
 */
export interface ToggleButtonState extends useToggleButtonState {}

/**
 * Defines the methods and properties exposed by ToggleButton component.
 * @extends useToggleButtonExposes
 */
export interface ToggleButtonExposes extends useToggleButtonExposes {
    /**
     * The group instance of the ToggleButton.
     */
    group?: ToggleButtonGroupInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the ToggleButton component.
 */
export const ToggleButtonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-togglebutton',
    /**
     * Class name of the content element
     */
    indicator: 'p-togglebutton-content'
} as const;

/**
 * Type representing the CSS class names used in the ToggleButton component.
 */
export type ToggleButtonClassNamesType = (typeof ToggleButtonClassNames)[keyof typeof ToggleButtonClassNames];

/**
 * Instance of ToggleButton component.
 */
export type ToggleButtonInstance = ComponentInstance<ToggleButtonProps, ToggleButtonState, ToggleButtonExposes, ToggleButtonPassThrough>;
