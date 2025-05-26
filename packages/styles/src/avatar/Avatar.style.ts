import { createStyles } from '@primereact/styles/utils';
import type { AvatarInstance } from '@primereact/types/shared/avatar';
import { style } from '@primeuix/styles/avatar';

export const styles = createStyles<AvatarInstance>({
    name: 'avatar',
    style,
    classes: {
        root: ({ props }) => [
            'p-avatar p-component',
            {
                'p-avatar-image': props.image != null,
                'p-avatar-circle': props.shape === 'circle',
                'p-avatar-lg': props.size === 'large',
                'p-avatar-xl': props.size === 'xlarge'
            }
        ],
        fallback: 'p-avatar-label',
        icon: 'p-avatar-icon'
    }
});
