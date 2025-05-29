/**
 *
 * Label can be used standalone or in conjunction with form components to provide accessible labeling.
 *
 * [Live Demo](https://www.primereact.org/label/)
 *
 * @module label
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useLabelExposes, useLabelProps, useLabelState } from './useLabel.types';

/**
 * Defines passthrough(pt) options type in Label component.
 */
export type LabelPassThroughType<E> = PassThroughType<LabelInstance, E>;

/**
 * Defines passthrough(pt) options of Label component.
 */
export interface LabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: LabelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Label component.
 */
export interface LabelProps extends BaseComponentProps<LabelInstance, useLabelProps> {}

/**
 * Defines valid state in Label component.
 * @extends useLabelState
 */
export interface LabelState extends useLabelState {}

/**
 * Defines the methods and properties exposed by Label component.
 * @extends useLabelExposes
 */
export interface LabelExposes extends useLabelExposes {}

/**
 * Defines the CSS class names used in the Label component.
 */
export const LabelClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-label'
} as const;

/**
 * Type representing the CSS class names used in the Label component.
 */
export type LabelClassNamesType = (typeof LabelClassNames)[keyof typeof LabelClassNames];

/**
 * Instance of Label component.
 */
export type LabelInstance = ComponentInstance<LabelProps, LabelState, LabelExposes, LabelPassThrough>;
