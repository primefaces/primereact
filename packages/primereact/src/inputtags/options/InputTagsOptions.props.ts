import type { InputTagsOptionsProps } from '@primereact/types/shared/inputtags';
import { ListboxOptions, ListboxProps } from 'primereact/listbox';

export const defaultOptionsProps: InputTagsOptionsProps = {
    ...(ListboxProps.defaultOptionsProps as InputTagsOptionsProps),
    as: ListboxOptions
};
