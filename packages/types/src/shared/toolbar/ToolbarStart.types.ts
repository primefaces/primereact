/**
 *
 * ToolbarStart is a container component that displays content at the start  of a Toolbar.
 *
 * [Live Demo](https://www.primereact.org/toolbar/)
 *
 * @module toolbarstart
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToolbarInstance } from './Toolbar.types';

/**
 * Defines passthrough(pt) options type in ToolbarStart component.
 */
export type ToolbarStartPassThroughType<E> = PassThroughType<ToolbarStartInstance, E>;

/**
 * Defines passthrough(pt) options of ToolbarStart component.
 */
export interface ToolbarStartPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToolbarStartPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToolbarStart component.
 */
export interface ToolbarStartProps extends BaseComponentProps<ToolbarStartInstance, unknown, ToolbarStartPassThrough> {}

/**
 * Defines valid state in ToolbarStart component.
 */
export interface ToolbarStartState {}

/**
 * Defines the methods and properties exposed by ToolbarStart component.
 */
export interface ToolbarStartExposes {
    /**
     * The Toolbar component instance.
     */
    toolbar: ToolbarInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the ToolbarStart component.
 */
export const ToolbarStartClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toolbar-start'
} as const;

/**
 * Type representing the CSS class names used in the ToolbarStart component.
 */
export type ToolbarStartClassNamesType = (typeof ToolbarStartClassNames)[keyof typeof ToolbarStartClassNames];

/**
 * Instance of ToolbarStart component.
 */
export type ToolbarStartInstance = ComponentInstance<ToolbarStartProps, ToolbarStartState, ToolbarStartExposes>;
