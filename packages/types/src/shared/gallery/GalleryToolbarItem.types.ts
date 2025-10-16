/**
 *
 * GalleryToolbarItem is a component that displays a toolbar item of a gallery.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerytoolbaritem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryToolbarItem component.
 */
export type GalleryToolbarItemPassThroughType<E> = PassThroughType<GalleryToolbarItemInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryToolbarItem component.
 */
export interface GalleryToolbarItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryToolbarItemPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryToolbarItem component.
 */
export interface GalleryToolbarItemProps extends BaseComponentProps<GalleryToolbarItemInstance, unknown, GalleryToolbarItemPassThrough> {
    /**
     * The action to perform.
     */
    action?: 'zoomIn' | 'zoomOut' | 'rotateLeft' | 'rotateRight' | 'flipX' | 'flipY' | 'download' | 'next' | 'prev' | 'toggleFullScreen';
}

/**
 * Defines valid state in GalleryToolbarItem component.
 */
export interface GalleryToolbarItemState {}

/**
 * Defines the methods and properties exposed by GalleryToolbarItem component.
 */
export interface GalleryToolbarItemExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryToolbarItem component.
 */
export type GalleryToolbarItemInstance = ComponentInstance<GalleryToolbarItemProps, GalleryToolbarItemState, GalleryToolbarItemExposes>;
