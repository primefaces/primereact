import * as HeadlessSplitter from '@primereact/headless/splitter';
import type { SplitterProps } from '@primereact/types/shared/splitter';

export const defaultProps: SplitterProps = {
    ...HeadlessSplitter.defaultProps,
    __TYPE: 'Splitter'
};
