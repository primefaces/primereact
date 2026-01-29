import * as HeadlessIftaLabel from '@primereact/headless/iftalabel';
import type { IftaLabelProps } from '@primereact/types/shared/iftalabel';

export const defaultProps: IftaLabelProps = {
    ...HeadlessIftaLabel.defaultProps,
    as: 'span'
};
