/**
 *
 * SelectClearIcon is the clear button for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectclearicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectClearIcon component.
 */
export type SelectClearIconPassThroughType<E> = PassThroughType<SelectClearIconInstance, E>;

/**
 * Defines passthrough(pt) options of SelectClearIcon component.
 */
export interface SelectClearIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectClearIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in SelectClearIcon component.
 */
export interface SelectClearIconProps extends BaseComponentProps<SelectClearIconInstance, unknown, SelectClearIconPassThrough> {}

/**
 * Defines valid state in SelectClearIcon component.
 */
export interface SelectClearIconState {}

/**
 * Defines the methods and properties exposed by SelectClearIcon component.
 */
export interface SelectClearIconExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectClearIcon component.
 */
export type SelectClearIconInstance = ComponentInstance<SelectClearIconProps, SelectClearIconState, SelectClearIconExposes>;
