/**
 *
 * SelectTrigger is the dropdown trigger button for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selecttrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectTrigger component.
 */
export type SelectTriggerPassThroughType<E> = PassThroughType<SelectTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of SelectTrigger component.
 */
export interface SelectTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in SelectTrigger component.
 */
export interface SelectTriggerProps extends BaseComponentProps<SelectTriggerInstance, unknown, SelectTriggerPassThrough> {}

/**
 * Defines valid state in SelectTrigger component.
 */
export interface SelectTriggerState {}

/**
 * Defines the methods and properties exposed by SelectTrigger component.
 */
export interface SelectTriggerExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectTrigger component.
 */
export type SelectTriggerInstance = ComponentInstance<SelectTriggerProps, SelectTriggerState, SelectTriggerExposes>;
