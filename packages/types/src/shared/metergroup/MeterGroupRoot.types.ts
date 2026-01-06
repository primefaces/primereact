/**
 *
 * MeterGroup displays scalar measurements within a known range.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergrouproot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useMeterGroupExposes, useMeterGroupProps, useMeterGroupState } from './useMeterGroup.types';

/**
 * Defines passthrough(pt) options type in MeterGroup component.
 */
export type MeterGroupRootPassThroughType<E> = PassThroughType<MeterGroupRootInstance, E>;

/**
 * Defines passthrough(pt) options of MeterGroup component.
 */
export interface MeterGroupRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the meters' DOM element.
     */
    meters?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the meter's DOM element.
     */
    meter?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the labels' DOM element.
     */
    labels?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLOListElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the label icon's DOM element.
     */
    icon?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the label marker's DOM element.
     */
    marker?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    text?: MeterGroupRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in MeterGroup component.
 */
export interface MeterGroupRootProps extends BaseComponentProps<MeterGroupRootInstance, useMeterGroupProps, MeterGroupRootPassThrough> {
    /**
     * Specifies the layout of the component.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

/**
 * Defines valid state in MeterGroup component.
 * @extends useMeterGroupState
 */
export interface MeterGroupRootState extends useMeterGroupState {}

/**
 * Defines the methods and properties exposed by MeterGroup component.
 * @extends useMeterGroupExposes
 */
export interface MeterGroupRootExposes extends useMeterGroupExposes {
    /**
     * Default colors used in the MeterGroup component.
     */
    colors: Record<METERGROUP_DEFAULT_COLORS_TYPE, string>;
    /**
     * Gets the next color index.
     * @returns {number} The next color index.
     */
    getNextColorIndex: () => number;
    /**
     * Gets the next label index.
     * @returns {number} The next label index.
     */
    getNextLabelIndex: () => number;
}

export type METERGROUP_DEFAULT_COLORS_TYPE = 'blue' | 'emerald' | 'violet' | 'amber' | 'gray' | 'cyan' | 'pink' | 'lime' | 'fuchsia';

/**
 * Instance of MeterGroup component.
 */
export type MeterGroupRootInstance = ComponentInstance<MeterGroupRootProps, MeterGroupRootState, MeterGroupRootExposes>;
