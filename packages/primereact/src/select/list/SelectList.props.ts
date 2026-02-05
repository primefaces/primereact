import type { SelectListProps } from '@primereact/types/shared/select';
import { ListboxProps, ListboxRoot } from 'primereact/listbox';

export const defaultListProps: SelectListProps = {
    ...(ListboxProps.defaultRootProps as SelectListProps),
    as: ListboxRoot
};
