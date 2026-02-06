/**
 *
 * Compare component is used to compare two images side by side with a slider.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module compareroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCompareChangeEvent, useCompareExposes, useCompareProps, useCompareState } from './useCompare.types';

/**
 * Defines passthrough(pt) options type in Compare component.
 */
export type CompareRootPassThroughType<E> = PassThroughType<CompareRootInstance, E>;

/**
 * Defines passthrough(pt) options of Compare component.
 */
export interface CompareRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the Slider's value changes.
 */
export interface CompareRootChangeEvent extends useCompareChangeEvent<React.SyntheticEvent> {
    /**
     * The pressed state of the ToggleButton.
     */
    value: number | number[] | undefined;
}

/**
 * Defines valid properties in Compare component.
 */
export interface CompareRootProps extends BaseComponentProps<CompareRootInstance, Omit<useCompareProps, 'onValueChange'>, CompareRootPassThrough> {
    /**
     * The name of the compare.
     */
    name?: string | undefined;
    /**
     * The tab index of the compare.
     */
    tabIndex?: number | undefined;
    /**
     * The input id of the compare.
     */
    inputId?: string | undefined;
    /**
     * The input style of the compare.
     */
    inputStyle?: React.CSSProperties | undefined;
    /**
     * The input class name of the compare.
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
     * Callback fired when the compare is focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Callback fired when the compare loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the slider.
     * @returns void
     */
    onValueChange?: (event: CompareRootChangeEvent) => void;
}

/**
 * Defines valid state in Compare component.
 * @extends useCompareState
 */
export interface CompareRootState extends useCompareState {}

/**
 * Defines the methods and properties exposed by Compare component.
 * @extends useCompareExposes
 */
export interface CompareRootExposes extends useCompareExposes {}

/**
 * Instance of CompareRoot component.
 */
export type CompareRootInstance = ComponentInstance<CompareRootProps, CompareRootState, CompareRootExposes>;
