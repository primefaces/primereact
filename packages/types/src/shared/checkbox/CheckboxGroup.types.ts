import { ComponentInstance } from '@primereact/types/core';
import { BaseComponentProps } from '..';

/**
 * Checkbox Group component instance.
 */
export type CheckboxGroupInstance = ComponentInstance<CheckboxGroupProps>;

export interface CheckboxGroupValueChangeEvent {
    originalEvent: React.FormEventHandler;
    value: unknown[];
}

/**
 * Checkbox Group component props.
 */
export interface CheckboxGroupProps extends BaseComponentProps {
    /**
     * The name of the checkbox group.
     */
    value?: unknown[];
    /**
     * The default value of the checkbox group.
     */
    defaultValue?: unknown[];
    /**
     * Callback function that is called when the checkbox group value changes.
     */
    onValueChange?: (event: CheckboxGroupValueChangeEvent) => void;
}
