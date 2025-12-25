import type { DatePickerInputProps } from '@primereact/types/shared/datepicker';
import * as InputText from 'primereact/inputtext';

export const defaultInputProps: DatePickerInputProps = {
    ...(InputText.defaultProps as DatePickerInputProps)
};
