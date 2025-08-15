/**
 *
 * SpeedDialList is a component that displays a list.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddiallist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SpeedDialInstance } from './SpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDialList component.
 */
export type SpeedDialListPassThroughType<E> = PassThroughType<SpeedDialListInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDialList component.
 */
export interface SpeedDialListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialListPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
}

/**
 * Defines valid properties in SpeedDialList component.
 */
export interface SpeedDialListProps extends BaseComponentProps<SpeedDialListInstance, unknown, SpeedDialListPassThrough> {}

/**
 * Defines valid state in SpeedDialList component.
 */
export interface SpeedDialListState {}

/**
 * Defines the methods and properties exposed by SpeedDialList component.
 */
export interface SpeedDialListExposes {
    /**
     * Instance of the SpeedDial component.
     */
    speeddial: SpeedDialInstance | undefined | null;
}

/**
 * Instance of SpeedDialList component.
 */
export type SpeedDialListInstance = ComponentInstance<SpeedDialListProps, SpeedDialListState, SpeedDialListExposes>;
