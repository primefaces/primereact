import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/card';

export const classes = {
    root: 'p-card p-component',
    header: 'p-card-header',
    body: 'p-card-body',
    caption: 'p-card-caption',
    title: 'p-card-title',
    subtitle: 'p-card-subtitle',
    content: 'p-card-content',
    footer: 'p-card-footer'
};

export const styles = createStyles({
    name: 'card',
    style,
    classes
});
