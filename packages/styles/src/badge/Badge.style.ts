import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/badge';
import { isEmpty, isNotEmpty } from '@primeuix/utils/object';

export const classes = {
    root: ({ props }) => [
        'p-badge p-component',
        {
            'p-badge-circle': props.circle && isNotEmpty(props.children),
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
};

export const styles = createStyles({
    name: 'badge',
    style,
    classes
});
