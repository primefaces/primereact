import * as HeadlessLabel from '@primereact/headless/label';
import type { LabelRootProps } from '@primereact/types/shared/label';

export const defaultRootProps: LabelRootProps = {
    ...HeadlessLabel.defaultProps,
    as: 'label'
};
