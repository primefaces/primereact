import { createStyles } from '@primereact/styles/utils';
import type { ProgressBarRootInstance } from '@primereact/types/shared/progressbar';
import { style } from '@primeuix/styles/progressbar';

export const styles = createStyles<ProgressBarRootInstance>({
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
    },
    inlineStyles: {
        value: ({ props, state }) =>
            props.mode === 'determinate'
                ? {
                      width: state.computedValue + '%',
                      display: 'flex'
                  }
                : undefined
    }
});
