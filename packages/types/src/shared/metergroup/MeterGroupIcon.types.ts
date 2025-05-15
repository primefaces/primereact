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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import { MeterGroupInstance } from './MeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroupIcon component.
 */
export type MeterGroupIconPassThroughOptionType<E> = PassThroughOptionType<MeterGroupIconInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroupIcon component.
 */
export interface MeterGroupIconPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupIconPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MeterGroupIcon component.
 */
export interface MeterGroupIconProps extends BaseComponentProps {
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
export type MeterGroupIconInstance = ComponentInstance<MeterGroupIconProps, MeterGroupIconState, MeterGroupIconExposes>;
