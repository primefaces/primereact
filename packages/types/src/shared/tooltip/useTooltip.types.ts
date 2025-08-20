/**
 *
 * The useTooltip manages the state and functionality of a tooltip component.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module usetooltip
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { usePlacerInstance } from '@primereact/types/shared/placer';

/**
 * Defines valid properties in useTooltip.
 */
export interface useTooltipProps {
    /**
     * Show delay duration in milliseconds.
     * @default 400
     */
    showDelayDuration?: number;
    /**
     * Hide delay duration in milliseconds.
     * @default 0
     */
    hideDelayDuration?: number;
    /**
     * Whether to hide tooltip when hovering over tooltip content.
     * @default false
     */
    autoHide?: boolean | undefined;
    /**
     * Whether to automatically manage z-index.
     * @default true
     */
    autoZIndex?: boolean;
    /**
     * Base z-index value to use in auto mode.
     * @default 0
     */
    baseZIndex?: number;
    /**
     * Reference to container element.
     */
    containerRef?: React.RefObject<HTMLElement>;
    /**
     * Reference to trigger element.
     */
    triggerRef?: React.RefObject<HTMLElement>;
    /**
     * Reference to arrow element.
     */
    arrowRef?: React.RefObject<HTMLElement>;
    /**
     * Controls the open state of the tooltip.
     */
    open?: boolean;
    /**
     * Callback fired when the open state changes.
     */
    onOpenChange?: (event: { value: boolean }) => void;
    /**
     * Whether the tooltip is open by default.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Whether to close on escape key press.
     * @default true
     */
    closeOnEscape?: boolean;
    /**
     * The preferred side of the trigger to render against.
     * @default 'top'
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * The distance in pixels from the trigger.
     * @default 2
     */
    sideOffset?: number;
    /**
     * The preferred alignment against the trigger.
     * @default 'center'
     */
    align?: 'start' | 'center' | 'end';
    /**
     * An offset in pixels from the alignment.
     * @default 0
     */
    alignOffset?: number;
    /**
     * Whether the tooltip is disabled.
     * @default false
     */
    disabled?: boolean;
}

/**
 * Defines valid state in useTooltip.
 */
export interface useTooltipState {
    /**
     * Whether the tooltip is visible.
     */
    visible: boolean;
    /**
     * Whether the tooltip is alive.
     */
    life: boolean;
    /**
     * Whether to animate on enter.
     */
    shouldAnimateOnEnter: boolean;
    /**
     * Whether to animate on leave.
     */
    shouldAnimateOnLeave: boolean;
}

/**
 * Defines the methods and properties exposed by useTooltip.
 */
export interface useTooltipExposes {
    /**
     * Current state of the tooltip.
     */
    state: useTooltipState;
    /**
     * Placer instance.
     */
    placer: usePlacerInstance;
    /**
     * Show the tooltip.
     */
    show: (forceInstant?: boolean) => void;
    /**
     * Hide the tooltip.
     */
    hide: (forceInstant?: boolean) => void;
    /**
     * Callback fired before enter animation.
     */
    onBeforeEnter: () => void;
    /**
     * Callback fired on leave.
     */
    onLeave: () => void;
}

/**
 * Instance of useTooltip headless.
 */
export type useTooltipInstance = HeadlessInstance<useTooltipProps, useTooltipState, useTooltipExposes>;
