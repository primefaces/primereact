/**
 *
 * ImageCompareLeft is a component that displays a left image.
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
 * Defines passthrough(pt) options type in ImageCompareLeft component.
 */
export type ImageCompareLeftPassThroughType<E> = PassThroughType<ImageCompareLeftInstance, E>;

/**
 * Defines passthrough(pt) options of ImageCompareLeft component.
 */
export interface ImageCompareLeftPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageCompareLeftPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in ImageCompareLeft component.
 */
export interface ImageCompareLeftProps extends BaseComponentProps<ImageCompareLeftInstance> {}

/**
 * Defines valid state in ImageCompareLeft component.
 */
export interface ImageCompareLeftState {}

/**
 * Defines the methods and properties exposed by ImageCompareLeft component.
 */
export interface ImageCompareLeftExposes {
    /**
     * The ImageCompare component instance.
     */
    imagecompare: ImageCompareInstance | undefined | null;
}

/**
 * Instance of ImageCompareLeft component.
 */
export type ImageCompareLeftInstance = ComponentInstance<ImageCompareLeftProps, ImageCompareLeftState, ImageCompareLeftExposes, ImageCompareLeftPassThrough>;
