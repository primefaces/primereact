import type { SelectFilterProps } from '@primereact/types/shared/select';
import { ListboxFilter, ListboxProps } from 'primereact/listbox';

export const defaultFilterProps: SelectFilterProps = {
    ...(ListboxProps.defaultFilterProps as SelectFilterProps),
    as: ListboxFilter
};
