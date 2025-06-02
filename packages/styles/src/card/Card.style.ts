import { createStyles } from '@primereact/styles/utils';
import type { CardInstance } from '@primereact/types/shared/card';
import { style } from '@primeuix/styles/card';

export const styles = createStyles<CardInstance>({
    name: 'card',
    style,
    classes: {
        root: 'p-card p-component',
        header: 'p-card-header',
        body: 'p-card-body',
        caption: 'p-card-caption',
        title: 'p-card-title',
        subtitle: 'p-card-subtitle',
        content: 'p-card-content',
        footer: 'p-card-footer'
    }
});
