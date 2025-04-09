import * as HeadlessProgressBar from '@primereact/headless/progressbar';
import type { ProgressBarProps } from '@primereact/types/shared/progressbar';

export const defaultProps: ProgressBarProps = {
    ...HeadlessProgressBar.defaultProps,
    __TYPE: 'ProgressBar',
    mode: 'determinate',
    style: undefined
};
