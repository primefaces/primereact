import type { InputTagsItemProps } from '@primereact/types/shared/inputtags';
import { ChipProps, ChipRoot } from 'primereact/chip';

export const defaultItemProps: InputTagsItemProps = {
    ...(ChipProps.defaultRootProps as InputTagsItemProps),
    as: ChipRoot,
    index: undefined
};
