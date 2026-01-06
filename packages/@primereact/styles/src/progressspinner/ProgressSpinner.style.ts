import { createStyles } from '@primereact/styles/utils';
import type { ProgressSpinnerInstance } from '@primereact/types/shared/progressspinner';
import { style } from '@primeuix/styles/progressspinner';

export const styles = createStyles<ProgressSpinnerInstance>({
    name: 'progressspinner',
    style,
    classes: {
        root: 'p-progressspinner',
        spin: 'p-progressspinner-spin',
        circle: 'p-progressspinner-circle'
    }
});
