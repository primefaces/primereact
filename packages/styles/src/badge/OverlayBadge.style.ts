import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/overlaybadge';

export const overlayClasses = {
    root: 'p-overlaybadge'
};

export const overlayStyles = createStyles({
    name: 'overlaybadge',
    style,
    classes: overlayClasses
});
