/**
 *
 * GalleryPrev is a component that displays a previous of a gallery.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module galleryprev
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryPrev component.
 */
export type GalleryPrevPassThroughType<E> = PassThroughType<GalleryPrevInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryPrev component.
 */
export interface GalleryPrevPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryPrevPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryPrev component.
 */
export interface GalleryPrevProps extends BaseComponentProps<GalleryPrevInstance, unknown, GalleryPrevPassThrough> {}

/**
 * Defines valid state in GalleryPrev component.
 */
export interface GalleryPrevState {}

/**
 * Defines the methods and properties exposed by GalleryPrev component.
 */
export interface GalleryPrevExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryPrev component.
 */
export type GalleryPrevInstance = ComponentInstance<GalleryPrevProps, GalleryPrevState, GalleryPrevExposes>;
