import { createStyles } from '@primereact/styles/utils';
import type { ButtonInstance } from '@primereact/types/shared/button';
import { style } from '@primeuix/styles/button';

export const styles = createStyles<ButtonInstance>({
    name: 'button',
    style,
    classes: {
        root: ({ instance, props }) => [
            'p-button p-component',
            {
                'p-button-icon-only': props.iconOnly,
                'p-button-loading': props.loading,
                'p-button-link': props.variant === 'link',
                [`p-button-${props.severity}`]: props.severity,
                'p-button-raised': props.raised,
                'p-button-rounded': props.rounded,
                'p-button-text': props.variant === 'text',
                'p-button-outlined': props.variant === 'outlined',
                'p-button-sm': props.size === 'small',
                'p-button-lg': props.size === 'large',
                'p-button-plain': props.plain,
                'p-button-fluid': instance.hasFluid
            }
        ],
        loadingIcon: 'p-button-loading-icon',
        icon: ({ props }) => [
            'p-button-icon',
            {
                [`p-button-icon-${props.iconPos}`]: props.label
            }
        ],
        label: 'p-button-label'
    }
});
