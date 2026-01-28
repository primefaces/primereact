import { createStyles } from '@primereact/styles/utils';
import type { SpeedDialRootInstance } from '@primereact/types/shared/speeddial';
import { style as _style } from '@primeuix/styles/speeddial';

const style = /*css*/ `
${_style}

.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-button {
    transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background dt('speeddial.transition.duration'),
        color dt('speeddial.transition.duration'),
        border-color dt('speeddial.transition.duration'),
        box-shadow dt('speeddial.transition.duration'),
        outline-color dt('speeddial.transition.duration');
    will-change: transform;
}

.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}
`;

export const styles = createStyles<SpeedDialRootInstance>({
    name: 'speeddial',
    style,
    classes: {
        root: ({ state, props }) => [
            `p-speeddial p-component p-speeddial-${props.type}`,
            {
                [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
                // 'p-speeddial-open': state.visible,
                'p-speeddial-opened': state.visible,
                'p-disabled': props.disabled
            }
        ],
        trigger: 'p-speeddial-button',
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
