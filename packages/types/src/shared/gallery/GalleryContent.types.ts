/**
 *
 * GalleryContent is a component that displays a content of a gallery.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerycontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryContent component.
 */
export type GalleryContentPassThroughType<E> = PassThroughType<GalleryContentInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryContent component.
 */
export interface GalleryContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryContentPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryContent component.
 */
export interface GalleryContentProps extends BaseComponentProps<GalleryContentInstance, unknown, GalleryContentPassThrough> {}

/**
 * Defines valid state in GalleryContent component.
 */
export interface GalleryContentState {}

/**
 * Defines the methods and properties exposed by GalleryContent component.
 */
export interface GalleryContentExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryContent component.
 */
export type GalleryContentInstance = ComponentInstance<GalleryContentProps, GalleryContentState, GalleryContentExposes>;
