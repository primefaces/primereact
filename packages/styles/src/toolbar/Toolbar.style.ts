import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/toolbar';

export const classes = {
    root: 'p-toolbar p-component',
    start: 'p-toolbar-start',
    center: 'p-toolbar-center',
    end: 'p-toolbar-end'
};

export const styles = createStyles({
    name: 'toolbar',
    style,
    classes
});
