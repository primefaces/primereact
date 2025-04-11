import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/skeleton';

const inlineStyles = {
    root: { position: 'relative' }
};

export const classes = {
    root: ({ props }) => [
        'p-skeleton p-component',
        {
            'p-skeleton-circle': props.shape === 'circle',
            'p-skeleton-animation-none': props.animation === 'none'
        }
    ]
};

export const styles = createStyles({
    name: 'skeleton',
    style,
    classes,
    inlineStyles
});
