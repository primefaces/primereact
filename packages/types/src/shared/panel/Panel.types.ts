/**
 *
 * Panel is a grouping component providing with content toggle feature.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePanelExposes, usePanelProps, usePanelState, usePanelToggleEvent } from './usePanel.types';

/**
 * Defines passthrough(pt) options type in Panel component.
 */
export type PanelPassThroughType<E> = PassThroughType<PanelInstance, E>;

/**
 * Defines passthrough(pt) options of Panel component.
 */
export interface PanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header actions's DOM element.
     */
    headerActions?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the collapse's DOM element.
     */
    collapse?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: PanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the panel's toggle state changes.
 * @extends usePanelToggleEvent
 */
export interface PanelToggleEvent extends usePanelToggleEvent {}

/**
 * Defines valid properties in Panel component.
 */
export interface PanelProps extends BaseComponentProps<PanelInstance, Omit<usePanelProps, 'onToggle'>> {
    /**
     * When enabled, the content of panel can be expanded and collapsed by clicking the header.
     * @default false
     */
    toggleable?: boolean | undefined;
    /**
     * Callback fired when the panel's toggle state changes.
     * @param event.originalEvent The original event that triggered the toggle.
     * @param event.value The new value of the panel's toggle state.
     * @returns void
     */
    onToggle?: ((event: PanelToggleEvent) => void) | undefined;
}

/**
 * Defines valid state in Panel component.
 * @extends usePanelState
 */
export interface PanelState extends usePanelState {}

/**
 * Defines the methods and properties exposed by Panel component.
 * @extends usePanelExposes
 */
export interface PanelExposes extends usePanelExposes {}

/**
 * Defines the CSS class names used in the Panel component.
 */
export const PanelClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-panel',
    /**
     * Class name of the header element
     */
    header: 'p-panel-header',
    /**
     * Class name of the title element
     */
    title: 'p-panel-title',
    /**
     * Class name of the header actions element
     */
    headerActions: 'p-panel-header-actions',
    /**
     * Class name of the toggle button element
     */
    pcToggleButton: 'p-panel-toggle-button',
    /**
     * Class name of the content element
     */
    content: 'p-panel-content'
    /**
     * Class name of the footer element
     */
} as const;

/**
 * Type representing the CSS class names used in the Panel component.
 */
export type PanelClassNamesType = (typeof PanelClassNames)[keyof typeof PanelClassNames];

/**
 * Instance of Panel component.
 */
export type PanelInstance = ComponentInstance<PanelProps, PanelState, PanelExposes, PanelPassThrough>;
