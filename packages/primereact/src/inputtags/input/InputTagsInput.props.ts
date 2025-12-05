import type { InputTagsInputProps } from '@primereact/types/shared/inputtags';
import * as InputText from 'primereact/inputtext';

export const defaultInputProps: InputTagsInputProps = {
    ...(InputText.defaultProps as InputTagsInputProps)
};
