/**
 *
 * MultiStateCheckbox is used to select a state from given multiple states.
 *
 * [Live Demo](https://www.primefaces.org/primereact/multistatecheckbox/)
 *
 * @module multistatecheckbox
 *
 */
import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';
import { IconType } from '../utils';

/**
 * @todo Write the documentation
 */
interface MultiStateCheckboxOption {
    /**
     * @todo Write the documentation
     */
    icon: IconType<MultiStateCheckboxProps>;
    /**
     * @todo Write the documentation
     */
    style: React.CSSProperties;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    [key: string]: any;
}

/**
 * @todo Write the documentation
 */
interface MultiStateCheckboxIconTemplateEvent {
    /**
     * @todo Write the documentation
     */
    option: MultiStateCheckboxOption | undefined | null;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: MultiStateCheckboxProps;
}

/**
 * @todo Write the documentation
 */
interface MultiStateCheckboxChangeTargetOptions {
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
    value: boolean | undefined | null;
}

/**
 * Custom change event.
 * @see {@link MultiStateCheckboxProps.onChange}
 * @event
 */
interface MultiStateCheckboxChangeEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Current value
     */
    value: any;
    /**
     * @todo Write the documentation
     */
    stopPropagation(): void;
    /**
     * @todo Write the documentation
     */
    preventDefault(): void;
    /**
     * @todo Write the documentation
     */
    target: MultiStateCheckboxChangeTargetOptions;
}

/**
 * Defines valid properties in MultiStateCheckbox component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface MultiStateCheckboxProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    /**
     * Value of the MultiStateCheckbox.
     */
    value?: any | undefined;
    /**
     * An array to display as the available options.
     */
    options?: MultiStateCheckboxOption[] | any[];
    /**
     * Property name to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: string | undefined;
    /**
     * Property name to refer to the option label, used by screen readers only. Defaults to optionValue.
     */
    optionLabel?: string | undefined;
    /**
     * Template of icon for the selected option.
     */
    iconTemplate?: React.ReactNode | ((options: MultiStateCheckboxIconTemplateEvent) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    dataKey?: string | undefined;
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
     * If false, the empty state is skipped in the chekbox.
     * @defaultValue true
     */
    empty?: boolean | undefined;
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
     * @param {MultiStateCheckboxChangeEvent} event - Custom change event.
     */
    onChange?(event: MultiStateCheckboxChangeEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class MultiStateCheckbox extends React.Component<MultiStateCheckboxProps, any> {
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
