import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/progressspinner';

export const classes = {
    root: 'p-progressspinner',
    spin: 'p-progressspinner-spin',
    circle: 'p-progressspinner-circle'
};

export const styles = createStyles({
    name: 'progressspinner',
    style,
    classes
});
