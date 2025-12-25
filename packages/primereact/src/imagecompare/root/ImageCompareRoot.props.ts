import * as HeadlessImageCompare from '@primereact/headless/imagecompare';
import type { ImageCompareRootProps } from '@primereact/types/shared/imagecompare';

export const defaultRootProps: ImageCompareRootProps = {
    ...HeadlessImageCompare.defaultProps,
    as: 'div'
};
