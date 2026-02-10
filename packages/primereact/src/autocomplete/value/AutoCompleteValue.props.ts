import type { AutoCompleteValueProps } from '@primereact/types/shared/autocomplete';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultValueProps: AutoCompleteValueProps = {
    ...(InputTextProps.defaultProps as AutoCompleteValueProps),
    as: InputText
};
