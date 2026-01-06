/**
 *
 * Label can be used standalone or in conjunction with form components to provide accessible labeling.
 *
 * [Live Demo](https://www.primereact.org/label/)
 *
 * @module labelroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useLabelExposes, useLabelProps, useLabelState } from './useLabel.types';

/**
 * Defines passthrough(pt) options type in Label component.
 */
export type LabelRootPassThroughType<E> = PassThroughType<LabelRootInstance, E>;

/**
 * Defines passthrough(pt) options of Label component.
 */
export interface LabelRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: LabelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the ifta's DOM element.
     */
    ifta?: LabelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the float's DOM element.
     */
    float?: LabelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Label component.
 */
export interface LabelRootProps extends BaseComponentProps<LabelRootInstance, useLabelProps, LabelRootPassThrough> {}

/**
 * Defines valid state in Label component.
 * @extends useLabelState
 */
export interface LabelRootState extends useLabelState {}

/**
 * Defines the methods and properties exposed by Label component.
 * @extends useLabelExposes
 */
export interface LabelRootExposes extends useLabelExposes {}

/**
 * Instance of Label component.
 */
export type LabelRootInstance = ComponentInstance<LabelRootProps, LabelRootState, LabelRootExposes>;
