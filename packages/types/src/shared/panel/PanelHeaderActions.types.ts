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
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in PanelHeaderActions component.
 */
export type PanelHeaderActionsPassThroughType<E> = PassThroughType<PanelHeaderActionsInstance, E>;

/**
 * Defines passthrough(pt) options of PanelHeaderActions component.
 */
export interface PanelHeaderActionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelHeaderActionsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelHeaderActions component.
 */
export interface PanelHeaderActionsProps extends BaseComponentProps<PanelHeaderActionsInstance> {}

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
export type PanelHeaderActionsInstance = ComponentInstance<PanelHeaderActionsProps, PanelHeaderActionsState, PanelHeaderActionsExposes, PanelHeaderActionsPassThrough>;
