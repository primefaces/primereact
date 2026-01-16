import type { SelectListProps } from '@primereact/types/shared/select';
import { ListboxRoot, ListboxProps } from 'primereact/listbox';

export const defaultListProps: SelectListProps = {
    ...(ListboxProps.defaultRootProps as SelectListProps),
    as: ListboxRoot
};
