/**
 *
 * Switch component is used to select a boolean value.
 *
 * [Live Demo](https://www.primereact.org/switch/)
 *
 * @module switch
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSwitchChangeEvent, useSwitchExposes, useSwitchProps, useSwitchState } from './useSwitch.types';

/**
 * Defines passthrough(pt) options type in Switch component.
 */
export type SwitchPassThroughType<E> = PassThroughType<SwitchInstance, E>;

/**
 * Defines passthrough(pt) options of Switch component.
 */
export interface SwitchPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SwitchPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: SwitchPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the slider's DOM element.
     */
    slider?: SwitchPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the thumb's DOM element.
     */
    thumb?: SwitchPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the switch's checked state changes.
 * @extends useSwitchChangeEvent
 */
export interface SwitchChangeEvent extends useSwitchChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * Value of the switch.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in Switch component.
 */
export interface SwitchProps extends BaseComponentProps<SwitchInstance, Omit<useSwitchProps, 'onCheckedChange'>> {
    /**
     * Value of the switch.
     */
    value?: unknown | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the element is required.
     * @default false
     */
    required?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the input field.
     */
    inputClassName?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Callback function that is called when the switch is focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback function that is called when the switch loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the switch's checked state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the switch.
     * @returns void
     */
    onCheckedChange?: (event: SwitchChangeEvent) => void;
}

/**
 * Defines valid state in Switch component.
 * @extends useSwitchState
 */
export interface SwitchState extends useSwitchState {}

/**
 * Defines the methods and properties exposed by Switch component.
 * @extends useSwitchExposes
 */
export interface SwitchExposes extends useSwitchExposes {}

/**
 * Defines the CSS class names used in the Switch component.
 */
export const SwitchClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toggleswitch',
    /**
     * Class name of the input element
     */
    input: 'p-toggleswitch-input',
    /**
     * Class name of the slider element
     */
    slider: 'p-toggleswitch-slider',
    /**
     * Class name of the handle element
     */
    thumb: 'p-toggleswitch-handle'
} as const;

/**
 * Type representing the CSS class names used in the Switch component.
 */
export type SwitchClassNamesType = (typeof SwitchClassNames)[keyof typeof SwitchClassNames];

/**
 * Instance of Switch component.
 */
export type SwitchInstance = ComponentInstance<SwitchProps, SwitchState, SwitchExposes, SwitchPassThrough>;
