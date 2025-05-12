import * as HeadlessChip from '@primereact/headless/chip';
import type { ChipProps } from '@primereact/types/shared/chip';

export const defaultProps: ChipProps = {
    ...HeadlessChip.defaultProps,
    as: 'div',
    onRemove: undefined
};
