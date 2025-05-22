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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { usePanelExposes, usePanelProps, usePanelState } from './usePanel.types';

/**
 * Defines passthrough(pt) options type in Panel component.
 */
export type PanelPassThroughOptionType<E> = PassThroughOptionType<PanelInstance, E>;

/**
 * Defines passthrough(pt) options of Panel component.
 */
export interface PanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Panel component.
 */
export interface PanelProps extends BaseComponentProps<PanelInstance, usePanelProps> {
    /**
     * When enabled, the content of panel can be expanded and collapsed by clicking the header.
     * @default false
     */
    toggleable?: boolean | undefined;
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
export type PanelInstance = ComponentInstance<PanelProps, PanelState, PanelExposes>;
