/**
 *
 * ImageCompareRight is a component that displays a right image.
 *
 * [Live Demo](https://www.primereact.org/imagecompare/)
 *
 * @module imagecompare
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ImageCompareInstance } from './ImageCompare.types';

/**
 * Defines passthrough(pt) options type in ImageCompareRight component.
 */
export type ImageCompareRightPassThroughType<E> = PassThroughType<ImageCompareRightInstance, E>;

/**
 * Defines passthrough(pt) options of ImageCompareRight component.
 */
export interface ImageCompareRightPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageCompareRightPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in ImageCompareRight component.
 */
export interface ImageCompareRightProps extends BaseComponentProps<ImageCompareRightInstance, unknown, ImageCompareRightPassThrough> {}

/**
 * Defines valid state in ImageCompareRight component.
 */
export interface ImageCompareRightState {}

/**
 * Defines the methods and properties exposed by ImageCompareRight component.
 */
export interface ImageCompareRightExposes {
    /**
     * The ImageCompare component instance.
     */
    imagecompare: ImageCompareInstance | undefined | null;
}

/**
 * Instance of ImageCompareRight component.
 */
export type ImageCompareRightInstance = ComponentInstance<ImageCompareRightProps, ImageCompareRightState, ImageCompareRightExposes>;
