/**
 *
 * GalleryBackdrop is a component that displays a backdrop of content.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallerybackdrop
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { GalleryInstance } from './Gallery.types';

/**
 * Defines passthrough(pt) options type in GalleryBackdrop component.
 */
export type GalleryBackdropPassThroughType<E> = PassThroughType<GalleryBackdropInstance, E>;

/**
 * Defines passthrough(pt) options of GalleryBackdrop component.
 */
export interface GalleryBackdropPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: GalleryBackdropPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in GalleryBackdrop component.
 */
export interface GalleryBackdropProps extends BaseComponentProps<GalleryBackdropInstance, unknown, GalleryBackdropPassThrough> {}

/**
 * Defines valid state in GalleryBackdrop component.
 */
export interface GalleryBackdropState {}

/**
 * Defines the methods and properties exposed by GalleryBackdrop component.
 */
export interface GalleryBackdropExposes {
    /**
     * The Gallery component instance.
     */
    gallery: GalleryInstance | undefined | null;
}

/**
 * Instance of GalleryBackdrop component.
 */
export type GalleryBackdropInstance = ComponentInstance<GalleryBackdropProps, GalleryBackdropState, GalleryBackdropExposes>;
