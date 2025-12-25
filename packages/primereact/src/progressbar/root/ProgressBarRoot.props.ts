import * as HeadlessProgressBar from '@primereact/headless/progressbar';
import type { ProgressBarRootProps } from '@primereact/types/shared/progressbar';

export const defaultRootProps: ProgressBarRootProps = {
    ...HeadlessProgressBar.defaultProps,
    mode: 'determinate'
};
