/**
 *
 * Select is a dropdown component for selecting a single value from a list.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps } from '..';
import type { useSelectExposes, useSelectFilterValueChangeEvent, useSelectProps, useSelectState, useSelectValueChangeEvent } from './useSelect.types';
import type { PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in Select component.
 */
export type SelectRootPassThroughType<E> = PassThroughType<SelectRootInstance, E>;

/**
 * Defines passthrough(pt) options of Select component.
 */
export interface SelectRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: SelectRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: SelectRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the filter container's DOM element.
     */
    filterContainer?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the filter's DOM element.
     */
    filter?: SelectRootPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the pcListbox's DOM element.
     */
    pcListbox?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: SelectRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the clearIcon's DOM element.
     */
    clearIcon?: SelectRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty's DOM element.
     */
    empty?: SelectRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the select's value changes.
 * @extends useSelectValueChangeEvent
 */
export interface SelectValueChangeEvent extends useSelectValueChangeEvent {
    /**
     * The new value of the select.
     */
    value: unknown;
    /**
     * The selected option.
     */
    option?: unknown;
}

/**
 * Event fired when the select's filter value changes.
 * @extends useSelectFilterValueChangeEvent
 */
export interface SelectFilterValueChangeEvent extends useSelectFilterValueChangeEvent {
    /**
     * The current filter query.
     */
    query: string;
}

/**
 * Defines valid properties in Select component.
 */
export interface SelectRootProps extends BaseComponentProps<SelectRootInstance, Omit<useSelectProps, 'onValueChange' | 'onFilterValueChange'>, SelectRootPassThrough> {
    /**
     * When enabled, displays a checkmark icon next to the selected option.
     * @defaultValue false
     */
    checkmark?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     */
    invalid?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * Spans 100% width of the container when enabled.
     */
    fluid?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Callback fired when the select's value is changed.
     * @param event The event that triggered the change.
     * @returns void
     */
    onValueChange?: (event: SelectValueChangeEvent) => void;
    /**
     * Callback fired when the select's filter value is changed.
     * @param event The event that triggered the change.
     * @returns void
     */
    onFilterValueChange?: (event: SelectFilterValueChangeEvent) => void;
}

/**
 * Defines valid state in Select component.
 * @extends useSelectState
 */
export interface SelectRootState extends useSelectState {}

/**
 * Defines the methods and properties exposed by Select component.
 * @extends useSelectExposes
 */
export interface SelectRootExposes extends useSelectExposes {}

/**
 * Instance of SelectRoot component.
 */
export type SelectRootInstance = ComponentInstance<SelectRootProps, SelectRootState, SelectRootExposes>;
