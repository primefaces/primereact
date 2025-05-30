/**
 *
 * IftaLabel is used to create infield top aligned labels.
 *
 * [Live Demo](https://www.primereact.org/label/)
 *
 * @module iftalabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in IftaLabel component.
 */
export type IftaLabelPassThroughType<E> = PassThroughType<IftaLabelInstance, E>;

/**
 * Defines passthrough(pt) options of IftaLabel component.
 */
export interface IftaLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IftaLabelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in IftaLabel component.
 */
export interface IftaLabelProps extends BaseComponentProps<IftaLabelInstance> {}

/**
 * Defines valid state in IftaLabel component.
 */
export interface IftaLabelState {}

/**
 * Defines the methods and properties exposed by IftaLabel component.
 */
export interface IftaLabelExposes {}

/**
 * Defines the CSS class names used in the IftaLabel component.
 */
export const IftaLabelClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-iftalabel'
} as const;

/**
 * Type representing the CSS class names used in the IftaLabel component.
 */
export type IftaLabelClassNamesType = (typeof IftaLabelClassNames)[keyof typeof IftaLabelClassNames];

/**
 * Instance of IftaLabel component.
 */
export type IftaLabelInstance = ComponentInstance<IftaLabelProps, IftaLabelState, IftaLabelExposes, IftaLabelPassThrough>;
