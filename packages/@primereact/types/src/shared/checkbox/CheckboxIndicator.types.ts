/**
 *
 * CheckboxIndicator is a component that displays an indicator inside a Checkbox.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobuttonindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CheckboxRootInstance } from './CheckboxRoot.types';

/**
 * Defines passthrough(pt) options type in CheckboxIndicator component.
 */
export type CheckboxIndicatorPassThroughType<E> = PassThroughType<CheckboxIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of CheckboxIndicator component.
 */
export interface CheckboxIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CheckboxIndicator component.
 */
export interface CheckboxIndicatorProps extends BaseComponentProps<CheckboxIndicatorInstance, unknown, CheckboxIndicatorPassThrough> {}

/**
 * Defines valid state in CheckboxIndicator component.
 */
export interface CheckboxIndicatorState {}

/**
 * Defines the methods and properties exposed by CheckboxIndicator component.
 */
export interface CheckboxIndicatorExposes {
    /**
     * The Carousel component instance.
     */
    checkbox: CheckboxRootInstance | undefined | null;
}

/**
 * Instance of CheckboxIndicator component.
 */
export type CheckboxIndicatorInstance = ComponentInstance<CheckboxIndicatorProps, CheckboxIndicatorState, CheckboxIndicatorExposes>;
