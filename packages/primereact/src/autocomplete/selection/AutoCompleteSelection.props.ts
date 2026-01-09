import type { AutoCompleteSelectionProps } from '@primereact/types/shared/autocomplete';
import { ListboxProps, ListboxSelection } from 'primereact/listbox';

export const defaultSelectionProps: AutoCompleteSelectionProps = {
    ...(ListboxProps.defaultSelectionProps as AutoCompleteSelectionProps),
    as: ListboxSelection
};
