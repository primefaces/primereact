import * as HeadlessFloatLabel from '@primereact/headless/floatlabel';
import type { FloatLabelProps } from '@primereact/types/shared/floatlabel';

export const defaultProps: FloatLabelProps = {
    ...HeadlessFloatLabel.defaultProps,
    as: 'span',
    variant: 'over'
};
