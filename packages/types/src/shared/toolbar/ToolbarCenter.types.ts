/**
 *
 * ToolbarCenter is a container component that displays content at the center  of a Toolbar.
 *
 * [Live Demo](https://www.primereact.org/toolbar/)
 *
 * @module toolbarcenter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToolbarInstance } from './Toolbar.types';

/**
 * Defines passthrough(pt) options type in ToolbarCenter component.
 */
export type ToolbarCenterPassThroughType<E> = PassThroughType<ToolbarCenterInstance, E>;

/**
 * Defines passthrough(pt) options of ToolbarCenter component.
 */
export interface ToolbarCenterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToolbarCenterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToolbarCenter component.
 */
export interface ToolbarCenterProps extends BaseComponentProps<ToolbarCenterInstance> {}

/**
 * Defines valid state in ToolbarCenter component.
 */
export interface ToolbarCenterState {}

/**
 * Defines the methods and properties exposed by ToolbarCenter component.
 */
export interface ToolbarCenterExposes {
    /**
     * The Toolbar component instance.
     */
    toolbar: ToolbarInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the ToolbarCenter component.
 */
export const ToolbarCenterClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toolbar-center'
} as const;

/**
 * Type representing the CSS class names used in the ToolbarCenter component.
 */
export type ToolbarCenterClassNamesType = (typeof ToolbarCenterClassNames)[keyof typeof ToolbarCenterClassNames];

/**
 * Instance of ToolbarCenter component.
 */
export type ToolbarCenterInstance = ComponentInstance<ToolbarCenterProps, ToolbarCenterState, ToolbarCenterExposes, ToolbarCenterPassThrough>;
