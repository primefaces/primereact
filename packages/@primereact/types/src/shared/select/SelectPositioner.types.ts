/**
 *
 * SelectPositioner is a component that positions the select dropdown relative to its trigger.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectpositioner
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { usePositionerProps } from '../positioner';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectPositioner component.
 */
export type SelectPositionerPassThroughType<E> = PassThroughType<SelectPositionerInstance, E>;

/**
 * Defines passthrough(pt) options of SelectPositioner component.
 */
export interface SelectPositionerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectPositionerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectPositioner component.
 */
export interface SelectPositionerProps extends BaseComponentProps<SelectPositionerInstance, usePositionerProps, SelectPositionerPassThrough> {}

/**
 * Defines valid state in SelectPositioner component.
 */
export interface SelectPositionerState {}

/**
 * Defines the methods and properties exposed by SelectPositioner component.
 */
export interface SelectPositionerExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectPositioner component.
 */
export type SelectPositionerInstance = ComponentInstance<SelectPositionerProps, SelectPositionerState, SelectPositionerExposes>;
