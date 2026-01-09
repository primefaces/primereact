import type { InputTagsInputProps } from '@primereact/types/shared/inputtags';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultInputProps: InputTagsInputProps = {
    ...(InputTextProps.defaultProps as InputTagsInputProps),
    as: InputText
};
