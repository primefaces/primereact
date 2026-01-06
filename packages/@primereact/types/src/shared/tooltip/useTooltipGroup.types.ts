/**
 *
 * The useTooltipGroup manages the state and functionality of a tooltip group component.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module usetooltipgroup
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useTooltipGroup.
 */
export interface useTooltipGroupProps {
    /**
     * The delay time to keep group active when switching between tooltips.
     * @default 700
     */
    timeout?: number;
    /**
     * The delay time to skip the timeout when switching between tooltips.
     * @default 300
     */
    skipTimeout?: number;
}

export type TimeoutState = 'instant' | 'normal' | 'delayed';
/**
 * Defines valid state in useTooltipGroup.
 */
export interface useTooltipGroupState {
    /**
     * The current state of the timeout.
     */
    timeoutState: TimeoutState;
    /**
     * The previous tooltip.
     */
    prevTooltip: HTMLElement | null | undefined;
}

/**
 * Defines the methods and properties exposed by useTooltipGroup.
 */
export interface useTooltipGroupExposes {
    /**
     * Current state of the tooltip group.
     */
    state: useTooltipGroupState;
    /**
     * Schedules a timeout for the group.
     */
    scheduleTimeout: (callback?: () => void, currentTooltip?: HTMLElement) => void;
    /**
     * Clears the active timers.
     */
    clearTimers: () => void;
}

/**
 * Instance of useTooltipGroup headless.
 */
export type useTooltipGroupInstance = HeadlessInstance<useTooltipGroupProps, useTooltipGroupState, useTooltipGroupExposes>;
