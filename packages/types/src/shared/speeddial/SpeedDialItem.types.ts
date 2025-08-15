/**
 *
 * SpeedDialItem is a component that displays an item.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddialitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SpeedDialInstance } from './SpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDialItem component.
 */
export type SpeedDialItemPassThroughType<E> = PassThroughType<SpeedDialItemInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDialItem component.
 */
export interface SpeedDialItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialItemPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in SpeedDialItem component.
 */
export interface SpeedDialItemProps extends BaseComponentProps<SpeedDialItemInstance, unknown, SpeedDialItemPassThrough> {}

/**
 * Defines valid state in SpeedDialItem component.
 */
export interface SpeedDialItemState {}

/**
 * Defines the methods and properties exposed by SpeedDialItem component.
 */
export interface SpeedDialItemExposes {
    /**
     * Instance of the SpeedDial component.
     */
    speeddial: SpeedDialInstance | undefined | null;
}

/**
 * Instance of SpeedDialItem component.
 */
export type SpeedDialItemInstance = ComponentInstance<SpeedDialItemProps, SpeedDialItemState, SpeedDialItemExposes>;
