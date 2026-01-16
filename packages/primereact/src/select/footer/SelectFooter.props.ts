import type { SelectFooterProps } from '@primereact/types/shared/select';
import { ListboxFooter, ListboxProps } from 'primereact/listbox';

export const defaultFooterProps: SelectFooterProps = {
    ...(ListboxProps.defaultFooterProps as SelectFooterProps),
    as: ListboxFooter
};
