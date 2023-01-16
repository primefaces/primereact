/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.primefaces.org/primereact/togglebutton/)
 *
 * @module togglebutton
 *
 */
import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';
import { IconType } from '../utils';

/**
 * @todo Write the documentation
 */
interface ToggleButtonChangeTargetOptions {
    /**
     * @todo Write the documentation
     */
    name: string;
    /**
     * @todo Write the documentation
     */
    id: string;
    /**
     * @todo Write the documentation
     */
    value: boolean;
}

/**
 * Custom change event.
 * @see {@link DataViewProps.onChange}
 * @event
 */
interface ToggleButtonChangeEvents {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Value as the checked state.
     */
    value: boolean;
    /**
     * @todo Write the documentation
     *
     */
    stopPropagation(): void;
    /**
     * @todo Write the documentation
     */
    preventDefault(): void;
    /**
     * @todo Write the documentation
     */
    target: ToggleButtonChangeTargetOptions;
}

/**
 * Defines valid properties in ToggleButton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ToggleButtonProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    /**
     * Specifies the on/off state of the button.
     * @defaultValue false
     */
    checked?: boolean | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Position of the icon, valid values are "left" and "right".
     * @defaultValue left
     */
    iconPos?: 'left' | 'right' | undefined;
    /**
     * Icon for the off state.
     */
    offIcon?: IconType<ToggleButtonProps> | undefined;
    /**
     * Label for the off state.
     * @defaultValue no
     */
    offLabel?: string | undefined;
    /**
     * Icon for the on state.
     */
    onIcon?: IconType<ToggleButtonProps> | undefined;
    /**
     * Label for the on state.
     * @defaultValue yes
     */
    onLabel?: string | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * Callback to invoke when autocomplete loses focus.
     * @param {React.FocusEvent<HTMLElement>} event - Browser event.
     */
    onBlur?(event: React.FocusEvent<HTMLElement>): void;
    /**
     * Callback to invoke on value change.
     * @param {ToggleButtonChangeEvents} event - Browser event.
     */
    onChange?(event: ToggleButtonChangeEvents): void;
    /**
     * Callback to invoke when autocomplete gets focus.
     * @param {React.FocusEvent<HTMLElement>} event - Browser event.
     */
    onFocus?(event: React.FocusEvent<HTMLElement>): void;
}

/**
 * @group Component
 */
export declare class ToggleButton extends React.Component<ToggleButtonProps, any> {
    /**
     * Used to focus the component.
     */
    public focus(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
