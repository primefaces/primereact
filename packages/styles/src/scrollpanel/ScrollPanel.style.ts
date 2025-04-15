import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/scrollpanel';

export const classes = {
    root: 'p-scrollpanel p-component',
    contentContainer: 'p-scrollpanel-content-container',
    content: 'p-scrollpanel-content',
    barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
    barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};

export const styles = createStyles({
    name: 'scrollpanel',
    style,
    classes
});
