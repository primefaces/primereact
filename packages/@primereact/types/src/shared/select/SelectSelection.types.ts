/**
 *
 * SelectSelection is the selection display component for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectselection
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectSelection component.
 */
export type SelectSelectionPassThroughType<E> = PassThroughType<SelectSelectionInstance, E>;

/**
 * Defines passthrough(pt) options of SelectSelection component.
 */
export interface SelectSelectionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectSelectionPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in SelectSelection component.
 */
export interface SelectSelectionProps extends BaseComponentProps<SelectSelectionInstance, unknown, SelectSelectionPassThrough> {}

/**
 * Defines valid state in SelectSelection component.
 */
export interface SelectSelectionState {}

/**
 * Defines the methods and properties exposed by SelectSelection component.
 */
export interface SelectSelectionExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
    /**
     * The Listbox component instance.
     */
    listbox: ListboxRootInstance | undefined | null;
}

/**
 * Instance of SelectSelection component.
 */
export type SelectSelectionInstance = ComponentInstance<SelectSelectionProps, SelectSelectionState, SelectSelectionExposes>;
