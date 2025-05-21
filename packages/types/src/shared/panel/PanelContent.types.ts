/**
 *
 * PanelContent is a component that displays a content.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in PanelContent component.
 */
export type PanelContentPassThroughOptionType<E> = PassThroughOptionType<PanelContentInstance, E>;

/**
 * Defines passthrough(pt) options of PanelContent component.
 */
export interface PanelContentPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelContentPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelContent component.
 */
export interface PanelContentProps extends BaseComponentProps {}

/**
 * Defines valid state in PanelContent component.
 */
export interface PanelContentState {}

/**
 * Defines the methods and properties exposed by PanelContent component.
 */
export interface PanelContentExposes {}

/**
 * Instance of PanelContent component.
 */
export type PanelContentInstance = ComponentInstance<PanelContentProps, PanelContentState, PanelContentExposes>;
