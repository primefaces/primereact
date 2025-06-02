import * as HeadlessDivider from '@primereact/headless/divider';
import type { DividerProps } from '@primereact/types/shared/divider';

export const defaultProps: DividerProps = {
    ...HeadlessDivider.defaultProps,
    as: 'divider',
    align: undefined,
    layout: 'horizontal',
    type: 'solid'
};
