/**
 *
 * The useToast manages the state and functionality of a toast component.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module useToast
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { ToastType, ToastVariant } from './ToastManager.types';

/**
 * Toast position type
 */
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

/**
 * Toast swipe direction type
 */
export type ToastSwipeDirection = 'left' | 'right' | 'up' | 'down';

/**
 * Defines valid properties in useToast.
 */
export interface useToastProps {
    /**
     * Position of the toast container
     * @default 'top-right'
     */
    position?: ToastPosition;
    /**
     * Whether to expand the toast on hover
     * @default false
     */
    expand?: boolean;
    /**
     * Duration in milliseconds for toast auto-dismiss
     * @default 6000
     */
    duration?: number;
    /**
     * Gap between toasts in pixels
     * @default 14
     */
    gap?: number;
    /**
     * Timeout for toast auto-dismiss (alias for duration)
     * @default 6000
     */
    timeout?: number;
    /**
     * Allowed swipe directions for dismissing toasts
     * @default ['right']
     */
    swipeDirection?: ToastSwipeDirection[];
    /**
     * Custom icons for each toast variant
     */
    icons?: Partial<Record<ToastVariant, React.ReactNode>>;
    /**
     * Group identifier for toast grouping
     */
    group?: string;
    /**
     * Whether to show rich colors
     * @default false
     */
    richColors?: boolean;
}

/**
 * Defines valid state in useToast.
 */
export interface useToastState {
    /**
     * Whether the toast container is expanded (showing all toasts)
     */
    isExpanded: boolean;
    /**
     * Whether user is currently interacting with toasts
     */
    isInteracting: boolean;
}

/**
 * Defines the methods and properties exposed by useToast.
 */
export interface useToastExposes {
    /**
     * Array of filtered toasts for the current group
     */
    toasts: ToastType[];
    /**
     * Handler for mouse enter on the toast region
     */
    onRegionMouseEnter: () => void;
    /**
     * Handler for mouse leave on the toast region
     */
    onRegionMouseLeave: () => void;
    /**
     * Handler for mouse move on the toast region
     */
    onRegionMouseMove: () => void;
    /**
     * Handler for drag end on the toast region
     */
    onRegionDragEnd: () => void;
    /**
     * Handler for pointer down on the toast region
     */
    onRegionPointerDown: (event: React.PointerEvent) => void;
    /**
     * Handler for pointer up on the toast region
     */
    onRegionPointerUp: () => void;
    /**
     * Function to update the toasts state
     */
    setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
    /**
     * Handler for managing focus when a toast is dismissed
     */
    handleFocusElement: (toastElement: HTMLElement | null) => void;
    /**
     * Handler for storing focus when a toast receives focus
     */
    handleToastFocus: () => void;
}

/**
 * Instance of useToast headless.
 */
export type useToastInstance = HeadlessInstance<useToastProps, useToastState, useToastExposes>;
