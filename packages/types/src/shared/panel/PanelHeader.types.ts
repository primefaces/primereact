/**
 *
 * PanelHeader is a component that displays a header.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in PanelHeadercomponent.
 */
export type PanelHeaderPassThroughOptionType<E> = PassThroughOptionType<PanelHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of PanelHeadercomponent.
 */
export interface PanelHeaderPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelHeaderPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelHeadercomponent.
 */
export interface PanelHeaderProps extends BaseComponentProps {}

/**
 * Defines valid state in PanelHeadercomponent.
 */
export interface PanelHeaderState {}

/**
 * Defines the methods and properties exposed by PanelHeadercomponent.
 */
export interface PanelHeaderExposes {}

/**
 * Instance of PanelHeadercomponent.
 */
export type PanelHeaderInstance = ComponentInstance<PanelHeaderProps, PanelHeaderState, PanelHeaderExposes>;
