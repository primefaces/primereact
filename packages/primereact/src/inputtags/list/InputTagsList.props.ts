import type { InputTagsListProps } from '@primereact/types/shared/inputtags';
import { ListboxProps, ListboxRoot } from 'primereact/listbox';

export const defaultListProps: InputTagsListProps = {
    ...(ListboxProps.defaultRootProps as InputTagsListProps),
    as: ListboxRoot
};
