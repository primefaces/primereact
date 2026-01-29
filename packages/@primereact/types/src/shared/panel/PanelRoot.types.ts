/**
 *
 * Panel is a grouping component providing with content toggle feature.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePanelExposes, usePanelOpenChangeEvent, usePanelProps, usePanelState } from './usePanel.types';

/**
 * Defines passthrough(pt) options type in Panel component.
 */
export type PanelRootPassThroughType<E> = PassThroughType<PanelRootInstance, E>;

/**
 * Defines passthrough(pt) options of Panel component.
 */
export interface PanelRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header actions's DOM element.
     */
    headerActions?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the collapse's DOM element.
     */
    collapse?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: PanelRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the panel's toggle state changes.
 * @extends usePanelOpenChangeEvent
 */
export interface PanelRootToggleEvent extends usePanelOpenChangeEvent {}

/**
 * Defines valid properties in Panel component.
 */
export interface PanelRootProps extends BaseComponentProps<PanelRootInstance, Omit<usePanelProps, 'onToggle'>, PanelRootPassThrough> {
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
    onToggle?: ((event: PanelRootToggleEvent) => void) | undefined;
}

/**
 * Defines valid state in Panel component.
 * @extends usePanelState
 */
export interface PanelRootState extends usePanelState {}

/**
 * Defines the methods and properties exposed by Panel component.
 * @extends usePanelExposes
 */
export interface PanelRootExposes extends usePanelExposes {}

/**
 * Instance of Panel component.
 */
export type PanelRootInstance = ComponentInstance<PanelRootProps, PanelRootState, PanelRootExposes>;
