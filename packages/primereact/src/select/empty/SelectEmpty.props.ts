import type { SelectEmptyProps } from '@primereact/types/shared/select';
import { ListboxEmpty, ListboxProps } from 'primereact/listbox';

export const defaultEmptyProps: SelectEmptyProps = {
    ...(ListboxProps.defaultEmptyProps as SelectEmptyProps),
    as: ListboxEmpty
};
