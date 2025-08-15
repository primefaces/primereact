/**
 *
 * SpeedDialMask is a component that displays a mask.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddialmask
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SpeedDialInstance } from './SpeedDial.types';

/**
 * Defines passthrough(pt) options type in SpeedDialMask component.
 */
export type SpeedDialMaskPassThroughType<E> = PassThroughType<SpeedDialMaskInstance, E>;

/**
 * Defines passthrough(pt) options of SpeedDialMask component.
 */
export interface SpeedDialMaskPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SpeedDialMaskPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SpeedDialMask component.
 */
export interface SpeedDialMaskProps extends BaseComponentProps<SpeedDialMaskInstance, unknown, SpeedDialMaskPassThrough> {}

/**
 * Defines valid state in SpeedDialMask component.
 */
export interface SpeedDialMaskState {}

/**
 * Defines the methods and properties exposed by SpeedDialMask component.
 */
export interface SpeedDialMaskExposes {
    /**
     * Instance of the SpeedDial component.
     */
    speeddial: SpeedDialInstance | undefined | null;
}

/**
 * Instance of SpeedDialMask component.
 */
export type SpeedDialMaskInstance = ComponentInstance<SpeedDialMaskProps, SpeedDialMaskState, SpeedDialMaskExposes>;
