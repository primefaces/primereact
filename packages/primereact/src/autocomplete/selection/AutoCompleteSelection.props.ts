import type { AutoCompleteSelectionProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultSelectionProps: AutoCompleteSelectionProps = {
    ...(Listbox.defaultSelectionProps as AutoCompleteSelectionProps)
};
