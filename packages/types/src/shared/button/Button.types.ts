/**
 *
 * Button is an extension to standard input element with icons and theming.
 *
 * [Live Demo](https://www.primereact.org/button/)
 *
 * @module button
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useButtonExposes, useButtonProps, useButtonState } from './useButton.types';

/**
 * Defines passthrough(pt) options type in Button component.
 */
export type ButtonPassThroughType<E> = PassThroughType<ButtonInstance, E>;

/**
 * Defines passthrough(pt) options of Button component.
 */
export interface ButtonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ButtonPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in Button component.
 */
export interface ButtonProps extends BaseComponentProps<ButtonInstance, useButtonProps> {
    /**
     * Size of the Button.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * Severity type of the Button.
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Variant of the Button.
     */
    variant?: 'link' | 'text' | 'outlined' | undefined;
    /**
     * Whether to show the Button with a plain style.
     */
    plain?: boolean | undefined;
    /**
     * Whether to show the Button with a rounded style.
     */
    rounded?: boolean | undefined;
    /**
     * Whether to show the Button with a raised style.
     */
    raised?: boolean | undefined;
    /**
     * Whether to show the Button with a borderless style.
     */
    iconOnly?: boolean | undefined;
    /**
     * Whether to show the Button with a fluid width.
     */
    fluid?: boolean | undefined;
}

/**
 * Defines valid state in Button component.
 * @extends useButtonState
 */
export interface ButtonState extends useButtonState {}

/**
 * Defines the methods and properties exposed by Button component.
 * @extends useButtonExposes
 */
export interface ButtonExposes extends useButtonExposes {}

/**
 * Defines the CSS class names used in the Button component.
 */
export const ButtonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-button',
    /**
     * Class name of the loading icon element
     */
    loadingIcon: 'p-button-loading-icon',
    /**
     * Class name of the icon element
     */
    icon: 'p-button-icon',
    /**
     * Class name of the label element
     */
    label: 'p-button-label'
} as const;

/**
 * Type representing the CSS class names used in the Button component.
 */
export type ButtonClassNamesType = (typeof ButtonClassNames)[keyof typeof ButtonClassNames];

/**
 * Instance of Button component.
 */
export type ButtonInstance = ComponentInstance<ButtonProps, ButtonState, ButtonExposes, ButtonPassThrough>;
