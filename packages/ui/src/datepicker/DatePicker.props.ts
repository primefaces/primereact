import * as HeadlessDatePicker from '@primereact/headless/datepicker';
import type { DatePickerProps } from '@primereact/types/shared/datepicker';

export const defaultProps: DatePickerProps = {
    ...HeadlessDatePicker.defaultProps,
    as: 'span',
    name: undefined,
    placeholder: undefined,
    invalid: undefined,
    variant: undefined,
    fluid: undefined,
    required: undefined,
    disabled: undefined,
    readOnly: undefined,
    size: undefined,
    inputId: undefined,
    inputClass: undefined
};
