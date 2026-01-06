/**
 *
 * ContextMenuTrigger is a component that displays  trigger.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenutrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuRootInstance } from '@primereact/types/shared/menu';
import type { ContextMenuRootInstance } from './ContextMenuRoot.types';

/**
 * Defines passthrough(pt) options type in ContextMenuTrigger component.
 */
export type ContextMenuTriggerPassThroughType<E> = PassThroughType<ContextMenuTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuTrigger component.
 */
export interface ContextMenuTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuTriggerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuTrigger component.
 */
export interface ContextMenuTriggerProps extends BaseComponentProps<ContextMenuTriggerInstance, unknown, ContextMenuTriggerPassThrough> {}

/**
 * Defines valid state in ContextMenuTrigger component.
 */
export interface ContextMenuTriggerState {}

/**
 * Defines the methods and properties exposed by ContextMenuTrigger component.
 */
export interface ContextMenuTriggerExposes {
    /**
     * The ContextMenu component instance.
     */
    contextmenu: ContextMenuRootInstance | undefined | null;
    /**
     * Instance of the Menu component.
     */
    menu: MenuRootInstance | undefined | null;
}

/**
 * Instance of ContextMenuTrigger component.
 */
export type ContextMenuTriggerInstance = ComponentInstance<ContextMenuTriggerProps, ContextMenuTriggerState, ContextMenuTriggerExposes>;
