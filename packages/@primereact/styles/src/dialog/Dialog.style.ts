import { createStyles } from '@primereact/styles/utils';
import type { DialogRootInstance } from '@primereact/types/shared/dialog';
import { style } from '@primeuix/styles/dialog';

const _style = /*css*/ `
${style}

/* For PrimeReact */
.p-dialog-backdrop {
    position: fixed;
    inset: 0;
    pointer-events: none;
}

.p-dialog-backdrop.p-overlay-mask {
    pointer-events: auto;
}

.p-dialog {
    position: fixed;
    top: 50%;
    inset-inline-start: 50%;
    translate: -50% -50%;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
}

.p-dialog[data-position='left'] {
    inset-inline-start: 1rem;
    translate: 0 -50%;
}

.p-dialog[data-position='right'] {
    inset-inline-start: auto;
    inset-inline-end: 1rem;
    translate: 0 -50%;
}

.p-dialog[data-position='top'] {
    top: 1rem;
    translate: -50% 0;
}

.p-dialog[data-position='bottom'] {
    top: auto;
    bottom: 1rem;
    translate: -50% 0;
}

.p-dialog[data-position='topleft'] {
    top: 1rem;
    inset-inline-start: 1rem;
    translate: none;
}

.p-dialog[data-position='topright'] {
    top: 1rem;
    inset-inline-start: auto;
    inset-inline-end: 1rem;
    translate: none;
}

.p-dialog[data-position='bottomleft'] {
    top: auto;
    bottom: 1rem;
    inset-inline-start: 1rem;
    translate: none;
}

.p-dialog[data-position='bottomright'] {
    top: auto;
    bottom: 1rem;
    inset-inline-start: auto;
    inset-inline-end: 1rem;
    translate: none;
}

.p-dialog-maximized {
    translate: none !important;
}

`;

export const styles = createStyles<DialogRootInstance>({
    name: 'dialog',
    style: _style,
    classes: {
        backdrop: 'p-dialog-backdrop p-overlay-mask',
        root: ({ props, state }) => {
            const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
            const pos = positions.find((item) => item === props.position);

            return [
                'p-dialog p-component',
                {
                    'p-dialog-maximized': state.maximized
                },
                pos ? `p-dialog-${pos}` : ''
            ];
        },
        trigger: 'p-dialog-trigger-button',
        header: 'p-dialog-header',
        title: 'p-dialog-title',
        headerActions: 'p-dialog-header-actions',
        maximize: 'p-dialog-maximize-button',
        close: 'p-dialog-close-button',
        content: 'p-dialog-content',
        footer: 'p-dialog-footer'
    }
});
