/**
 *
 * SelectIcon is the icon element for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selecticon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectIcon component.
 */
export type SelectIconPassThroughType<E> = PassThroughType<SelectIconInstance, E>;

/**
 * Defines passthrough(pt) options of SelectIcon component.
 */
export interface SelectIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectIconPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectIcon component.
 */
export interface SelectIconProps extends BaseComponentProps<SelectIconInstance, unknown, SelectIconPassThrough> {}

/**
 * Defines valid state in SelectIcon component.
 */
export interface SelectIconState {}

/**
 * Defines the methods and properties exposed by SelectIcon component.
 */
export interface SelectIconExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectIcon component.
 */
export type SelectIconInstance = ComponentInstance<SelectIconProps, SelectIconState, SelectIconExposes>;
