import * as HeadlessInplace from '@primereact/headless/inplace';
import type { InplaceRootProps } from '@primereact/types/shared/inplace';

export const defaultRootProps: InplaceRootProps = {
    ...HeadlessInplace.defaultProps,
    as: 'div',
    disabled: false,
    onActiveChange: undefined
};
