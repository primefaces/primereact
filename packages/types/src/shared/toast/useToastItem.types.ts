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
    data: ToastType;
}

/**
 * Defines valid state in useToastItem.
 */
export interface useToastItemState {
    /**
     * Whether the toast item is mounted in the DOM
     */
    isMounted: boolean;
    /**
     * Whether the toast item is being swiped
     */
    isSwiping: boolean;
    /**
     * Whether the toast item is swiped out (dismissed)
     */
    isSwipeOut: boolean;
    /**
     * Direction of swipe out animation
     */
    swipeOutDirection: ToastItemSwipeDirection | null;
    /**
     * Direction of swipe
     */
    swipeDirection: ToastItemSwipeAxis | null;
    /**
     * Real height of the toast item
     */
    realHeight: number;
}

/**
 * Defines the methods and properties exposed by useToastItem.
 */
export interface useToastItemExposes {
    /**
     * Current state of the toast item
     */
    state: useToastItemState;
    /**
     * Vertical offset for stacking toasts
     */
    offset: number;
    /**
     * Index of the toast in the stack
     */
    index: number;
    /**
     * Function to delete/remove the toast
     */
    deleteToast: () => void;
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
