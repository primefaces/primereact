/**
 *
 * The usePortal hook provides functionality to render content into a DOM node outside the component hierarchy.
 *
 * [Live Demo](https://www.primereact.org/)
 *
 * @module useportal
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in usePortal.
 */
export interface usePortalProps {
    /**
     * Whether the portal is visible or not.
     * @default false
     */
    visible?: boolean | undefined;
    /**
     * Callback function to invoke when the portal is mounted.
     */
    onMounted?: (() => void) | undefined;
    /**
     * Callback function to invoke when the portal is unmounted.
     */
    onUnmounted?: (() => void) | undefined;
}

/**
 * Defines valid state in usePortal.
 */
export interface usePortalState {
    /**
     * Current mount of the portal.
     */
    mountedState?: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by usePortal.
 */
export interface usePortalExposes {}

/**
 * Instance of usePortal headless.
 */
export type usePortalInstance = HeadlessInstance<usePortalProps, usePortalState, usePortalExposes>;
