/**
 *
 * GalleryThumbnailContent is a component that displays a content of a thumbnail.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerythumbnailcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryThumbnailContent component.
 */
export type GalleryThumbnailContentPassThroughType<E> = PassThroughType<GalleryThumbnailContentInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryThumbnailContent component.
 */
export interface GalleryThumbnailContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryThumbnailContentPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryThumbnailContent component.
 */
export interface GalleryThumbnailContentProps extends BaseComponentProps<GalleryThumbnailContentInstance, unknown, GalleryThumbnailContentPassThrough> {}

/**
 * Defines valid state in GalleryThumbnailContent component.
 */
export interface GalleryThumbnailContentState {}

/**
 * Defines the methods and properties exposed by GalleryThumbnailContent component.
 */
export interface GalleryThumbnailContentExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryThumbnailContent component.
 */
export type GalleryThumbnailContentInstance = ComponentInstance<GalleryThumbnailContentProps, GalleryThumbnailContentState, GalleryThumbnailContentExposes>;
