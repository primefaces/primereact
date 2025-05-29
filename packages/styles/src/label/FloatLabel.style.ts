import { createStyles } from '@primereact/styles/utils';
import type { FloatLabelInstance } from '@primereact/types/shared/label';
import { style } from '@primeuix/styles/floatlabel';

export const floatStyles = createStyles<FloatLabelInstance>({
    name: 'floatlabel',
    style,
    classes: {
        root: ({ props }) => [
            'p-floatlabel',
            {
                'p-floatlabel-over': props.variant === 'over',
                'p-floatlabel-on': props.variant === 'on',
                'p-floatlabel-in': props.variant === 'in'
            }
        ]
    }
});
