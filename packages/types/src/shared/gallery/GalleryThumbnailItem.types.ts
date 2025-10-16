/**
 *
 * GalleryThumbnailItem is a component that displays a thumbnail item of a gallery.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerythumbnailitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryThumbnailItem component.
 */
export type GalleryThumbnailItemPassThroughType<E> = PassThroughType<GalleryThumbnailItemInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryThumbnailItem component.
 */
export interface GalleryThumbnailItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryThumbnailItemPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryThumbnailItem component.
 */
export interface GalleryThumbnailItemProps extends BaseComponentProps<GalleryThumbnailItemInstance, unknown, GalleryThumbnailItemPassThrough> {}

/**
 * Defines valid state in GalleryThumbnailItem component.
 */
export interface GalleryThumbnailItemState {}

/**
 * Defines the methods and properties exposed by GalleryThumbnailItem component.
 */
export interface GalleryThumbnailItemExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryThumbnailItem component.
 */
export type GalleryThumbnailItemInstance = ComponentInstance<GalleryThumbnailItemProps, GalleryThumbnailItemState, GalleryThumbnailItemExposes>;
