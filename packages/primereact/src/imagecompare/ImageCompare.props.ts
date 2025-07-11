import * as HeadlessImageCompare from '@primereact/headless/imagecompare';
import type { ImageCompareProps } from '@primereact/types/shared/imagecompare';

export const defaultProps: ImageCompareProps = {
    ...HeadlessImageCompare.defaultProps,
    as: 'div'
};
