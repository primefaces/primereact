import * as HeadlessProgressSpinner from '@primereact/headless/progressspinner';
import type { ProgressSpinnerProps } from '@primereact/types/shared/progressspinner';

export const defaultProps: ProgressSpinnerProps = {
    ...HeadlessProgressSpinner.defaultProps,
    as: 'div',
    strokeWidth: '2',
    fill: 'none',
    animationDuration: '2s'
};
