/**
 *
 * ImageCompare component is used to compare two images side by side with a slider.
 *
 * [Live Demo](https://www.primereact.org/imagecompare/)
 *
 * @module imagecompare
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useImageCompareExposes, useImageCompareProps, useImageCompareState } from './useImageCompare.types';

/**
 * Defines passthrough(pt) options type in ImageCompare component.
 */
export type ImageComparePassThroughType<E> = PassThroughType<ImageCompareInstance, E>;

/**
 * Defines passthrough(pt) options of ImageCompare component.
 */
export interface ImageComparePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageComparePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ImageCompare component.
 */
export interface ImageCompareProps extends BaseComponentProps<ImageCompareInstance, useImageCompareProps, ImageComparePassThrough> {}

/**
 * Defines valid state in ImageCompare component.
 * @extends useImageCompareState
 */
export interface ImageCompareState extends useImageCompareState {}

/**
 * Defines the methods and properties exposed by ImageCompare component.
 * @extends useImageCompareExposes
 */
export interface ImageCompareExposes extends useImageCompareExposes {}

/**
 * Defines the CSS class names used in the ImageCompare component.
 */
export const ImageCompareClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-imagecompare',
    /**
     * Class name of the slider element
     */
    slider: 'p-imagecompare-slider'
} as const;

/**
 * Type representing the CSS class names used in the ImageCompare component.
 */
export type ImageCompareClassNamesType = (typeof ImageCompareClassNames)[keyof typeof ImageCompareClassNames];

/**
 * Instance of ImageCompare component.
 */
export type ImageCompareInstance = ComponentInstance<ImageCompareProps, ImageCompareState, ImageCompareExposes>;
