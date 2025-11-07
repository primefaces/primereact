/**
 *
 * PasswordMeter is a component that displays a single  meter bar.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module passwordmeter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PasswordInstance } from './Password.types';

/**
 * Defines passthrough(pt) options type in PasswordMeter component.
 */
export type PasswordMeterPassThroughType<E> = PassThroughType<PasswordMeterInstance, E>;

/**
 * Defines passthrough(pt) options of PasswordMeter component.
 */
export interface PasswordMeterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordMeterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PasswordMeter component.
 */
export interface PasswordMeterProps extends BaseComponentProps<PasswordMeterInstance, unknown, PasswordMeterPassThrough> {
    /**
     * The index of the meter.
     */
    index?: number;
    /**
     * Whether this meter is active/filled.
     * @default false
     */
    active?: boolean;
}

/**
 * Defines valid state in PasswordMeter component.
 */
export interface PasswordMeterState {}

/**
 * Defines the methods and properties exposed by PasswordMeter component.
 */
export interface PasswordMeterExposes {
    /**
     * Instance of the Password component.
     */
    password: PasswordInstance | undefined | null;
}

/**
 * Instance of PasswordMeter component.
 */
export type PasswordMeterInstance = ComponentInstance<PasswordMeterProps, PasswordMeterState, PasswordMeterExposes>;
