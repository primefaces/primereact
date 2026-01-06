/**
 *
 * The useBreadcrumb manages the state and functionality of a breadcrumb component.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module usebreadcrumb
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useBreadcrumb.
 */
export interface useBreadcrumbProps {
    /**
     * Callback to invoke when an action is performed.
     * @param event
     * @returns void
     */
    onAction?: (key: string) => void;
}

/**
 * Defines valid state in useBreadcrumb.
 */
export interface useBreadcrumbState {}

/**
 * Defines the methods and properties exposed by useBreadcrumb.
 */
export interface useBreadcrumbExposes {
    /**
     * Callback to invoke when an action is performed.
     * @param event
     * @param key
     * @returns void
     */
    onAction: (event: React.MouseEvent, key: string) => void;
}

/**
 * Instance of useBreadcrumb headless.
 */
export type useBreadcrumbInstance = HeadlessInstance<useBreadcrumbProps, useBreadcrumbState, useBreadcrumbExposes>;
