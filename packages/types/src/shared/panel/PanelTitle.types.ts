/**
 *
 * PanelTitle is a component that displays a title.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module paneltitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in PanelTitlecomponent.
 */
export type PanelTitlePassThroughType<E> = PassThroughType<PanelTitleInstance, E>;

/**
 * Defines passthrough(pt) options of PanelTitlecomponent.
 */
export interface PanelTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelTitlecomponent.
 */
export interface PanelTitleProps extends BaseComponentProps<PanelTitleInstance> {}

/**
 * Defines valid state in PanelTitlecomponent.
 */
export interface PanelTitleState {}

/**
 * Defines the methods and properties exposed by PanelTitlecomponent.
 */
export interface PanelTitleExposes {}

/**
 * Instance of PanelTitlecomponent.
 */
export type PanelTitleInstance = ComponentInstance<PanelTitleProps, PanelTitleState, PanelTitleExposes, PanelTitlePassThrough>;
