import * as HeadlessTree from '@primereact/headless/tree';
import type { TreeProps } from '@primereact/types/shared/tree';

export const defaultProps: TreeProps = {
    ...HeadlessTree.defaultProps,
    as: 'div'
};
