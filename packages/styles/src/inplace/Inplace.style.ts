import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/inplace';

export const classes = {
    root: 'p-inplace p-component',
    display: ({ props }) => ['p-inplace-display', { 'p-disabled': props.disabled }],
    content: 'p-inplace-content'
};

export const styles = createStyles({
    name: 'inplace',
    style,
    classes
});
