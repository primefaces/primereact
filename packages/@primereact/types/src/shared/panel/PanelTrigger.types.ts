/**
 *
 * PanelTrigger is a component that displays a trigger.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panelTrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PanelRootInstance } from './PanelRoot.types';

/**
 * Defines passthrough(pt) options type in PanelTrigger component.
 */
export type PanelTriggerPassThroughType<E> = PassThroughType<PanelTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of PanelTrigger component.
 */
export interface PanelTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelTriggerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PanelTrigger component.
 */
export interface PanelTriggerProps extends BaseComponentProps<PanelTriggerInstance, unknown, PanelTriggerPassThrough> {}

/**
 * Defines valid state in PanelTrigger component.
 */
export interface PanelTriggerState {}

/**
 * Defines the methods and properties exposed by PanelTrigger component.
 */
export interface PanelTriggerExposes {
    /**
     * The panel instance that the trigger belongs to.
     */
    panel?: PanelRootInstance | undefined;
}

/**
 * Instance of PanelTrigger component.
 */
export type PanelTriggerInstance = ComponentInstance<PanelTriggerProps, PanelTriggerState, PanelTriggerExposes>;
