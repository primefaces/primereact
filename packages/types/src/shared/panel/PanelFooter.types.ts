/**
 *
 * PanelFooter is a component that displays a footer.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in PanelFooter component.
 */
export type PanelFooterPassThroughType<E> = PassThroughType<PanelFooterInstance, E>;

/**
 * Defines passthrough(pt) options of PanelFooter component.
 */
export interface PanelFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelFooter component.
 */
export interface PanelFooterProps extends BaseComponentProps<PanelFooterInstance> {}

/**
 * Defines valid state in PanelFooter component.
 */
export interface PanelFooterState {}

/**
 * Defines the methods and properties exposed by PanelFooter component.
 */
export interface PanelFooterExposes {}

/**
 * Instance of PanelFooter component.
 */
export type PanelFooterInstance = ComponentInstance<PanelFooterProps, PanelFooterState, PanelFooterExposes, PanelFooterPassThrough>;
