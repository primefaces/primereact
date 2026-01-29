import { createStyles } from '@primereact/styles/utils';
import type { BadgeInstance } from '@primereact/types/shared/badge';
import { style } from '@primeuix/styles/badge';
import { isEmpty, isNotEmpty } from '@primeuix/utils/object';

export const styles = createStyles<BadgeInstance>({
    name: 'badge',
    style,
    classes: {
        root: ({ props }) => [
            'p-badge p-component',
            {
                'p-badge-circle': props.shape === 'circle' && isNotEmpty(props.children),
                'p-badge-dot': isEmpty(props.children),
                'p-badge-sm': props.size === 'small',
                'p-badge-lg': props.size === 'large',
                'p-badge-xl': props.size === 'xlarge',
                'p-badge-info': props.severity === 'info',
                'p-badge-success': props.severity === 'success',
                'p-badge-warn': props.severity === 'warn',
                'p-badge-danger': props.severity === 'danger',
                'p-badge-secondary': props.severity === 'secondary',
                'p-badge-contrast': props.severity === 'contrast'
            }
        ]
    }
});
