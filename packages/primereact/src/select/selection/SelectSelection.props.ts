import type { SelectSelectionProps } from '@primereact/types/shared/select';
import { ListboxProps, ListboxSelection } from 'primereact/listbox';

export const defaultSelectionProps: SelectSelectionProps = {
    ...(ListboxProps.defaultSelectionProps as SelectSelectionProps),
    as: ListboxSelection
};
