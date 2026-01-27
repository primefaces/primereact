/**
 *
 * FieldsetTrigger is a component that displays a trigger.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldsetTrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { FieldsetRootInstance } from './FieldsetRoot.types';

/**
 * Defines passthrough(pt) options type in FieldsetTrigger component.
 */
export type FieldsetTriggerPassThroughType<E> = PassThroughType<FieldsetTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of FieldsetTrigger component.
 */
export interface FieldsetTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetTriggerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FieldsetTrigger component.
 */
export interface FieldsetTriggerProps extends BaseComponentProps<FieldsetTriggerInstance, unknown, FieldsetTriggerPassThrough> {}

/**
 * Defines valid state in FieldsetTrigger component.
 */
export interface FieldsetTriggerState {}

/**
 * Defines the methods and properties exposed by FieldsetTrigger component.
 */
export interface FieldsetTriggerExposes {
    /**
     * The fieldset instance that the trigger belongs to.
     */
    fieldset?: FieldsetRootInstance | undefined;
}

/**
 * Instance of FieldsetTrigger component.
 */
export type FieldsetTriggerInstance = ComponentInstance<FieldsetTriggerProps, FieldsetTriggerState, FieldsetTriggerExposes>;
