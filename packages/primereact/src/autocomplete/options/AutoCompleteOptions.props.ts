import type { AutoCompleteOptionsProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultOptionsProps: AutoCompleteOptionsProps = {
    ...(Listbox.defaultOptionsProps as AutoCompleteOptionsProps)
};
