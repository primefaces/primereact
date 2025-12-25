import type { InputTagsItemProps } from '@primereact/types/shared/inputtags';
import { ChipProps } from 'primereact/chip';

export const defaultItemProps: InputTagsItemProps = {
    ...(ChipProps.RootDefaults as InputTagsItemProps),
    index: undefined
};
