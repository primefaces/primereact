import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/chip';

export const classes = {
    root: 'p-chip p-component',
    image: 'p-chip-image',
    icon: 'p-chip-icon',
    label: 'p-chip-label',
    removeIcon: 'p-chip-remove-icon'
};

export const styles = createStyles({
    name: 'chip',
    style,
    classes
});
