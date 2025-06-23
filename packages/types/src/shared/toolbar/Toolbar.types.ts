/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primereact.org/toolbar/)
 *
 * @module toolbar
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useToolbarExposes, useToolbarProps, useToolbarState } from './useToolbar.types';

/**
 * Defines passthrough(pt) options type in Toolbar component.
 */
export type ToolbarPassThroughType<E> = PassThroughType<ToolbarInstance, E>;

/**
 * Defines passthrough(pt) options of Toolbar component.
 */
export interface ToolbarPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToolbarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the start's DOM element.
     */
    start?: ToolbarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the center's DOM element.
     */
    center?: ToolbarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the end's DOM element.
     */
    end?: ToolbarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toolbar component.
 */
export interface ToolbarProps extends BaseComponentProps<ToolbarInstance, useToolbarProps, ToolbarPassThrough> {}

/**
 * Defines valid state in Toolbar component.
 * @extends useToolbarState
 */
export interface ToolbarState extends useToolbarState {}

/**
 * Defines the methods and properties exposed by Toolbar component.
 * @extends useToolbarExposes
 */
export interface ToolbarExposes extends useToolbarExposes {}

/**
 * Defines the CSS class names used in the Toolbar component.
 */
export const ToolbarClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toolbar',
    /**
     * Class name of the start element
     */
    start: 'p-toolbar-start',
    /**
     * Class name of the center element
     */
    center: 'p-toolbar-center',
    /**
     * Class name of the end element
     */
    end: 'p-toolbar-end'
} as const;

/**
 * Type representing the CSS class names used in the Toolbar component.
 */
export type ToolbarClassNamesType = (typeof ToolbarClassNames)[keyof typeof ToolbarClassNames];

/**
 * Instance of Toolbar component.
 */
export type ToolbarInstance = ComponentInstance<ToolbarProps, ToolbarState, ToolbarExposes>;
