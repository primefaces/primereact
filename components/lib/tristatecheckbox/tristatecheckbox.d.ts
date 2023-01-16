/**
 *
 * TriStateCheckbox is used to select either "true", "false" or "null" as the value.
 *
 * [Live Demo](https://www.primefaces.org/primereact/tristatecheckbox/)
 *
 * @module tristatecheckbox
 *
 */
import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';

/**
 * @todo Write the documentation.
 */
interface TriStateCheckboxChangeTargetOptions {
    /**
     * @todo Write the documentation.
     */
    name: string;
    /**
     * @todo Write the documentation.
     */
    id: string;
    /**
     * @todo Write the documentation.
     */
    value: boolean | undefined | null;
}

/**
 * Custom change event.
 * @see {@link TriStateCheckboxProps.onChange}
 * @event
 */
interface TriStateCheckboxChangeEvents {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Current Value
     */
    value: boolean | undefined | null;
    /**
     * @todo Write the documentation.
     */
    stopPropagation(): void;
    /**
     * @todo Write the documentation.
     */
    preventDefault(): void;
    /**
     * @todo Write the documentation.
     */
    target: TriStateCheckboxChangeTargetOptions;
}

/**
 * Defines valid properties in TriStateCheckbox component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface TriStateCheckboxProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'value' | 'ref'> {
    /**
     * Value of the TriStateCheckbox.
     */
    value?: boolean | undefined | null;
    /**
     * When present, it specifies that the element value cannot be altered.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the value cannot be changed.
     * @defaultValue false
     */
    readOnly?: boolean | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * Callback to invoke on value change
     * @param {TriStateCheckboxChangeEvents} event - Browser event.
     */
    onChange?(event: TriStateCheckboxChangeEvents): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class TriStateCheckbox extends React.Component<TriStateCheckboxProps, any> {
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
