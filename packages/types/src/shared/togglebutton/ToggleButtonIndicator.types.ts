/**
 *
 * ToggleButtonIndicator component is used to display the indicator of ToggleButton.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module togglebuttonindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToggleButtonInstance } from './ToggleButton.types';

/**
 * Defines passthrough(pt) options type in ToggleButtonIndicator component.
 */
export type ToggleButtonIndicatorPassThroughType<E> = PassThroughType<ToggleButtonIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of ToggleButtonIndicator component.
 */
export interface ToggleButtonIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleButtonIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToggleButtonIndicator component.
 */
export interface ToggleButtonIndicatorProps extends BaseComponentProps<ToggleButtonIndicatorInstance> {}

/**
 * Defines valid state in ToggleButtonIndicator component.
 */
export interface ToggleButtonIndicatorState {}

/**
 * Defines the methods and properties exposed by ToggleButtonIndicator component.
 */
export interface ToggleButtonIndicatorExposes {
    /**
     * The ToggleButton component instance.
     */
    togglebutton: ToggleButtonInstance | undefined | null;
}

/**
 * Instance of ToggleButtonIndicator component.
 */
export type ToggleButtonIndicatorInstance = ComponentInstance<ToggleButtonIndicatorProps, ToggleButtonIndicatorState, ToggleButtonIndicatorExposes, ToggleButtonIndicatorPassThrough>;
