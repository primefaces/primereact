/**
 *
 * RadioButtonIndicator is a component that displays an indicator inside a RadioButton.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobuttonindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { RadioButtonRootInstance } from './RadioButtonRoot.types';

/**
 * Defines passthrough(pt) options type in RadioButtonIndicator component.
 */
export type RadioButtonIndicatorPassThroughType<E> = PassThroughType<RadioButtonIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of RadioButtonIndicator component.
 */
export interface RadioButtonIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in RadioButtonIndicator component.
 */
export interface RadioButtonIndicatorProps extends BaseComponentProps<RadioButtonIndicatorInstance, unknown, RadioButtonIndicatorPassThrough> {}

/**
 * Defines valid state in RadioButtonIndicator component.
 */
export interface RadioButtonIndicatorState {}

/**
 * Defines the methods and properties exposed by RadioButtonIndicator component.
 */
export interface RadioButtonIndicatorExposes {
    /**
     * The Carousel component instance.
     */
    radiobutton: RadioButtonRootInstance | undefined | null;
}

/**
 * Instance of RadioButtonIndicator component.
 */
export type RadioButtonIndicatorInstance = ComponentInstance<RadioButtonIndicatorProps, RadioButtonIndicatorState, RadioButtonIndicatorExposes>;
