import * as HeadlessTree from '@primereact/headless/tree';
import type { TreeRootProps } from '@primereact/types/shared/tree';

export const defaultRootProps: TreeRootProps = {
    ...HeadlessTree.defaultProps,
    as: 'div'
};
