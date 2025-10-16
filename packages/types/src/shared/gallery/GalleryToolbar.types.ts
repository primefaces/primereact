/**
 *
 * GalleryToolbar is a component that displays a toolbar of a gallery.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerytoolbar
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryToolbar component.
 */
export type GalleryToolbarPassThroughType<E> = PassThroughType<GalleryToolbarInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryToolbar component.
 */
export interface GalleryToolbarPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryToolbarPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryToolbar component.
 */
export interface GalleryToolbarProps extends BaseComponentProps<GalleryToolbarInstance, unknown, GalleryToolbarPassThrough> {}

/**
 * Defines valid state in GalleryToolbar component.
 */
export interface GalleryToolbarState {}

/**
 * Defines the methods and properties exposed by GalleryToolbar component.
 */
export interface GalleryToolbarExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryToolbar component.
 */
export type GalleryToolbarInstance = ComponentInstance<GalleryToolbarProps, GalleryToolbarState, GalleryToolbarExposes>;
