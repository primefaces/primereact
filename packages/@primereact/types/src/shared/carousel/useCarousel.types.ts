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
    value?: string | number;
}

/**
 * Defines valid properties in useCarousel.
 */
export interface useCarouselProps {
    /**
     * Whether the carousel should auto size.
     * @default false
     */
    autoSize?: boolean;
    /**
     *Orientation of the carousel.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     *Alignment of the carousel items.
     * @default 'center'
     */
    align?: 'start' | 'center' | 'end';
    /**
     *Whether the carousel should loop.
     * @default false
     */
    loop?: boolean;
    /**
     * Scroll snap type applied to the track.
     * @default 'mandatory'
     */
    snapType?: 'mandatory' | 'proximity';
    /**
     * Spacing between carousel items.
     * @default 16
     */
    spacing?: number;
    /**
     * How many slides are visible per page. Supports fractions (e.g. 1.5).
     * @default 1
     */
    slidesPerPage?: number;
    /**
     * Index of the active slide.
     * @default undefined
     */
    page?: number;
    /**
     * Index of the active slide.
     * @default undefined
     */
    slide?: number;
    /**
     * Default index of the active slide.
     * @default 0
     */
    defaultPage?: number;
    /**
     * Callback fired when the carousel's page changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the active page.
     * @returns void
     */
    onPageChange?: (event: useCarouselChangeEvent) => void;
    /**
     * Callback fired when the active slide (by value) changes.
     * @param event The event that triggered the change.
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
     * Whether the "previous" navigation button should be disabled.
     */
    isPrevDisabled: boolean;
    /**
     * Whether the "next" navigation button should be disabled.
     */
    isNextDisabled: boolean;
    /**
     * The snap points of the carousel.
     */
    snapPoints: Set<number>;
    /**
     * The current page of the carousel.
     */
    page: number;
    /**
     * Whether the user is currently swiping the carousel by touch.
     */
    swiping: boolean;
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
     * Styles applied to the content element.
     */
    contentStyles: React.CSSProperties;
    /**
     * Styles applied to the item elements.
     */
    itemStyles: React.CSSProperties;
    /**
     * Ref to the content element.
     * @returns React.RefObject<HTMLDivElement | null>
     */
    contentRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Navigates to the previous slide.
     * @returns void
     */
    prev: () => void;
    /**
     * Navigates to the next slide.
     * @returns void
     */
    next: () => void;
    /**
     * Scrolls to the specified value.
     * @param value The index of the slide to scroll to.
     * @returns void
     */
    scrollTo: (value: number) => void;
    /**
     * Scrolls to the specified page.
     * @param value The index of the page to scroll to.
     * @returns void
     */
    scrollToPage: (page: number) => void;
    /**
     * Scrolls to the specified slide value.
     * @param page The page index to scroll to.
     * @returns void
     */
    scrollToSlide: (slide: number) => void;
    /**
     * Scrolls to the closest snap point.
     * @param page The slide index to scroll to.
     * @returns void
     */
    setToClosest: () => void;
    /**
     * Event handler for content pointer down.
     * @param event The event that triggered the pointer down.
     * @returns void
     */
    onContentPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Event handler for content pointer move.
     * @param event The event that triggered the pointer move.
     * @returns void
     */
    onContentPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Event handler for content pointer up.
     * @param event The event that triggered the pointer up.
     * @returns void
     */
    onContentPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Event handler for content wheel.
     * @param event The event that triggered the wheel.
     * @returns void
     */
    onContentWheel: (event: React.WheelEvent<HTMLDivElement>) => void;
}

/**
 * Instance of useCarousel headless.
 */
export type useCarouselInstance = HeadlessInstance<useCarouselProps, useCarouselState, useCarouselExposes>;
