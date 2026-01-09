import type { AutoCompleteListProps } from '@primereact/types/shared/autocomplete';
import { ListboxProps, ListboxRoot } from 'primereact/listbox';

export const defaultListProps: AutoCompleteListProps = {
    ...(ListboxProps.defaultRootProps as AutoCompleteListProps),
    as: ListboxRoot
};
