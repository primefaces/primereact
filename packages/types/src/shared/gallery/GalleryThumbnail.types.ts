/**
 *
 * GalleryThumbnail is a component that displays a thumbnail of a gallery.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module gallerythumbnail
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryThumbnail component.
 */
export type GalleryThumbnailPassThroughType<E> = PassThroughType<GalleryThumbnailInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryThumbnail component.
 */
export interface GalleryThumbnailPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryThumbnailPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryThumbnail component.
 */
export interface GalleryThumbnailProps extends BaseComponentProps<GalleryThumbnailInstance, unknown, GalleryThumbnailPassThrough> {}

/**
 * Defines valid state in GalleryThumbnail component.
 */
export interface GalleryThumbnailState {}

/**
 * Defines the methods and properties exposed by GalleryThumbnail component.
 */
export interface GalleryThumbnailExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryThumbnail component.
 */
export type GalleryThumbnailInstance = ComponentInstance<GalleryThumbnailProps, GalleryThumbnailState, GalleryThumbnailExposes>;
