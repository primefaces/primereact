/**
 *
 * SelectValue displays the selected value or placeholder in the Select trigger.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectvalue
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectValue component.
 */
export type SelectValuePassThroughType<E> = PassThroughType<SelectValueInstance, E>;

/**
 * Defines passthrough(pt) options of SelectValue component.
 */
export interface SelectValuePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectValuePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in SelectValue component.
 */
export interface SelectValueProps extends BaseComponentProps<SelectValueInstance, unknown, SelectValuePassThrough> {
    /**
     * Placeholder text to display when no option is selected.
     */
    placeholder?: string;
}

/**
 * Defines valid state in SelectValue component.
 */
export interface SelectValueState {}

/**
 * Defines the methods and properties exposed by SelectValue component.
 */
export interface SelectValueExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectValue component.
 */
export type SelectValueInstance = ComponentInstance<SelectValueProps, SelectValueState, SelectValueExposes>;
