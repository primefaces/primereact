/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primereact.org/toolbar/)
 *
 * @module toolbarroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useToolbarExposes, useToolbarProps, useToolbarState } from './useToolbar.types';

/**
 * Defines passthrough(pt) options type in Toolbar component.
 */
export type ToolbarRootPassThroughType<E> = PassThroughType<ToolbarRootInstance, E>;

/**
 * Defines passthrough(pt) options of Toolbar component.
 */
export interface ToolbarRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToolbarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the start's DOM element.
     */
    start?: ToolbarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the center's DOM element.
     */
    center?: ToolbarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the end's DOM element.
     */
    end?: ToolbarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toolbar component.
 */
export interface ToolbarRootProps extends BaseComponentProps<ToolbarRootInstance, useToolbarProps, ToolbarRootPassThrough> {}

/**
 * Defines valid state in Toolbar component.
 * @extends useToolbarState
 */
export interface ToolbarRootState extends useToolbarState {}

/**
 * Defines the methods and properties exposed by Toolbar component.
 * @extends useToolbarExposes
 */
export interface ToolbarRootExposes extends useToolbarExposes {}

/**
 * Instance of Toolbar component.
 */
export type ToolbarRootInstance = ComponentInstance<ToolbarRootProps, ToolbarRootState, ToolbarRootExposes>;
