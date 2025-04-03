import type { GlobalComponentProps } from '@primereact/types/core';
import { useCheckboxChangeEvent } from './useCheckbox.types';

export interface CheckboxProps extends GlobalComponentProps {
    readonly __TYPE?: 'Checkbox';
    defaultChecked?: boolean | undefined;
    checked?: boolean | undefined;
    binary?: boolean;
    size?: 'small' | 'normal' | 'large' | undefined;
    onChange?: (event: useCheckboxChangeEvent) => void;
}
