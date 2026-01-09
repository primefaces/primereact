import type { AutoCompleteInputProps } from '@primereact/types/shared/autocomplete';
import * as InputText from 'primereact/inputtext';

export const defaultInputProps: AutoCompleteInputProps = {
    ...(InputText.defaultProps as AutoCompleteInputProps)
};
