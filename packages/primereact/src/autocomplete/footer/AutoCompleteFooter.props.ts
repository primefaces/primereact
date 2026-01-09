import type { AutoCompleteFooterProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultFooterProps: AutoCompleteFooterProps = {
    ...(Listbox.defaultFooterProps as AutoCompleteFooterProps)
};
