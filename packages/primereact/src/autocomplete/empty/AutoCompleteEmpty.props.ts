import type { AutoCompleteEmptyProps } from '@primereact/types/shared/autocomplete';
import * as Listbox from 'primereact/listbox';

export const defaultEmptyProps: AutoCompleteEmptyProps = {
    ...(Listbox.defaultEmptyProps as AutoCompleteEmptyProps)
};
