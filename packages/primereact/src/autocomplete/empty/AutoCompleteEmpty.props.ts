import type { AutoCompleteEmptyProps } from '@primereact/types/shared/autocomplete';
import { ListboxEmpty, ListboxProps } from 'primereact/listbox';

export const defaultEmptyProps: AutoCompleteEmptyProps = {
    ...(ListboxProps.defaultEmptyProps as AutoCompleteEmptyProps),
    as: ListboxEmpty
};
