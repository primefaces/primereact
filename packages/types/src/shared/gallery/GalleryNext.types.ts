/**
 *
 * GalleryNext is a component that displays a next of a gallery.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerynext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryNext component.
 */
export type GalleryNextPassThroughType<E> = PassThroughType<GalleryNextInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryNext component.
 */
export interface GalleryNextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryNextPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryNext component.
 */
export interface GalleryNextProps extends BaseComponentProps<GalleryNextInstance, unknown, GalleryNextPassThrough> {}

/**
 * Defines valid state in GalleryNext component.
 */
export interface GalleryNextState {}

/**
 * Defines the methods and properties exposed by GalleryNext component.
 */
export interface GalleryNextExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryNext component.
 */
export type GalleryNextInstance = ComponentInstance<GalleryNextProps, GalleryNextState, GalleryNextExposes>;
