import type { InputTagsItemProps } from '@primereact/types/shared/inputtags';
import * as Chip from 'primereact/chip';

export const defaultItemProps: InputTagsItemProps = {
    ...(Chip.defaultProps as InputTagsItemProps),
    index: undefined
};
