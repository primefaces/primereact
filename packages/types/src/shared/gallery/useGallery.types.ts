/**
 *
 * The useGallery manages the state and functionality of a Gallery component.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module usegallery
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import { Carousel } from 'primereact/carousel';

/**s
 * Event fired when the gallery's active index changes.
 */
export interface useGalleryChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The value of the gallery.
     */
    value: number | undefined;
}

/**
 * Defines valid properties in useGallery.
 */
export interface useGalleryProps {
    /**
     * The index of the active item.
     * @default 0
     */
    activeIndex?: number;

    /**
     * Callback fired when the gallery's active index changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the gallery.
     * @returns void
     */
    onActiveIndexChange?: (event: useGalleryChangeEvent) => void;
}

/**
 * Defines valid state in useGallery.
 */
export interface useGalleryState {
    /**
     * Whether the gallery is in fullscreen mode.
     */
    isFullscreen: boolean;
    /**
     * The index of the active item.
     */
    activeIndex: number;
}

type useGalleryActions = {
    /**
     * Zooms in the gallery.
     * @returns void
     */
    zoomIn: () => void;
    /**
     * Zooms out the gallery.
     * @returns void
     */
    zoomOut: () => void;
    /**
     * Rotates the gallery left.
     * @returns void
     */
    rotateLeft: () => void;
    /**
     * Rotates the gallery right.
     * @returns void
     */
    rotateRight: () => void;
    /**
     * Flips the gallery horizontally.
     * @returns void
     */
    flipX: () => void;
    /**
     * Flips the gallery vertically.
     * @returns void
     */
    flipY: () => void;
    /**
     * Downloads the gallery.
     * @returns void
     */
    download: () => void;
    /**
     * Handles the next action.
     * @returns void
     */
    next: () => void;
    /**
     * Handles the previous action.
     * @returns void
     */
    prev: () => void;
    /**
     * Toggles the fullscreen state.
     * @returns void
     */
    toggleFullScreen: () => void;
};
/**
 * Defines the methods and properties exposed by useGallery.
 */
export interface useGalleryExposes {
    /**
     * The state of the useGallery.
     */
    state: useGalleryState;

    /**
     * The methods and properties exposed by useGallery.
     */
    actions: useGalleryActions;
    /**
     * Ref to the content element.
     */
    contentRef: React.RefObject<HTMLElement | null>;
    /**
     * Ref to the toolbar element.
     */
    toolbarRef: React.RefObject<HTMLElement | null>;
    /**
     * Ref to the thumbnail element.
     */
    thumbnailRef: React.RefObject<React.RefObject<typeof Carousel> | null>;
    /**
     * Ref to the previous button element.
     */
    prevRef: React.RefObject<HTMLButtonElement | null>;
    /**
     * Ref to the next button element.
     */
    nextRef: React.RefObject<HTMLButtonElement | null>;
    /**
     * Registers an item.
     * @param ref - The ref to register.
     * @returns number
     */
    registerItem: (ref: HTMLDivElement | null) => number;
    /**
     * Handles the next action.
     * @returns void
     */
    handleNext: () => void;
    /**
     * Handles the previous action.
     * @returns void
     */
    handlePrev: () => void;
    /**
     * Creates a custom event.
     * @param action - The action to create.
     * @returns void
     */
    createCustomEvent: (action: string) => () => void;
    /**
     * Toggles the fullscreen state.
     * @returns void
     */
    toggleFullScreen: () => void;
    /**
     * Handles a click action.
     * @param action - The action to handle.
     * @returns void
     */
    handleClickAction: (action?: string) => void;
}

/**
 * Instance of useGallery headless.
 */
export type useGalleryInstance = HeadlessInstance<useGalleryProps, useGalleryState, useGalleryExposes>;
