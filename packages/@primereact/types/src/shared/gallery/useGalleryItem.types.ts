/**
 *
 * The useGalleryItem manages the state and functionality of a GalleryItem component.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module usegalleryitem
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**s
 * Event fired when the galleryitem's active index changes.
 */
export interface useGalleryItemChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The active index of the galleryitem.
     */
    value: null | undefined | string | number | (string | number)[];
}

/**
 * Defines valid properties in useGalleryItem component.
 */
export interface useGalleryItemProps {
    /**
     * The normal scale of the gallery item.
     * @default 1
     */
    normalScale?: number;
    /**
     * The zoomed scale of the gallery item.
     * @default 3
     */
    zoomedScale?: number;
}

/**
 * Defines valid state in useGalleryItem component.
 */
export interface useGalleryItemState {}

/**
 * Defines the methods and properties exposed by useGalleryItem component.
 */
export interface useGalleryItemExposes {
    /**
     * The state of the useGalleryItem.
     */
    state: useGalleryItemState;
    /**
     * Handles the drag start event.
     * @param e - The drag event.
     * @returns void
     */
    handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
    /**
     * Handles the pointer up event.
     * @param e - The pointer event.
     * @returns void
     */
    handlePointerUp: (e: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Handles the pointer move event.
     * @param e - The pointer event.
     * @returns void
     */
    handlePointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Handles the pointer down event.
     * @param e - The pointer event.
     * @returns void
     */
    handlePointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Handles the click event.
     * @param e - The mouse event.
     * @returns void
     */
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Zooms in the gallery item.
     * @returns void
     */
    zoomIn: () => void;
    /**
     * Zooms out the gallery item.
     * @returns void
     */
    zoomOut: () => void;
    /**
     * Rotates the gallery item left.
     * @returns void
     */
    rotateLeft: () => void;
    /**
     * Rotates the gallery item right.
     * @returns void
     */
    rotateRight: () => void;
    /**
     * Flips the gallery item horizontally.
     * @returns void
     */
    flipX: () => void;
    /**
     * Flips the gallery item vertically.
     * @returns void
     */
    flipY: () => void;
    /**
     * Downloads the gallery item.
     * @returns void
     */
    download: () => void;
    /**
     * Calculates the constraints of the gallery item.
     * @returns void
     */
    calculateConstraints: () => { minX: number; maxX: number; minY: number; maxY: number };
    /**
     * Calculates the size of the gallery item.
     * @returns void
     */
    calculateItemSize: () => void;
}

/**
 * Instance of useGalleryItem headless.
 */
export type useGalleryItemInstance = HeadlessInstance<useGalleryItemProps, useGalleryItemState, useGalleryItemExposes>;
