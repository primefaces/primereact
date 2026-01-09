import type { DatePickerInputProps } from '@primereact/types/shared/datepicker';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultInputProps: DatePickerInputProps = {
    ...(InputTextProps.defaultProps as DatePickerInputProps),
    as: InputText
};
