import { createStyles } from '@primereact/styles/utils';
import type { ProgressBarInstance } from '@primereact/types/shared/progressbar';
import { style } from '@primeuix/styles/progressbar';

export const styles = createStyles<ProgressBarInstance>({
    name: 'progressbar',
    style,
    classes: {
        root: ({ props }) => [
            'p-progressbar p-component',
            {
                'p-progressbar-determinate': props.mode === 'determinate',
                'p-progressbar-indeterminate': props.mode === 'indeterminate'
            }
        ],
        value: 'p-progressbar-value',
        label: 'p-progressbar-label'
    }
});
