/**
 *
 * The useMeterGroup manages the state and functionality of a meter group component.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module usemetergroup
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useMeterGroup.
 */
export interface useMeterGroupProps {
    /**
     * Minimum boundary value.
     * @default 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @default 100
     */
    max?: number | undefined;
}

/**
 * Defines valid state in useMeterGroup.
 */
export interface useMeterGroupState {
    /**
     * The total percentage of the meter group.
     */
    totalPercent: number;
}

/**
 * Defines the methods and properties exposed by useMeterGroup.
 */
export interface useMeterGroupExposes {
    /**
     * The state of the useMeterGroup.
     */
    state: useMeterGroupState;
    /**
     * Converts a meter value to a percentage.
     * @param meterValue The value to convert.
     * @returns The percentage of the meter value.
     */
    percent: (meterValue: number) => number;
    /**
     * Converts a meter value to a percentage string.
     * @param meterValue The value to convert.
     * @returns The percentage of the meter value as a string.
     */
    percentAsString: (meterValue: number) => string;
    /**
     * Updates the total percentage of the meter group.
     * @param percent The percentage to add to the total.
     */
    updateTotalPercent: (percent: number) => void;
    /**
     * Resets the total percentage of the meter group to 0.
     */
    resetTotalPercent: () => void;
}

/**
 * Instance of useMeterGroup headless.
 */
export type useMeterGroupInstance = HeadlessInstance<useMeterGroupProps, useMeterGroupState, useMeterGroupExposes>;
