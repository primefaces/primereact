import { createStyles } from '@primereact/styles/utils';
import type { SkeletonInstance } from '@primereact/types/shared/skeleton';
import { style } from '@primeuix/styles/skeleton';

export const styles = createStyles<SkeletonInstance>({
    name: 'skeleton',
    style,
    classes: {
        root: ({ props }) => [
            'p-skeleton p-component',
            {
                'p-skeleton-circle': props.shape === 'circle',
                'p-skeleton-animation-none': props.animation === 'none'
            }
        ]
    },
    inlineStyles: {
        root: { position: 'relative' }
    }
});
