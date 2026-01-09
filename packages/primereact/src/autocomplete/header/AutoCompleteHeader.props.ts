import type { AutoCompleteHeaderProps } from '@primereact/types/shared/autocomplete';
import { ListboxHeader, ListboxProps } from 'primereact/listbox';

export const defaultHeaderProps: AutoCompleteHeaderProps = {
    ...(ListboxProps.defaultHeaderProps as AutoCompleteHeaderProps),
    as: ListboxHeader
};
