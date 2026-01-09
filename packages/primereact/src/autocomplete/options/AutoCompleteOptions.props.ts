import type { AutoCompleteOptionsProps } from '@primereact/types/shared/autocomplete';
import { ListboxOptions, ListboxProps } from 'primereact/listbox';

export const defaultOptionsProps: AutoCompleteOptionsProps = {
    ...(ListboxProps.defaultOptionsProps as AutoCompleteOptionsProps),
    as: ListboxOptions
};
