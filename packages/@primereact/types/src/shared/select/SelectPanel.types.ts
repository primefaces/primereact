/**
 *
 * SelectPanel is the panel container that wraps the dropdown content inside the positioner.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectpanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectPanel component.
 */
export type SelectPanelPassThroughType<E> = PassThroughType<SelectPanelInstance, E>;

/**
 * Defines passthrough(pt) options of SelectPanel component.
 */
export interface SelectPanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectPanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectPanel component.
 */
export interface SelectPanelProps extends BaseComponentProps<SelectPanelInstance, unknown, SelectPanelPassThrough> {}

/**
 * Defines valid state in SelectPanel component.
 */
export interface SelectPanelState {}

/**
 * Defines the methods and properties exposed by SelectPanel component.
 */
export interface SelectPanelExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectPanel component.
 */
export type SelectPanelInstance = ComponentInstance<SelectPanelProps, SelectPanelState, SelectPanelExposes>;
