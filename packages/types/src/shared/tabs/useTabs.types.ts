/**
 *
 * The useTabs manages the state and functionality of a tabs component.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module usetabs
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the tabs's checked state changes.
 */
export interface useTabsChangeEvent {
    /**
     * The value of the tabs.
     */
    value: string | number | undefined;
}

/**
 * Defines valid properties in useTabs.
 */
export interface useTabsProps {
    /**
     * Value of the active tab or an array of values in multiple mode.
     * @default null
     */
    value?: string | number | undefined;
    /**
     * Callback fired when the tabs's value changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the tabs.
     * @returns void
     */
    onValueChange?: (event: useTabsChangeEvent) => void;
}

/**
 * Defines valid state in useTabs.
 */
export interface useTabsState {
    /**
     * Value of the active tab or an array of values in multiple mode.
     */
    activeTab: string | number | undefined;
}

/**
 * Defines the methods and properties exposed by useTabs.
 */
export interface useTabsExposes {
    /**
     * The method to update the value of the active tab.
     * @param value The value of the active tab.
     * @returns void
     */
    updateValue: (value: string | number | undefined) => void;
    /**
     * The method to check if the tab is active.
     * @param key The key of the tab.
     * @returns boolean
     */
    isItemActive: (key: null | undefined | string | number) => boolean;
}

/**
 * Instance of useTabs headless.
 */
export type useTabsInstance = HeadlessInstance<useTabsProps, useTabsState, useTabsExposes>;
