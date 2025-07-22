import { createStyles } from '@primereact/styles/utils';
import type { DialogInstance } from '@primereact/types/shared/dialog';
import { style } from '@primeuix/styles/dialog';

export const styles = createStyles<DialogInstance>({
    name: 'dialog',
    style,
    classes: {
        mask: ({ props, state }) => {
            const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
            const pos = positions.find((item) => item === props.position);

            return [
                'p-dialog-mask',
                {
                    'p-overlay-mask p-overlay-mask-enter': props.modal,
                    'p-dialog-open': state.opened
                },
                pos ? `p-dialog-${pos}` : ''
            ];
        },
        root: ({ state }) => [
            'p-dialog p-component',
            {
                'p-dialog-maximized': state.maximized
            }
        ],
        trigger: 'p-dialog-trigger-button',
        header: 'p-dialog-header',
        title: 'p-dialog-title',
        headerActions: 'p-dialog-header-actions',
        maximize: 'p-dialog-maximize-button',
        close: 'p-dialog-close-button',
        content: 'p-dialog-content',
        footer: 'p-dialog-footer'
    },
    inlineStyles: {
        mask: ({ props }) => ({
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent:
                props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft' ? 'flex-start' : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright' ? 'flex-end' : 'center',
            alignItems:
                props.position === 'top' || props.position === 'topleft' || props.position === 'topright' ? 'flex-start' : props.position === 'bottom' || props.position === 'bottomleft' || props.position === 'bottomright' ? 'flex-end' : 'center',
            pointerEvents: props.modal ? 'auto' : 'none'
        }),
        root: {
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto'
        }
    }
});
