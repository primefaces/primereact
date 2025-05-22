/**
 *
 * MeterGroupText is a component that displays text inside a MeterGroup.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergrouptext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupText component.
 */
export type MeterGroupTextPassThroughType<E> = PassThroughType<MeterGroupTextInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupText component.
 */
export interface MeterGroupTextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupTextPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupText component.
 */
export interface MeterGroupTextProps extends BaseComponentProps<MeterGroupTextInstance> {}

/**
 * Defines valid state in MeterGroupText component.
 */
export interface MeterGroupTextState {}

/**
 * Defines the methods and properties exposed by MeterGroupText component.
 */
export interface MeterGroupTextExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupText component.
 */
export type MeterGroupTextInstance = ComponentInstance<MeterGroupTextProps, MeterGroupTextState, MeterGroupTextExposes, MeterGroupTextPassThrough>;
