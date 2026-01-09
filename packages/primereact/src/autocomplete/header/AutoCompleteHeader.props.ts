import type { AutoCompleteHeaderProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultHeaderProps: AutoCompleteHeaderProps = {
    ...(Listbox.defaultHeaderProps as AutoCompleteHeaderProps)
};
