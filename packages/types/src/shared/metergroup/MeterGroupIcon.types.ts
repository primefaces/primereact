/**
 *
 * MeterGroupIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergroupicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupIcon component.
 */
export type MeterGroupIconPassThroughType<E> = PassThroughType<MeterGroupIconInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupIcon component.
 */
export interface MeterGroupIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupIconPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupIcon component.
 */
export interface MeterGroupIconProps extends BaseComponentProps<MeterGroupIconInstance> {
    /**
     * Defines the color of the icon.
     */
    color?: string | undefined;
}

/**
 * Defines valid state in MeterGroupIcon component.
 */
export interface MeterGroupIconState {}

/**
 * Defines the methods and properties exposed by MeterGroupIcon component.
 */
export interface MeterGroupIconExposes {
    /**
     * The MeterGroup component instance.
     */
    metergroup: MeterGroupInstance | undefined | null;
}

/**
 * Instance of MeterGroupIcon component.
 */
export type MeterGroupIconInstance = ComponentInstance<MeterGroupIconProps, MeterGroupIconState, MeterGroupIconExposes, MeterGroupIconPassThrough>;
