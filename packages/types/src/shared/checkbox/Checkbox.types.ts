import type { GlobalComponentProps } from '@primereact/types/core';
import { useCheckboxChangeEvent } from './useCheckbox.types';

export interface CheckboxProps extends GlobalComponentProps {
    readonly __TYPE?: 'Checkbox';
    defaultChecked?: boolean | undefined;
    checked?: boolean | undefined;
    size?: 'small' | 'normal' | 'large' | undefined;
    onCheckedChange?: (event: useCheckboxChangeEvent) => void;
    indeterminate?: boolean | undefined;
}
