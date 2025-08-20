import { createStyles } from '@primereact/styles/utils';
import type { SpeedDialInstance } from '@primereact/types/shared/speeddial';
import { style } from '@primeuix/styles/speeddial';

export const styles = createStyles<SpeedDialInstance>({
    name: 'speeddial',
    style,
    classes: {
        root: ({ state, props }) => [
            `p-speeddial p-component p-speeddial-${props.type}`,
            {
                [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
                'p-speeddial-open': state.visible,
                'p-disabled': props.disabled
            }
        ],
        button: ({ props }) => [
            'p-speeddial-button',
            {
                'p-speeddial-rotate': props.rotateAnimation
            }
        ],
        list: 'p-speeddial-list',
        item: 'p-speeddial-item',
        action: 'p-speeddial-action',
        actionIcon: 'p-speeddial-action-icon'
    },
    inlineStyles: {
        root: ({ props }) => ({
            alignItems: props.direction === 'up' || props.direction === 'down' ? 'center' : undefined,
            justifyContent: props.direction === 'left' || props.direction === 'right' ? 'center' : undefined,
            flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : undefined
        }),
        list: ({ props }) => ({
            flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : undefined
        })
    }
});
