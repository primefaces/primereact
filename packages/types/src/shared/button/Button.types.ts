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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useButtonProps } from './useButton.types';

/**
 * Defines passthrough(pt) options type in Button component.
 */
export type ButtonPassThroughOptionType<E> = PassThroughOptionType<ButtonInstance, E>;

/**
 * Defines passthrough(pt) options of Button component.
 */
export interface ButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ButtonPassThroughOptionType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in Button component.
 */
export interface ButtonProps extends BaseComponentProps<useButtonProps> {
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
    variant?: 'text' | 'outlined' | 'contained' | 'link' | undefined;
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
 * Instance of Button component.
 */
export type ButtonInstance = ComponentInstance<ButtonProps>;
