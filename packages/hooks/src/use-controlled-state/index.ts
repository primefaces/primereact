import { resolve } from '@primeuix/utils';
import * as React from 'react';

/**
 * The options for the `useControlledState` hook.
 */
export interface UseControlledStateOptions<T = unknown> {
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
    onChange?: (newValue: any) => void;
}

/**
 * The return type of the `useControlledState` hook.
 * A tuple containing the current value and a function to update it.
 */
export type UseControlledStateReturnType<T = unknown> = [T | undefined, (inValue: T | ((prev?: T, controlled?: boolean) => any)) => void];

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
export function useControlledState<T = unknown>({ value, defaultValue, onChange }: UseControlledStateOptions<T>): UseControlledStateReturnType<T | undefined> {
    const [valueState, setValueState] = React.useState<T | undefined>(defaultValue ?? value);

    const isControlled = onChange !== undefined;
    const computedValue = isControlled ? (value as T) : valueState;

    const setValue = (inValue: T | ((prev: T) => any)) => {
        // @todo - update resolve to accept multiple parameters
        const newValue = resolve(inValue, computedValue, isControlled);

        onChange?.(newValue);

        if (!isControlled) {
            setValueState(newValue);
        }
    };

    return [computedValue, setValue];
}
