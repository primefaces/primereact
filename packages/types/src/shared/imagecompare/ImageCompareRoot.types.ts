/**
 *
 * ImageCompare component is used to compare two images side by side with a slider.
 *
 * [Live Demo](https://www.primereact.org/imagecompare/)
 *
 * @module imagecompareroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useImageCompareExposes, useImageCompareProps, useImageCompareState } from './useImageCompare.types';

/**
 * Defines passthrough(pt) options type in ImageCompare component.
 */
export type ImageCompareRootPassThroughType<E> = PassThroughType<ImageCompareRootInstance, E>;

/**
 * Defines passthrough(pt) options of ImageCompare component.
 */
export interface ImageCompareRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageCompareRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ImageCompare component.
 */
export interface ImageCompareRootProps extends BaseComponentProps<ImageCompareRootInstance, useImageCompareProps, ImageCompareRootPassThrough> {}

/**
 * Defines valid state in ImageCompare component.
 * @extends useImageCompareState
 */
export interface ImageCompareRootState extends useImageCompareState {}

/**
 * Defines the methods and properties exposed by ImageCompare component.
 * @extends useImageCompareExposes
 */
export interface ImageCompareRootExposes extends useImageCompareExposes {}

/**
 * Instance of ImageCompareRoot component.
 */
export type ImageCompareRootInstance = ComponentInstance<ImageCompareRootProps, ImageCompareRootState, ImageCompareRootExposes>;
