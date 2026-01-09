import type { AutoCompleteOptionProps } from '@primereact/types/shared/autocomplete';
import { ListboxOption, ListboxProps } from 'primereact/listbox';

export const defaultOptionProps: AutoCompleteOptionProps = {
    ...(ListboxProps.defaultOptionProps as AutoCompleteOptionProps),
    as: ListboxOption
};
