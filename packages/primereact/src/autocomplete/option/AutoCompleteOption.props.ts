import type { AutoCompleteOptionProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultOptionProps: AutoCompleteOptionProps = {
    ...(Listbox.defaultOptionProps as AutoCompleteOptionProps)
};
