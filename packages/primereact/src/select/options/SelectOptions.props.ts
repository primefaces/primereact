import type { SelectOptionsProps } from '@primereact/types/shared/select';
import { ListboxOptions, ListboxProps } from 'primereact/listbox';

export const defaultOptionsProps: SelectOptionsProps = {
    ...(ListboxProps.defaultOptionsProps as SelectOptionsProps),
    as: ListboxOptions
};
