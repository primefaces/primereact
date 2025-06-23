/**
 *
 * ToolbarEnd is a container component that displays content at the end  of a Toolbar.
 *
 * [Live Demo](https://www.primereact.org/toolbar/)
 *
 * @module toolbarend
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToolbarInstance } from './Toolbar.types';

/**
 * Defines passthrough(pt) options type in ToolbarEnd component.
 */
export type ToolbarEndPassThroughType<E> = PassThroughType<ToolbarEndInstance, E>;

/**
 * Defines passthrough(pt) options of ToolbarEnd component.
 */
export interface ToolbarEndPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToolbarEndPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToolbarEnd component.
 */
export interface ToolbarEndProps extends BaseComponentProps<ToolbarEndInstance, unknown, ToolbarEndPassThrough> {}

/**
 * Defines valid state in ToolbarEnd component.
 */
export interface ToolbarEndState {}

/**
 * Defines the methods and properties exposed by ToolbarEnd component.
 */
export interface ToolbarEndExposes {
    /**
     * The Toolbar component instance.
     */
    toolbar: ToolbarInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the ToolbarEnd component.
 */
export const ToolbarEndClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toolbar-end'
} as const;

/**
 * Type representing the CSS class names used in the ToolbarEnd component.
 */
export type ToolbarEndClassNamesType = (typeof ToolbarEndClassNames)[keyof typeof ToolbarEndClassNames];

/**
 * Instance of ToolbarEnd component.
 */
export type ToolbarEndInstance = ComponentInstance<ToolbarEndProps, ToolbarEndState, ToolbarEndExposes>;
