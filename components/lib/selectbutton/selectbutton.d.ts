/**
 *
 * SelectButton is used to choose single or multiple items from a list using buttons.
 *
 * [Live Demo](https://www.primefaces.org/primereact/selectbutton/)
 *
 * @module selectbutton
 *
 */
import * as React from 'react';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';

/**
 * @todo Write the documentation.
 */
interface SelectButtonChangeTargetOptions {
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
    value: any;
}

/**
 * Custom change event.
 * @see {@link SelectButtonProps.onChange}
 * @event
 */
interface SelectButtonChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Single value or an array of values that are selected.
     */
    value: any;
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
    target: SelectButtonChangeTargetOptions;
}

/**
 * Defines valid properties in SelectButton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SelectButtonProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'unselectable' | 'onChange' | 'ref'> {
    /**
     * Value of the component.
     */
    value?: any | undefined;
    /**
     * An array of objects to display as the available options.
     */
    options?: SelectItemOptionsType | undefined;
    /**
     * Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
     */
    optionLabel?: string | undefined;
    /**
     * Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
     */
    optionValue?: string | undefined;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: string | ((option: any) => boolean);
    /**
     * Index of the element in tabbing order.
     */
    tabIndex?: number | undefined;
    /**
     * When specified, allows selecting multiple values.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Whether selection can be cleared.
     * @defaultValue true
     */
    unselectable?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely match the value in options for better performance.
     */
    dataKey?: string | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * @todo Write the documentation.
     */
    ariaLabelledBy?: string | undefined;
    /**
     * Function that gets the option and returns the content.
     * @param {any} option - @todo Write the documentation.
     */
    itemTemplate?(option: any): React.ReactNode;
    /**
     * Callback to invoke on value change.
     * @param {SelectButtonChangeEvent} event - Custom change event.
     */
    onChange?(event: SelectButtonChangeEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class SelectButton extends React.Component<SelectButtonProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
    /**
     * Used to focus the component.
     */
    public focus(): void;
}
