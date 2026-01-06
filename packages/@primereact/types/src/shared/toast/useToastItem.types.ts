/**
 *
 * The useToastItem manages the state and functionality of a toast item component.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module useToastItem
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { ToastType } from './ToastManager.types';

/**
 * Swipe direction type for toast item
 */
export type ToastItemSwipeDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Swipe axis type for toast item
 */
export type ToastItemSwipeAxis = 'x' | 'y';

/**
 * Defines valid properties in useToastItem.
 */
export interface useToastItemProps {
    /**
     * Toast data containing all toast information
     */
    toast: ToastType;
}

/**
 * Defines valid state in useToastItem.
 */
export interface useToastItemState {
    /**
     * Indicates whether the toast item is mounted
     */
    mounted: boolean;
    /**
     * Indicates whether the user is swiping the toast
     */
    swiping: boolean;
    /**
     * Indicates whether the toast has been swiped out (dismissed)
     */
    swipeOut: boolean;
    /**
     * Direction of swipe out animation
     */
    swipeOutDirection: ToastItemSwipeDirection | null;
    /**
     * Direction of swipe interaction
     */
    swipeDirection: ToastItemSwipeAxis | null;
    /**
     * Measured height of the toast content
     */
    initialHeight: number;
    /**
     * Whether the toast has been removed from the stack
     */
    removed: boolean;
    /**
     * Whether the toast has been swiped (even if not dismissed)
     */
    isSwiped: boolean;
    /**
     * Offset that should be preserved while the toast exits
     */
    offsetBeforeRemove: number;
}

/**
 * Defines the methods and properties exposed by useToastItem.
 */
export interface useToastItemExposes {
    /**
     * Vertical offset for stacking toasts
     */
    offset: number;
    /**
     * Offset snapshot used during removal transitions
     */
    offsetBeforeRemove: number;
    /**
     * Index of the toast in the stack
     */
    index: number;
    /**
     * Index among currently visible toasts
     */
    visibleIndex: number;
    /**
     * Whether the toast is currently visible considering the limit
     */
    isVisible: boolean;
    /**
     * Whether the toast is in the front-most position
     */
    isFront: boolean;
    /**
     * Handler for pointer down events (swipe start)
     */
    onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Handler for pointer move events (swipe progress)
     */
    onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Handler for pointer up events (swipe end)
     */
    onPointerUp: () => void;
    /**
     * Handler for drag end events
     */
    onDragEnd: () => void;
    /**
     * Handler for close button click
     */
    handleCloseOnClick: () => void;
}

/**
 * Instance of useToastItem headless.
 */
export type useToastItemInstance = HeadlessInstance<useToastItemProps, useToastItemState, useToastItemExposes>;
