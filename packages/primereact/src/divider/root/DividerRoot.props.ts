import * as HeadlessDivider from '@primereact/headless/divider';
import type { DividerRootProps } from '@primereact/types/shared/divider';

export const defaultRootProps: DividerRootProps = {
    ...HeadlessDivider.defaultProps,
    as: 'div',
    align: undefined,
    orientation: 'horizontal',
    type: 'solid'
};
