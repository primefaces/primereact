import * as HeadlessSplitter from '@primereact/headless/splitter';
import type { SplitterRootProps } from '@primereact/types/shared/splitter';

export const defaultRootProps: SplitterRootProps = {
    ...HeadlessSplitter.defaultProps,
    as: 'div'
};
