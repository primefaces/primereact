/**
 *
 * Gallery groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module galleryitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useGalleryItemExposes, useGalleryItemProps, useGalleryItemState } from './useGalleryItem.types';

/**
 * Defines passthrough(pt) options type in GalleryItem component.
 */
export type GalleryItemPassThroughType<E> = PassThroughType<GalleryItemInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryItem component.
 */
export interface GalleryItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in GalleryItem component.
 */
export interface GalleryItemProps extends BaseComponentProps<GalleryItemInstance, useGalleryItemProps, GalleryItemPassThrough> {}

/**
 * Defines valid state in GalleryItem component.
 * @extends useAvatarState
 */
export interface GalleryItemState extends useGalleryItemState {}

/**
 * Defines the methods and properties exposed by GalleryItem component.
 * @extends useAvatarExposes
 */
export interface GalleryItemExposes extends useGalleryItemExposes {}

/**
 * Instance of GalleryItem component.
 */
export type GalleryItemInstance = ComponentInstance<GalleryItemProps, GalleryItemState, GalleryItemExposes>;
