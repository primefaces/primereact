/**
 *
 * SliderThumb is a component that displays a thumb.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module sliderthumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type * as React from 'react';
import type { SliderRootInstance } from './SliderRoot.types';

/**
 * Defines passthrough(pt) options type in SliderThumb component.
 */
export type SliderThumbPassThroughType<E> = PassThroughType<SliderThumbInstance, E>;

/**
 * Defines passthrough(pt) options of SliderThumb component.
 */
export interface SliderThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderThumbPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SliderThumb component.
 */
export interface SliderThumbProps extends BaseComponentProps<SliderThumbInstance, unknown, SliderThumbPassThrough> {
    /**
     * Index of the thumb.
     * @default 0
     */
    index?: number | undefined;
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabIndex?: number | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Name attribute of the input.
     */
    name?: string | undefined;
    /**
     * Id of the input.
     */
    inputId?: string | undefined;
    /**
     * Style of the input element.
     */
    inputStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the input element.
     */
    inputClassName?: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the element should be read-only.
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * When present, it specifies that the element is invalid.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the element is required.
     */
    required?: boolean | undefined;
    /**
     * Callback fired on focus.
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    /**
     * Callback fired on blur.
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

/**
 * Defines valid state in SliderThumb component.
 */
export interface SliderThumbState {}

/**
 * Defines the methods and properties exposed by SliderThumb component.
 */
export interface SliderThumbExposes {
    /**
     * The Slider component instance.
     */
    slider: SliderRootInstance | undefined | null;
}

/**
 * Instance of SliderThumb component.
 */
export type SliderThumbInstance = ComponentInstance<SliderThumbProps, SliderThumbState, SliderThumbExposes>;
