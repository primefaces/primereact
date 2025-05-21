/**
 *
 * PanelHeaderActions is a component that displays a header actions.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelheaderactions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in PanelHeaderActions component.
 */
export type PanelHeaderActionsPassThroughOptionType<E> = PassThroughOptionType<PanelHeaderActionsInstance, E>;

/**
 * Defines passthrough(pt) options of PanelHeaderActions component.
 */
export interface PanelHeaderActionsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelHeaderActionsPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelHeaderActions component.
 */
export interface PanelHeaderActionsProps extends BaseComponentProps {}

/**
 * Defines valid state in PanelHeaderActions component.
 */
export interface PanelHeaderActionsState {}

/**
 * Defines the methods and properties exposed by PanelHeaderActions component.
 */
export interface PanelHeaderActionsExposes {}

/**
 * Instance of PanelHeaderActions component.
 */
export type PanelHeaderActionsInstance = ComponentInstance<PanelHeaderActionsProps, PanelHeaderActionsState, PanelHeaderActionsExposes>;
