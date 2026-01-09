import type { AutoCompleteListProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultListProps: AutoCompleteListProps = {
    ...(Listbox.defaultRootProps as AutoCompleteListProps)
};
