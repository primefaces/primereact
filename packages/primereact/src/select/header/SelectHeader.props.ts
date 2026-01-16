import type { SelectHeaderProps } from '@primereact/types/shared/select';
import { ListboxHeader, ListboxProps } from 'primereact/listbox';

export const defaultHeaderProps: SelectHeaderProps = {
    ...(ListboxProps.defaultHeaderProps as SelectHeaderProps),
    as: ListboxHeader
};
