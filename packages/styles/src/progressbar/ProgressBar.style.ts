import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/progressbar';

export const classes = {
    root: ({ props }) => [
        'p-progressbar p-component',
        {
            'p-progressbar-determinate': props.mode === 'determinate',
            'p-progressbar-indeterminate': props.mode === 'indeterminate'
        }
    ],
    value: 'p-progressbar-value',
    label: 'p-progressbar-label'
};

export const styles = createStyles({
    name: 'progressbar',
    style,
    classes
});
