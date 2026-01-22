import type { InputTagsOptionProps } from '@primereact/types/shared/inputtags';
import { ListboxOption, ListboxProps } from 'primereact/listbox';

export const defaultOptionProps: InputTagsOptionProps = {
    ...(ListboxProps.defaultOptionProps as InputTagsOptionProps),
    as: ListboxOption
};
