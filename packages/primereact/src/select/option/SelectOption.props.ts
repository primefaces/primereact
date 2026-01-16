import type { SelectOptionProps } from '@primereact/types/shared/select';
import { ListboxOption, ListboxProps } from 'primereact/listbox';

export const defaultOptionProps: SelectOptionProps = {
    ...(ListboxProps.defaultOptionProps as SelectOptionProps),
    as: ListboxOption
};
