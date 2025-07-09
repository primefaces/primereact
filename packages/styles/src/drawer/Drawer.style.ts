import { createStyles } from '@primereact/styles/utils';
import type { DrawerInstance } from '@primereact/types/shared/drawer';
import { style } from '@primeuix/styles/drawer';

export const styles = createStyles<DrawerInstance>({
    name: 'drawer',
    style,
    classes: {
        mask: ({ props, state }) => {
            const positions = ['left', 'right', 'top', 'bottom'];
            const pos = positions.find((item) => item === props.position);

            return [
                'p-drawer-mask',
                {
                    'p-overlay-mask p-overlay-mask-enter': props.modal,
                    'p-drawer-open': state.opened,
                    'p-drawer-full': props.position === 'full'
                },
                pos ? `p-drawer-${pos}` : ''
            ];
        },
        root: ({ props }) => [
            'p-drawer p-component',
            {
                'p-drawer-full': props.position === 'full'
            }
        ],
        trigger: 'p-drawer-trigger-button',
        header: 'p-drawer-header',
        title: 'p-drawer-title',
        close: 'p-drawer-close-button',
        content: 'p-drawer-content',
        footer: 'p-drawer-footer'
    },
    inlineStyles: {
        mask: ({ props }) => ({
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent: props.position === 'left' ? 'flex-start' : props.position === 'right' ? 'flex-end' : 'center',
            alignItems: props.position === 'top' ? 'flex-start' : props.position === 'bottom' ? 'flex-end' : 'center',
            pointerEvents: props.modal ? 'auto' : 'none'
        }),
        root: {
            pointerEvents: 'auto'
        }
    }
});
