import type { AutoCompleteFooterProps } from '@primereact/types/shared/autocomplete';
import { ListboxFooter, ListboxProps } from 'primereact/listbox';

export const defaultFooterProps: AutoCompleteFooterProps = {
    ...(ListboxProps.defaultFooterProps as AutoCompleteFooterProps),
    as: ListboxFooter
};
