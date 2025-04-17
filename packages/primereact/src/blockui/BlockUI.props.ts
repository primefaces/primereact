import * as HeadlessBlockUI from '@primereact/headless/blockui';
import type { BlockUIProps } from '@primereact/types/shared/blockui';

export const defaultProps: BlockUIProps = {
    ...HeadlessBlockUI.defaultProps,
    __TYPE: 'BlockUI'
};
