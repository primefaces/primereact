/**
 *
 * Gallery groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallery
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useGalleryExposes, useGalleryProps, useGalleryState } from './useGallery.types';

/**
 * Defines passthrough(pt) options type in Gallery component.
 */
export type GalleryPassThroughType<E> = PassThroughType<GalleryInstance, E>;

/**
 * Defines passthrough(pt) options of Gallery component.
 */
export interface GalleryPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Gallery component.
 */
export interface GalleryProps extends BaseComponentProps<GalleryInstance, useGalleryProps, GalleryPassThrough> {}

/**
 * Defines valid state in Gallery component.
 * @extends useAvatarState
 */
export interface GalleryState extends useGalleryState {}

/**
 * Defines the methods and properties exposed by Gallery component.
 * @extends useAvatarExposes
 */
export interface GalleryExposes extends useGalleryExposes {}

/**
 * Defines the CSS class names used in the Gallery component.
 */
export const GalleryClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-gallery',
    /**
     * Class name of the backdrop element
     */
    backdrop: 'p-gallery-backdrop',
    /**
     * Class name of the content element
     */
    content: 'p-gallery-content',
    /**
     * Class name of the item element
     */
    item: 'p-gallery-item',
    /**
     * Class name of the next element
     */
    next: 'p-gallery-next',
    /**
     * Class name of the prev element
     */
    prev: 'p-gallery-prev',
    /**
     * Class name of the toolbar element
     */
    toolbar: 'p-gallery-toolbar',
    /**
     * Class name of the toolbar item element
     */
    toolbarItem: 'p-gallery-toolbar-item',
    /**
     * Class name of the thumbnail element
     */
    thumbnail: 'p-gallery-thumbnail',
    /**
     * Class name of the thumbnail content element
     */
    thumbnailContent: 'p-gallery-thumbnail-content',
    /**
     * Class name of the thumbnail item element
     */
    thumbnailItem: 'p-gallery-thumbnail-item'
} as const;

/**
 * Type representing the CSS class names used in the Gallery component.
 */
export type GalleryClassNamesType = (typeof GalleryClassNames)[keyof typeof GalleryClassNames];

/**
 * Instance of Gallery component.
 */
export type GalleryInstance = ComponentInstance<GalleryProps, GalleryState, GalleryExposes>;
