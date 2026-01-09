import type { AutoCompleteInputProps } from '@primereact/types/shared/autocomplete';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultInputProps: AutoCompleteInputProps = {
    ...(InputTextProps.defaultProps as AutoCompleteInputProps),
    as: InputText
};
