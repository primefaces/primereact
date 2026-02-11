/**
 *
 * ToggleButton is an extension to standard ToggleButton element with theming.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module togglebuttonroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { ToggleButtonGroupInstance } from '@primereact/types/shared/togglebuttongroup';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useToggleButtonChangeEvent, useToggleButtonExposes, useToggleButtonProps, useToggleButtonState } from './useToggleButton.types';

/**
 * Defines passthrough(pt) options type in ToggleButton component.
 */
export type ToggleButtonRootPassThroughType<E> = PassThroughType<ToggleButtonRootInstance, E>;

/**
 * Defines passthrough(pt) options of ToggleButton component.
 */
export interface ToggleButtonRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleButtonRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the indicator's DOM element.
     */
    indicator?: ToggleButtonRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the ToggleButton's checked state changes.
 * @extends useToggleButtonChangeEvent
 */
export interface ToggleButtonRootChangeEvent extends useToggleButtonChangeEvent<React.ChangeEvent<HTMLButtonElement>> {
    /**
     * Value of the ToggleButton.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in ToggleButton component.
 */
export interface ToggleButtonRootProps extends BaseComponentProps<ToggleButtonRootInstance, Omit<useToggleButtonProps, 'onPressedChange'>, ToggleButtonRootPassThrough> {
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
    onPressedChange?: (event: ToggleButtonRootChangeEvent) => void;
}

/**
 * Defines valid state in ToggleButton component.
 * @extends useToggleButtonState
 */
export interface ToggleButtonRootState extends useToggleButtonState {}

/**
 * Defines the methods and properties exposed by ToggleButton component.
 * @extends useToggleButtonExposes
 */
export interface ToggleButtonRootExposes extends useToggleButtonExposes {
    /**
     * The ToggleButtonGroup component instance.
     */
    group?: ToggleButtonGroupInstance | undefined | null;
}

/**
 * Instance of ToggleButton component.
 */
export type ToggleButtonRootInstance = ComponentInstance<ToggleButtonRootProps, ToggleButtonRootState, ToggleButtonRootExposes>;
