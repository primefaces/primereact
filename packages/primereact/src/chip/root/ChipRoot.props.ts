import * as HeadlessChip from '@primereact/headless/chip';
import type { ChipRootProps } from '@primereact/types/shared/chip';

export const defaultRootProps: ChipRootProps = {
    ...HeadlessChip.defaultProps,
    as: 'div',
    onRemove: undefined
};
