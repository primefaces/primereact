/**
 *
 * Gallery groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module galleryroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useGalleryExposes, useGalleryProps, useGalleryState } from './useGallery.types';

/**
 * Defines passthrough(pt) options type in Gallery component.
 */
export type GalleryRootPassThroughType<E> = PassThroughType<GalleryRootInstance, E>;

/**
 * Defines passthrough(pt) options of Gallery component.
 */
export interface GalleryRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Gallery component.
 */
export interface GalleryRootProps extends BaseComponentProps<GalleryRootInstance, useGalleryProps, GalleryRootPassThrough> {}

/**
 * Defines valid state in Gallery component.
 * @extends useAvatarState
 */
export interface GalleryRootState extends useGalleryState {}

/**
 * Defines the methods and properties exposed by Gallery component.
 * @extends useAvatarExposes
 */
export interface GalleryRootExposes extends useGalleryExposes {}

/**
 * Instance of Gallery component.
 */
export type GalleryRootInstance = ComponentInstance<GalleryRootProps, GalleryRootState, GalleryRootExposes>;
