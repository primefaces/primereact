import { resolve } from '@primeuix/utils';
import * as React from 'react';

/**
 * The options for the `useControlledState` hook.
 */
export interface UseControlledStateOptions<T = unknown, E = unknown> {
    /**
     * The value of the controlled state.
     */
    value?: T;
    /**
     * The default value of the uncontrolled state.
     */
    defaultValue?: T;
    /**
     * Callback function that is called when the value changes.
     */
    onChange?: (newValue: E) => void;
}

/**
 * The return type of the `useControlledState` hook.
 * A tuple containing the current value and a function to update it.
 */
export type UseControlledStateReturnType<T = unknown> = [T | undefined, (inValue: unknown | ((prev?: T) => unknown)) => void];

/**
 * A custom hook that manages controlled and uncontrolled state.
 *
 * @param {UseControlledStateOptions} options - The options for the controlled state.
 * @returns A tuple containing the current value and a function to update it.
 *
 * @example
 * ```tsx
 * const ControlledComponent = () => {
 *    const [controlledValue, setControlledValue] = React.useState('');
 *
 *    const [value, setValue] = useControlledState({
 *        value: controlledValue,
 *        defaultValue: 'initial value',
 *        onChange: (newValue) => {
 *           setControlledValue(newValue);
 *        }
 *    });
 *
 *   return <Component value={value} onChange={(e) => setValue(e.target.value)} />;
 * };
 * ```
 */
export function useControlledState<T = unknown, E = T>({ value, defaultValue, onChange }: UseControlledStateOptions<T, E>): UseControlledStateReturnType<T | undefined> {
    const [valueState, setValueState] = React.useState<T | undefined>(defaultValue ?? value);

    const isControlled = value !== undefined;
    const computedValue = isControlled ? (value as T) : valueState;

    const setValue = React.useCallback(
        (inValue: unknown | ((prev?: T) => unknown)) => {
            // @todo - update resolve to accept multiple parameters
            const [newValue, onChangeParam] = resolve(inValue, computedValue, isControlled) as [T, E];

            onChange?.(onChangeParam);

            if (!isControlled) {
                setValueState(newValue);
            }
        },
        [computedValue, isControlled, onChange]
    );

    return [computedValue, setValue];
}
