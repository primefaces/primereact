/**
 *
 * The useCarousel manages the state and functionality of a Carousel component.
 *
 * [Live Demo](https://www.primereact.org/Carousel/)
 *
 * @module usecarousel
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the accordion's value changes.
 */
export interface useCarouselChangeEvent {
    /**
     * The value of the accordion.
     */
    value: null | undefined | number;
}

/**
 * Defines valid properties in useCarousel.
 */
export interface useCarouselProps {
    /**
     *Orientation of the carousel.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     *Alignment of the carousel items.
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end';
    /**
     *Whether the carousel should loop.
     * @default false
     */
    loop?: boolean;
    /**
     * Spacing between carousel items.
     * @default 16
     */
    spacing?: number;
    /**
     * Index of the active slide.
     * @default 0
     */
    slide?: number;
    /**
     * Callback fired when the carousel's slide changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the active slide.
     * @returns void
     */
    onSlideChange?: (event: useCarouselChangeEvent) => void;
}

/**
 * Defines valid state in useCarousel.
 */
export interface useCarouselState {
    /**
     * Array of calculated scroll positions (snap points) for each slide.
     */
    scrollSnaps: number[];
    /**
     * Array of calculated scroll positions (snap points) for each slide.
     */
    snapPoints: number[];
    /**
     * Indicates whether the user is currently swiping/dragging the carousel.
     */
    isSwiping: boolean;
    /**
     * Array of sizes (width or height depending on orientation) of each slide.
     */
    slideSizes: number[];
    /**
     * Indicates if looping (circular scroll) is enabled or possible.
     */
    canLoop: boolean;
    /**
     * Array of raw snap offsets without adjustments for looping or alignment.
     */
    snaps: number[];
    /**
     * The index of the currently active slide.
     */
    activeIndex: number;
    /**
     * Whether the "previous" navigation button should be disabled.
     */
    prevDisabled: boolean;
    /**
     * Whether the "next" navigation button should be disabled.
     */
    nextDisabled: boolean;
}

/**
 * Defines the methods and properties exposed by useCarousel.
 */
export interface useCarouselExposes {
    /**
     * The state of the useCarousel.
     */
    state: useCarouselState;
    /**
     * Ref to the main carousel container DOM element.
     */
    carouselRef: React.RefObject<HTMLDivElement>;
    /**
     * Adds a reference to a slide element.
     * @param item The slide element to add.
     * @returns void
     */
    addSlideRef: (item: React.ReactNode) => void;
    /**
     * Scrolls the carousel to a specific slide index.
     * @param index The index of the slide to scroll to.
     * @param offset Optional offset to apply when scrolling.
     * @returns void
     */
    slideTo: (index?: number, offset?: number) => void;
    /**
     * Handles pointer release events.
     * @returns void
     */
    handlePointerUp: (event: React.PointerEvent) => void;
    /**
     * Handles pointer down events.
     * @returns void
     */
    handlePointerDown: (event: React.PointerEvent) => void;
    /**
     * Handles pointer move events.
     * @returns void
     */
    handlePointerMove: (event: React.PointerEvent) => void;
    /**
     * Handles previous button click events.
     * @returns void
     */
    handlePrev: (event: React.PointerEvent) => void;
    /**
     * Handles next button click events.
     * @returns void
     */
    handleNext: (event: React.PointerEvent) => void;
    /**
     * Handles carousel container click events.
     * @returns void
     */
    handleClick: (event: React.PointerEvent) => void;
}

/**
 * Instance of useCarousel headless.
 */
export type useCarouselInstance = HeadlessInstance<useCarouselProps, useCarouselState, useCarouselExposes>;
