/**
 *
 * The useSwitch manages the state and functionality of a switch component.
 *
 * [Live Demo](https://www.primereact.org/switch/)
 *
 * @module useswitch
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event fired when the switch's checked state changes.
 */
export interface useSwitchChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The checked state of the switch.
     */
    checked: boolean;
}

/**
 * Defines valid properties in useSwitch.
 */
export interface useSwitchProps {
    /**
     * When present, it specifies the input's checked state.
     */
    checked?: boolean | undefined;
    /**
     * The default value for the input when not controlled by `checked` and `onCheckedChange`.
     */
    defaultChecked?: boolean | undefined;
    /**
     * Callback fired when the switch's checked state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the switch.
     * @returns void
     */
    onCheckedChange?: (event: useSwitchChangeEvent) => void;
}

/**
 * Defines valid state in useSwitch.
 */
export interface useSwitchState {
    /**
     * The checked state of the useSwitch.
     */
    checked: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useSwitch.
 */
export interface useSwitchExposes {
    /**
     * The state of the useSwitch.
     */
    state: useSwitchState;
    /**
     * Callback fired when the useSwitch's checked state changes.
     *
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the switch.
     * @returns void
     */
    onChange: (event: useSwitchChangeEvent) => void;
}

/**
 * Instance of useSwitch headless.
 */
export type useSwitchInstance = HeadlessInstance<useSwitchProps, useSwitchState, useSwitchExposes>;
