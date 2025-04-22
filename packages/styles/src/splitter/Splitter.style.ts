import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/splitter';

export const classes = {
    root: ({ props }) => ['p-splitter p-component', 'p-splitter-' + props.layout],
    gutter: 'p-splitter-gutter',
    gutterHandle: 'p-splitter-gutter-handle'
};

export const styles = createStyles({
    name: 'splitter',
    style,
    classes
});
