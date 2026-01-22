/**
 *
 * CollapsibleTrigger is a component that displays a trigger element for a collapsible section.
 *
 * [Live Demo](https://www.primereact.org/collapsible/)
 *
 * @module CollapsibleTrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CollapsibleRootInstance } from './CollapsibleRoot.types';

/**
 * Defines passthrough(pt) options type in CollapsibleTrigger component.
 */
export type CollapsibleTriggerPassThroughType<E> = PassThroughType<CollapsibleTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of CollapsibleTrigger component.
 */
export interface CollapsibleTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CollapsibleTriggerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in CollapsibleTrigger component.
 */
export interface CollapsibleTriggerProps extends BaseComponentProps<CollapsibleTriggerInstance, unknown, CollapsibleTriggerPassThrough> {}

/**
 * Defines valid state in CollapsibleTrigger component.
 */
export interface CollapsibleTriggerState {}

/**
 * Defines the methods and properties exposed by CollapsibleTrigger component.
 */
export interface CollapsibleTriggerExposes {
    /**
     * The Collapsible component instance.
     */
    collapsible: CollapsibleRootInstance | undefined | null;
}

/**
 * Instance of CollapsibleTrigger component.
 */
export type CollapsibleTriggerInstance = ComponentInstance<CollapsibleTriggerProps, CollapsibleTriggerState, CollapsibleTriggerExposes>;
