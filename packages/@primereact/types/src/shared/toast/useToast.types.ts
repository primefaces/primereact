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
import type { ToastId, ToastType } from './ToastManager.types';

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
     * Maximum number of toasts to be visible
     * @default 3
     */
    limit?: number;
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
     * Group identifier for toast grouping
     */
    group?: string;
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
    /**
     * Cached heights of rendered toasts for stacking calculations
     */
    heights: Array<{ toastId: ToastId; height: number }>;
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
     * Handler for mouse move on the toast region
     */
    onRegionMouseMove: () => void;
    /**
     * Handler for mouse leave on the toast region
     */
    onRegionMouseLeave: () => void;
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
     * Handler for focus events within the toast region
     */
    onRegionFocus: (event: React.FocusEvent<HTMLElement>) => void;
    /**
     * Handler for blur events leaving the toast region
     */
    onRegionBlur: (event: React.FocusEvent<HTMLElement>) => void;
    /**
     * Function to update the heights state
     */
    setHeights: React.Dispatch<React.SetStateAction<Array<{ height: number; toastId: ToastId }>>>;
    /**
     * Handler for managing focus when a toast is dismissed
     */
    handleFocusManagement: (toastElement: HTMLElement | null) => void;
}

/**
 * Instance of useToast headless.
 */
export type useToastInstance = HeadlessInstance<useToastProps, useToastState, useToastExposes>;
