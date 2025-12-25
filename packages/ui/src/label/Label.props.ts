import * as HeadlessLabel from '@primereact/headless/label';
import type { LabelProps } from '@primereact/types/shared/label';

export const defaultProps: LabelProps = {
    ...HeadlessLabel.defaultProps,
    as: 'label'
};
